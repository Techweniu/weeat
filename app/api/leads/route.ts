import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, companyName, segment, revenue } = body

    // Validação básica
    if (!name || !email || !phone || !companyName || !segment || !revenue) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios." }, { status: 400 })
    }

    // Inserir lead no banco de dados
    const result = await sql`
      INSERT INTO leads (name, email, phone, company_name, segment, revenue)
      VALUES (${name}, ${email}, ${phone}, ${companyName}, ${segment}, ${revenue})
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
