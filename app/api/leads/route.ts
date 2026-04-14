import { NextResponse } from "next/server"
import { z } from "zod"
import crypto from 'crypto'
import { cookies } from 'next/headers'

const hashData = (data: string) => {
  if (!data) return '';
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
};

const leadSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  companyName: z.string().min(2, "Nome da empresa inválido"),
  segment: z.string().min(1, "Segmento obrigatório"),
  revenue: z.string().min(1, "Faturamento obrigatório"),
  plan: z.string().optional().nullable(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = leadSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: validation.error.flatten().fieldErrors }, 
        { status: 400 }
      )
    }

    const WEBHOOK_URL = "https://n8n.srv966092.hstgr.cloud/webhook/weeat-leads" 
    const n8nResponse = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validation.data), 
    })

    if (!n8nResponse.ok) {
      console.error("Erro no n8n:", await n8nResponse.text())
    }

    try {
      const fbPixelId = process.env.FB_PIXEL_ID;
      const fbToken = process.env.FB_ACCESS_TOKEN;

      if (fbPixelId && fbToken) {
        
        const cookieStore = await cookies(); 
        const fbp = cookieStore.get('_fbp')?.value || null;
        const fbc = cookieStore.get('_fbc')?.value || null;

        const hashedEmail = hashData(validation.data.email);
        const hashedPhone = hashData("55" + validation.data.phone.replace(/\D/g, "")); 
        const nameParts = validation.data.name.trim().toLowerCase().split(" ");
        const hashedFirstName = hashData(nameParts[0]);
        const hashedLastName = nameParts.length > 1 ? hashData(nameParts.slice(1).join(" ")) : "";

        const fbEventData = {
          data: [
            {
              event_name: "Lead",
              event_time: Math.floor(Date.now() / 1000),
              action_source: "website",
              event_source_url: request.headers.get("referer") || "https://weeat.com.br",
              user_data: {
                em: [hashedEmail],
                ph: [hashedPhone],
                fn: [hashedFirstName],
                ln: hashedLastName ? [hashedLastName] : [],
                external_id: [hashedEmail], // <-- ADICIONADO PARA NOTA 10/10
                client_ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || null,
                client_user_agent: request.headers.get("user-agent") || null,
                fbp: fbp,
                fbc: fbc
              },
              custom_data: {
                value: 1.00,
                currency: "BRL",
                content_name: "Consultoria WeEat Growth"
              }
            }
          ]
        };

        const fbResponse = await fetch(`https://graph.facebook.com/v19.0/${fbPixelId}/events?access_token=${fbToken}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fbEventData),
        });
        
        if (!fbResponse.ok) {
          console.error("Erro no Facebook CAPI:", await fbResponse.text());
        } else {
          console.log("Sucesso no Facebook CAPI!");
        }
      }
    } catch (fbError) {
       console.error("Exceção no Facebook CAPI:", fbError);
    }

    return NextResponse.json(
      { success: true, message: "Lead processado com sucesso!" },
      { status: 201 }
    )
    
  } catch (error) {
    console.error("Erro no processamento:", error)
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 })
  }
}