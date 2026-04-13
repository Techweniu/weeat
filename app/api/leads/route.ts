import { NextResponse } from "next/server"
import { z } from "zod"
import crypto from 'crypto' // <-- Importação necessária para a CAPI do Facebook

// Função auxiliar para criptografar dados no padrão SHA-256 (Exigência do Facebook)
const hashData = (data: string) => {
  if (!data) return '';
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
};

// 1. Schema de validação
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

    // 2. Valida os dados
    const validation = leadSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: validation.error.flatten().fieldErrors }, 
        { status: 400 }
      )
    }

    // --- 3. ENVIO DIRETO PARA O N8N ---
    const WEBHOOK_URL = "https://n8n.srv966092.hstgr.cloud/webhook/weeat-leads" 
    
    console.log("Enviando para o n8n...")
    
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validation.data), 
    })

    if (!response.ok) {
      console.error("Erro no n8n:", await response.text())
      throw new Error("Falha ao enviar para o n8n")
    }

    console.log("Sucesso no n8n!")

    // --- 4. ENVIO PARA A API DE CONVERSÃO DO FACEBOOK (CAPI) ---
    try {
      const fbPixelId = process.env.FB_PIXEL_ID;
      const fbToken = process.env.FB_ACCESS_TOKEN;

      // Só executa se as variáveis de ambiente estiverem configuradas na Vercel
      if (fbPixelId && fbToken) {
        
        // Trata os dados do usuário antes de criptografar
        const hashedEmail = hashData(validation.data.email);
        const hashedPhone = hashData("55" + validation.data.phone.replace(/\D/g, "")); 
        
        const nameParts = validation.data.name.trim().toLowerCase().split(" ");
        const hashedFirstName = hashData(nameParts[0]);
        const hashedLastName = nameParts.length > 1 ? hashData(nameParts.slice(1).join(" ")) : "";

        // Monta o pacote de dados para o Facebook
        const fbEventData = {
          data: [
            {
              event_name: "Lead",
              event_time: Math.floor(Date.now() / 1000), // Tempo atual em segundos
              action_source: "website",
              user_data: {
                em: [hashedEmail],
                ph: [hashedPhone],
                fn: [hashedFirstName],
                ln: hashedLastName ? [hashedLastName] : [],
                // Captura de IP e Navegador (Aumenta a nota de qualidade do evento no Facebook)
                client_ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || null,
                client_user_agent: request.headers.get("user-agent") || null,
              },
              custom_data: {
                currency: "BRL",
              }
            }
          ]
        };

        // Faz a chamada para a API do Facebook
        const fbResponse = await fetch(`https://graph.facebook.com/v19.0/${fbPixelId}/events?access_token=${fbToken}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fbEventData),
        });
        
        if(!fbResponse.ok){
             console.error("Erro no Facebook CAPI:", await fbResponse.text());
        } else {
             console.log("Sucesso no Facebook CAPI!");
        }
      } else {
         console.warn("Variáveis de ambiente FB_PIXEL_ID ou FB_ACCESS_TOKEN ausentes. CAPI não disparada.");
      }
    } catch (fbError) {
       // Isolamos o erro do Facebook num try/catch separado para que, se der falha no Facebook,
       // o Lead ainda seja salvo com sucesso no seu n8n e o utilizador receba a mensagem de sucesso!
       console.error("Exceção ao enviar para o Facebook CAPI:", fbError);
    }
    // -----------------------------------------------------------

    return NextResponse.json(
      { success: true, message: "Lead processado com sucesso!" },
      { status: 201 }
    )
    
  } catch (error) {
    console.error("Erro ao processar:", error)
    return NextResponse.json({ error: "Erro interno." }, { status: 500 })
  }
}