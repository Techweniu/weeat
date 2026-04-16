"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, Send, Building2, User, Phone, Users, Landmark } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// --- ESQUEMA DE VALIDAÇÃO ---
const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  phone: z.string().min(14, { message: "Insira um telefone válido com DDD." }),
  companyName: z.string().min(2, { message: "Nome da empresa é obrigatório." }),
  employeeCount: z.string({ required_error: "Selecione o número de funcionários." }),
  revenue: z.string({ required_error: "Selecione uma faixa de faturamento." }),
})

const employeeOptions = ["1 a 5", "6 a 15", "16 a 30", "31 a 50", "Mais de 50"]

const revenueRanges = [
  "R$ 500.000 - R$ 1.000.000",
  "R$ 250.000 - R$ 500.000",
  "R$ 150.000 - R$ 250.000",
  "R$ 100.000 - R$ 150.000",
  "R$ 80.000 - R$ 100.000",
  "R$ 60.000 - R$ 80.000",
  "R$ 40.000 - R$ 60.000",
  "Até R$ 40.000",
]

export function ContactForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", phone: "", companyName: "", employeeCount: "", revenue: "",
    },
  })

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.startsWith("55") && value.length > 11) value = value.substring(2)
    if (value.length > 11) value = value.substring(0, 11)
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    onChange(value)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // --- CAPTURA DE RASTREABILIDADE (UTMs e IDs de Clique) ---
      const payload = {
        ...values,
        utm_source: searchParams.get("utm_source") || "direto",
        utm_medium: searchParams.get("utm_medium") || "organico",
        utm_campaign: searchParams.get("utm_campaign") || "",
        utm_term: searchParams.get("utm_term") || "",
        utm_content: searchParams.get("utm_content") || "",
        gclid: searchParams.get("gclid") || "", // Google Ads ID
        fbclid: searchParams.get("fbclid") || "", // Facebook Ads ID
        page_url: window.location.href
      }

      // Envia os dados para a tua API/Webhook
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      
      if (!response.ok) throw new Error("Erro ao enviar formulário")
      
      // --- RASTREIO DE CONVERSÃO (META PIXEL) ---
      if (typeof window !== "undefined" && (window as any).fbq) {
        
        // Só dispara Lead se não for faturamento mínimo
        if (values.revenue !== "Até R$ 40.000") {
          const userPhone = "55" + values.phone.replace(/\D/g, ""); 
          const nameParts = values.name.trim().toLowerCase().split(" ");

          (window as any).fbq('track', 'Lead', {
            content_name: 'Formulário Qualificado',
            value: 1.00,
            currency: 'BRL',
            predicted_ltv: values.revenue // Passa o faturamento para o Pixel otimizar
          });
        }
      }

      // Redireciona para a página de obrigado
      router.push('/obrigado')

    } catch (error) {
      console.error(error)
      alert("Ocorreu um erro ao enviar. Por favor, tente novamente.")
      setIsSubmitting(false)
    }
  }

  const inputClasses = "pl-10 h-12 bg-white border-[#1a1710]/20 focus:border-[#f78608] focus:ring-[#f78608]/20 rounded-xl text-base md:text-sm text-[#1a1710] shadow-sm"

  return (
    <section id="contato" className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-2xl relative z-10">
        <Card className="bg-white border-2 border-[#f78608]/10 shadow-2xl rounded-3xl overflow-hidden">
          <CardHeader className="bg-[#f78608]/5 px-6 py-6 md:px-8 md:py-8 border-b border-[#f78608]/10 text-center">
            <CardTitle className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-2xl font-[family-name:var(--font-gate)] text-[#1a1710]">
              <div className="p-2 bg-white rounded-full shadow-sm">
                 <Send className="size-5 md:size-6 text-[#f78608]" />
              </div>
              Fale com um especialista
            </CardTitle>
            <CardDescription className="font-[family-name:var(--font-poppins)] text-[#1a1710]/60 text-sm md:text-base mt-2">
              Preencha os dados abaixo para receber sua proposta.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1a1710]/80">Seu nome</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-[#f78608]" />
                            <Input placeholder="Nome completo" className={inputClasses} {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field: { onChange, ...field } }) => (
                      <FormItem>
                        <FormLabel className="text-[#1a1710]/80">WhatsApp</FormLabel>
                        <FormControl>
                          <div className="relative group flex items-center">
                            <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-[#f78608] z-10" />
                            <span className="absolute left-9 top-[13px] text-[#1a1710]/40 text-base md:text-sm font-medium z-10">+55</span>
                            <Input 
                              placeholder="(00) 00000-0000" 
                              className={`${inputClasses.replace('pl-10', 'pl-[70px]')}`} 
                              onChange={(e) => handlePhoneChange(e, onChange)} 
                              {...field} 
                            />
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
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1a1710]/80">Nome da Empresa</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Building2 className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-[#f78608]" />
                            <Input placeholder="Nome do Restaurante" className={inputClasses} {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="employeeCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1a1710]/80">Nº de Funcionários</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <div className="relative group">
                              <Users className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 z-10 pointer-events-none" />
                              <SelectTrigger className={`${inputClasses} pl-10`}>
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                            </div>
                          </FormControl>
                          <SelectContent className="bg-white">
                            {employeeOptions.map((item) => (
                              <SelectItem key={item} value={item}>{item}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="revenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1a1710]/80">Faturamento Mensal</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <div className="relative group">
                            <Landmark className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 z-10 pointer-events-none" />
                            <SelectTrigger className={`${inputClasses} pl-10`}>
                              <SelectValue placeholder="Selecione a faixa atual" />
                            </SelectTrigger>
                          </div>
                        </FormControl>
                        <SelectContent className="bg-white">
                          {revenueRanges.map((range) => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full h-14 md:h-16 bg-[#f78608] hover:bg-[#da7607] text-white rounded-full font-bold shadow-lg hover:scale-[1.02] transition-all text-sm md:text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> A Processar...</> : "QUERO ESCALAR MEU FATURAMENTO"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}