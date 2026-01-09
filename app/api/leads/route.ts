import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // Adicionado: plan na desestruturação
    const { name, email, phone, companyName, segment, revenue, plan } = body

    if (!name || !email || !phone || !companyName || !segment || !revenue) {
      return NextResponse.json({ error: "Todos os campos obrigatórios devem ser preenchidos." }, { status: 400 })
    }

    // Inserir lead no banco de dados com o plano
    const result = await sql`
      INSERT INTO leads (name, email, phone, company_name, segment, revenue, plan)
      VALUES (${name}, ${email}, ${phone}, ${companyName}, ${segment}, ${revenue}, ${plan || null})
      RETURNING id, created_at
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
    return NextResponse.json({ error: "Erro ao processar sua solicitação. Tente novamente." }, { status: 500 })
  }
}
