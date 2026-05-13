"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, Send, Building2, User, Phone, Users, Landmark, Ticket, ClipboardList } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// 1. CORREÇÃO: Adicionado .min(1) nos campos de seleção para torná-los obrigatoriamente preenchidos.
const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  phone: z.string().min(14, { message: "Insira um telefone válido com DDD." }),
  companyName: z.string().min(2, { message: "Nome da empresa é obrigatório." }),
  revenue: z.string().min(1, { message: "Selecione uma faixa de faturamento." }),
  employeeCount: z.string().min(1, { message: "Selecione o número de funcionários." }),
  averageTicket: z.string().min(1, { message: "Selecione o ticket médio." }),
  ordersPerDay: z.string().min(1, { message: "Selecione o número de pedidos por dia." }), 
})

const revenueRanges = [
  "Até R$ 40.000",
  "R$ 40.000 - R$ 50.000",
  "R$ 50.000 - R$ 80.000",
  "R$ 80.000 - R$ 100.000",
  "R$ 100.000 - R$ 150.000",
  "R$ 150.000 - R$ 250.000",
  "R$ 500.000 - R$ 1.000.000",
]

const employeeOptions = [
  "1 a 3",
  "3 a 5",
  "5 a 7",
  "7 a 15",
  "15 a 30",
  "Mais que 30"
]

const ticketOptions = [
  "Até R$ 30,00",
  "R$ 30,00 a R$ 50,00",
  "R$ 50,00 a R$ 80,00",
  "R$ 80,00 a R$ 120,00",
  "Acima de R$ 120,00"
]

const ordersPerDayOptions = [
  "Até 15",
  "15 a 20",
  "20 a 30",
  "30 a 50",
  "50 a 100",
  "Mais que 100"
]

export function ContactForm({ redirectTo = "/conectando" }: { redirectTo?: string }) {
  const router = useRouter()
  const [isSubmitting, ReactSetIsSubmitting] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", phone: "+55 ", companyName: "", employeeCount: "", revenue: "", averageTicket: "", ordersPerDay: "", 
    },
  })

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    let val = e.target.value.replace(/\D/g, ""); 
    if (!val.startsWith("55")) val = "55" + val;
    if (val.length > 13) val = val.substring(0, 13);

    let formatted = "+55 ";
    if (val.length > 2) formatted += "(" + val.substring(2, 4);
    if (val.length > 4) formatted += ") " + val.substring(4, 9);
    if (val.length > 9) formatted += "-" + val.substring(9, 13);
    if (val === "55" || val.length < 2) formatted = "+55 ";
    
    onChange(formatted); 
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    ReactSetIsSubmitting(true)
    
    try {
      await fetch("https://n8n.srv966092.hstgr.cloud/webhook/weeat-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: values.name,
          telefone: values.phone.replace("+", ""), // 2. CORREÇÃO: Remove o "+" antes de enviar
          empresa: values.companyName,
          faturamento: values.revenue,
          funcionarios: values.employeeCount,
          ticket_medio: values.averageTicket,
          pedidos_por_dia: values.ordersPerDay, 
          origem: "LP Principal",
          data: new Date().toLocaleString("pt-BR")
        }),
      })
    } catch (error) {
      console.error("Erro ao enviar para o n8n:", error)
    }

    ReactSetIsSubmitting(false)
    router.push(redirectTo) // 3. CORREÇÃO: Redirecionamento reativado (e alert removido)
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
                        <FormLabel className="text-[#1a1710]/80">Nome:</FormLabel>
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
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1a1710]/80">WPP:</FormLabel>
                        <FormControl>
                          <div className="relative group flex items-center">
                            <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-[#f78608] z-10" />
                            <Input 
                              placeholder="+55 (00) 00000-0000" 
                              className={inputClasses} 
                              {...field} 
                              onChange={(e) => handlePhoneChange(e, field.onChange)} 
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
                        <FormLabel className="text-[#1a1710]/80">Nome da empresa:</FormLabel>
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
                    name="revenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1a1710]/80">Faturamento mensal:</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <div className="relative group">
                              <Landmark className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 z-10 pointer-events-none" />
                              <SelectTrigger className={`${inputClasses} pl-10`}>
                                <SelectValue placeholder="Selecione" />
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <FormField
                    control={form.control}
                    name="employeeCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1a1710]/80">Número de funcionários:</FormLabel>
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

                  <FormField
                    control={form.control}
                    name="averageTicket"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1a1710]/80">Ticket Médio:</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <div className="relative group">
                              <Ticket className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 z-10 pointer-events-none" />
                              <SelectTrigger className={`${inputClasses} pl-10`}>
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                            </div>
                          </FormControl>
                          <SelectContent className="bg-white">
                            {ticketOptions.map((item) => (
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
                  name="ordersPerDay"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1a1710]/80">Número de pedidos por dia:</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <div className="relative group">
                            <ClipboardList className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 z-10 pointer-events-none" />
                            <SelectTrigger className={`${inputClasses} pl-10`}>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                          </div>
                        </FormControl>
                        <SelectContent className="bg-white">
                          {ordersPerDayOptions.map((item) => (
                            <SelectItem key={item} value={item}>{item}</SelectItem>
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
                    {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processando...</> : "QUERO ESCALAR MEU FATURAMENTO"}
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