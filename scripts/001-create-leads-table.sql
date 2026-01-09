-- Criação da tabela de leads para armazenar os contatos do formulário
CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  segment VARCHAR(100) NOT NULL,
  revenue VARCHAR(100) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Índice para buscas por email
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Índice para ordenação por data
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
