import { NextResponse } from "next/server"
import { z } from "zod"

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
    // Coloque aqui o seu link certinho
    const WEBHOOK_URL = "https://n8n.srv966092.hstgr.cloud/webhook-test/weeat-leads" 
    
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

    return NextResponse.json(
      { success: true, message: "Lead enviado para o n8n com sucesso!" },
      { status: 201 }
    )
    
  } catch (error) {
    console.error("Erro ao processar:", error)
    return NextResponse.json({ error: "Erro interno." }, { status: 500 })
  }
}