import { NextResponse } from "next/server"
import { z } from "zod"
import crypto from 'crypto'
import { cookies } from 'next/headers'

// Função para criptografar dados sensíveis (SHA256) exigida pela Meta
const hashData = (data: string) => {
  if (!data) return '';
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
};

// 1. DEFINIÇÃO DO NOVO ESQUEMA DE VALIDAÇÃO (ZOD) ATUALIZADO
const leadSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  phone: z.string().min(10, "Telefone inválido"),
  companyName: z.string().min(2, "Nome da empresa inválido"),
  employeeCount: z.string().min(1, "Nº de funcionários obrigatório"),
  revenue: z.string().min(1, "Faturamento obrigatório"),
  averageTicket: z.string().min(1, "Ticket médio obrigatório"), // Novo campo
  hasOwnDelivery: z.string().min(1, "Opção de entregador obrigatória"), // Novo campo
  event_id: z.string().optional(), // Novo campo para deduplicação da Meta
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
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

    // --- 1. ENVIO PARA O N8N (Sempre envia todos os leads para o CRM/Planilha) ---
    const WEBHOOK_URL = "https://n8n.srv966092.hstgr.cloud/webhook/weeat-leads" 
    const n8nResponse = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validation.data), 
    })

    if (!n8nResponse.ok) {
      console.error("Erro no n8n:", await n8nResponse.text())
    }

    // --- 2. ENVIO PARA O FACEBOOK (CAPI) - SÓ PARA LEADS QUALIFICADOS ---
    // A NOVA CONDIÇÃO: Só envia se o faturamento for DIFERENTE de "Até R$ 40.000"
    if (validation.data.revenue !== "Até R$ 40.000") {
      try {
        const fbPixelId = process.env.FB_PIXEL_ID;
        const fbToken = process.env.FB_ACCESS_TOKEN;

        if (fbPixelId && fbToken) {
          const cookieStore = await cookies(); 
          const fbp = cookieStore.get('_fbp')?.value || null;
          const fbc = cookieStore.get('_fbc')?.value || null;

          // Preparação dos dados para a Meta (Uso do Telefone como ID principal)
          const cleanPhone = "55" + validation.data.phone.replace(/\D/g, "");
          const hashedPhone = hashData(cleanPhone);
          const nameParts = validation.data.name.trim().toLowerCase().split(" ");
          const hashedFirstName = hashData(nameParts[0]);
          const hashedLastName = nameParts.length > 1 ? hashData(nameParts.slice(1).join(" ")) : "";

          const fbEventData = {
            data: [
              {
                event_name: "Lead",
                event_time: Math.floor(Date.now() / 1000),
                event_id: validation.data.event_id, // Injeção do eventId no payload da API da Meta
                action_source: "website",
                event_source_url: request.headers.get("referer") || "https://weeat.com.br",
                user_data: {
                  ph: [hashedPhone], // Telefone enviado
                  fn: [hashedFirstName],
                  ln: hashedLastName ? [hashedLastName] : [],
                  external_id: [hashedPhone], // Telefone usado como ID único (external_id)
                  client_ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || null,
                  client_user_agent: request.headers.get("user-agent") || null,
                  fbp: fbp,
                  fbc: fbc
                },
                custom_data: {
                  value: 1.00,
                  currency: "BRL",
                  content_name: "Lead Qualificado > 40k" 
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
          }
        }
      } catch (fbError) {
         console.error("Exceção no Facebook CAPI:", fbError);
      }
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