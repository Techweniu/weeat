import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"
import { z } from "zod"

const sql = neon(process.env.DATABASE_URL!)

// 1. Definimos o Schema de validação (igual ou mais rigoroso que o frontend)
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

    // 2. Validamos os dados recebidos ANTES de qualquer coisa
    const validation = leadSchema.safeParse(body)

    if (!validation.success) {
      // Se falhar, retornamos os erros exatos para quem tentou enviar
      return NextResponse.json(
        { 
          error: "Dados inválidos", 
          details: validation.error.flatten().fieldErrors 
        }, 
        { status: 400 }
      )
    }

    // Se passou, usamos os dados validados (validation.data)
    const { name, email, phone, companyName, segment, revenue, plan } = validation.data

    // 3. Inserção Segura no Banco (Colunas em Português)
    const result = await sql`
      INSERT INTO leads (
        nome, 
        email, 
        telefone, 
        nome_empresa, 
        segmento, 
        faturamento, 
        plano
      )
      VALUES (
        ${name}, 
        ${email}, 
        ${phone}, 
        ${companyName}, 
        ${segment}, 
        ${revenue}, 
        ${plan || null}
      )
      RETURNING id, data_criacao
    `

    return NextResponse.json(
      {
        success: true,
        message: "Lead cadastrado com sucesso!",
        data: result[0],
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Erro ao salvar lead:", error)
    return NextResponse.json({ error: "Erro interno ao processar solicitação." }, { status: 500 })
  }
}
