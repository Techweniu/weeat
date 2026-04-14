"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, Send, Building2, User, Mail, Phone, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// Schema Atualizado (Sem o campo plan)
const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Insira um e-mail válido." }),
  phone: z.string().min(14, { message: "Insira um telefone válido com DDD." }),
  companyName: z.string().min(2, { message: "Nome da empresa é obrigatório." }),
  segment: z.string({ required_error: "Selecione um segmento." }),
  revenue: z.string({ required_error: "Selecione uma faixa de faturamento." }),
})

const segments = [
  "Pizzaria", "Hamburgueria", "Churrascaria / Steakhouse",
  "Restaurante Japonês / Asiático", "Massas e Comida Italiana",
  "Comida Brasileira", "Outros",
]

const revenueRanges = [
  "Até R$ 20.000", "R$ 20.000 - R$ 40.000", "R$ 40.000 - R$ 60.000",
  "R$ 60.000 - R$ 80.000", "R$ 80.000 - R$ 100.000", "R$ 100.000 - R$ 150.000",
  "R$ 150.000 - R$ 250.000", "R$ 250.000 - R$ 400.000", "R$ 400.000 - R$ 600.000",
  "R$ 600.000 - R$ 1.000.000", "Mais de R$ 1.000.000",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", email: "", phone: "", companyName: "", segment: "", revenue: "",
    },
  })

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    let value = e.target.value.replace(/\D/g, "")
    
    // Se o lead colar um número ou digitar começando com 55 (e tiver mais de 11 dígitos no total colado),
    // removemos o 55 da frente para encaixar perfeitamente na máscara.
    if (value.startsWith("55") && value.length > 11) {
      value = value.substring(2)
    }

    if (value.length > 11) value = value.substring(0, 11)
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    onChange(value)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      // 1. Envia os dados para a sua API (Kommo/n8n)
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Erro ao enviar formulário")
      
      // --- INCLUSÃO DO META PIXEL (EVENTO LEAD COM CORRESPONDÊNCIA AVANÇADA) ---
      if (typeof window !== "undefined" && (window as any).fbq) {
        
        // Limpamos os dados para o padrão do Facebook
        const userEmail = values.email.trim().toLowerCase();
        const userPhone = "55" + values.phone.replace(/\D/g, ""); // O +55 é adicionado no envio automaticamente
        const nameParts = values.name.trim().toLowerCase().split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

        // Inicia a Correspondência Avançada enviando os dados do Lead
        (window as any).fbq('init', '1260964142240541', {
          em: userEmail,
          ph: userPhone,
          fn: firstName,
          ln: lastName
        });

        // Dispara o evento de Lead com sucesso
        (window as any).fbq('track', 'Lead', {
          content_name: 'Formulário de Contato LP',
          status: 'Sucesso'
        });
      }
      // --------------------------------------------

      // 3. Mostra a mensagem de sucesso na tela
      setSubmitStatus({ type: "success", message: "Sucesso! Entraremos em contato em breve." })
      form.reset()
    } catch (error) {
      setSubmitStatus({ type: "error", message: error instanceof Error ? error.message : "Erro ao enviar. Tente novamente." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = "pl-10 h-12 bg-[#1a1710] border-white/20 focus:border-[#f78608] focus:ring-[#f78608]/20 rounded-xl text-base md:text-sm text-[#f5f0e8]"

  return (
    <section id="contato" className="py-16 md:py-24 px-4 bg-[#1a1710] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f78608]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#22C55E]/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-2xl relative z-10">
        
        <Card className="bg-[#242014]/90 md:bg-[#242014]/80 backdrop-blur-md border-2 border-[#f78608]/20 shadow-xl md:shadow-[0_8px_30px_rgb(0,0,0,0.4)] rounded-3xl overflow-hidden">
          <CardHeader className="bg-[#f78608]/5 px-6 py-6 md:px-8 md:py-8 border-b border-[#f78608]/10 text-center">
            <CardTitle className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-2xl font-[family-name:var(--font-gate)] text-[#f5f0e8]">
              <div className="p-2 bg-[#1a1710] rounded-full shadow-sm">
                 <Send className="size-5 md:size-6 text-[#f78608]" aria-hidden="true" />
              </div>
              Fale com um especialista
            </CardTitle>
            <CardDescription className="font-[family-name:var(--font-poppins)] text-sm md:text-base mt-2">
              Preencha para receber sua proposta personalizada.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            {submitStatus.type === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="bg-green-100 p-4 rounded-full mb-6 animate-bounce">
                  <CheckCircle2 className="size-12 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="font-[family-name:var(--font-gate)] text-2xl text-[#f5f0e8] mb-2">Dados enviados!</h3>
                <p className="font-[family-name:var(--font-poppins)] text-[#f5f0e8]/70 mb-6">{submitStatus.message}</p>
                <Button variant="outline" onClick={() => setSubmitStatus({ type: null, message: "" })} className="rounded-full font-[family-name:var(--font-poppins)]">
                  Enviar outro contato
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="input-name" className="font-[family-name:var(--font-poppins)] font-medium text-white">Seu nome</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-[#f78608] transition-colors" aria-hidden="true" />
                              <Input id="input-name" placeholder="Nome completo" className={inputClasses} {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="input-email" className="font-[family-name:var(--font-poppins)] font-medium text-white">Melhor e-mail</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-[#f78608] transition-colors" aria-hidden="true" />
                              <Input id="input-email" placeholder="exemplo@email.com" className={inputClasses} {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field: { onChange, ...field } }) => (
                        <FormItem>
                          <FormLabel htmlFor="input-phone" className="font-[family-name:var(--font-poppins)] font-medium text-white">WhatsApp</FormLabel>
                          <FormControl>
                            <div className="relative group flex items-center">
                              {/* Ícone */}
                              <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-[#f78608] z-10 transition-colors" aria-hidden="true" />
                              {/* Prefixo Fixo +55 */}
                              <span className="absolute left-9 top-[13px] text-[#f5f0e8]/50 text-base md:text-sm font-medium pointer-events-none z-10">
                                +55
                              </span>
                              {/* O campo de input ajustado com mais padding à esquerda (pl-[70px]) para acomodar o +55 */}
                              <Input 
                                id="input-phone" 
                                placeholder="(00) 00000-0000" 
                                className={`${inputClasses.replace('pl-10', 'pl-[70px]')}`} 
                                maxLength={15} 
                                onChange={(e) => handlePhoneChange(e, onChange)} 
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="input-company" className="font-[family-name:var(--font-poppins)] font-medium text-white">Nome da Empresa</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <Building2 className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-[#f78608] transition-colors" aria-hidden="true" />
                              <Input id="input-company" placeholder="Nome do Restaurante" className={inputClasses} {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <FormField
                      control={form.control}
                      name="segment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="select-segment" className="font-[family-name:var(--font-poppins)] font-medium text-white">Segmento</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger id="select-segment" aria-label="Selecione um segmento" className={inputClasses}>
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {segments.map((item) => (
                                <SelectItem key={item} value={item} className="font-[family-name:var(--font-poppins)]">
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="revenue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="select-revenue" className="font-[family-name:var(--font-poppins)] font-medium text-white">Faturamento Mensal</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger id="select-revenue" aria-label="Selecione uma faixa de faturamento" className={inputClasses}>
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {revenueRanges.map((range) => (
                                <SelectItem key={range} value={range} className="font-[family-name:var(--font-poppins)]">
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="pt-4 md:pt-6">
                    <Button
                      type="submit"
                      className="w-full text-lg h-14 md:h-14 bg-[#f78608] hover:bg-[#da7607] text-white rounded-full font-[family-name:var(--font-poppins)] font-medium shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                          Enviando...
                        </>
                      ) : (
                        "Receber Proposta"
                      )}
                    </Button>
                    <p className="text-xs text-center text-[#f5f0e8]/50 mt-4 font-[family-name:var(--font-poppins)]">
                      Seus dados estão protegidos.
                    </p>
                  </div>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}