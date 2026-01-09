"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, Send, Building2, User, Mail, Phone, Store, DollarSign, CheckCircle2, Crown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// Schema (Mantido)
const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Insira um e-mail válido." }),
  phone: z.string().min(14, { message: "Insira um telefone válido com DDD." }),
  companyName: z.string().min(2, { message: "Nome da empresa é obrigatório." }),
  segment: z.string({ required_error: "Selecione um segmento." }),
  revenue: z.string({ required_error: "Selecione uma faixa de faturamento." }),
  plan: z.string().optional(),
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

const plans = ["Gold", "Diamond", "Ainda não sei"]

interface ContactFormProps {
  preSelectedPlan?: string
}

export function ContactForm({ preSelectedPlan }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", email: "", phone: "", companyName: "", segment: "", revenue: "", plan: "",
    },
  })

  React.useEffect(() => {
    if (preSelectedPlan) {
      form.setValue("plan", preSelectedPlan)
    }
  }, [preSelectedPlan, form])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length > 11) value = value.substring(0, 11)
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    onChange(value)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Erro ao enviar formulário")
      setSubmitStatus({ type: "success", message: "Sucesso! Entraremos em contato em breve." })
      form.reset()
    } catch (error) {
      setSubmitStatus({ type: "error", message: error instanceof Error ? error.message : "Erro ao enviar. Tente novamente." })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Classe utilitária para inputs: text-base no mobile (16px) evita zoom, md:text-sm no desktop
  const inputClasses = "pl-10 h-12 bg-white border-gray-200 focus:border-[#f78608] focus:ring-[#f78608]/20 rounded-xl text-base md:text-sm"

  return (
    <section id="contato" className="py-16 md:py-24 px-4 bg-[#FFFBF5] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f78608]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#22C55E]/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-2xl relative z-10">
        
        <Card className="bg-white/90 md:bg-white/80 backdrop-blur-md border-2 border-[#f78608]/20 shadow-xl md:shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl overflow-hidden">
          <CardHeader className="bg-[#f78608]/5 px-6 py-6 md:px-8 md:py-8 border-b border-[#f78608]/10 text-center">
            <CardTitle className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-2xl font-[family-name:var(--font-gate)] text-[#1A1A1A]">
              <div className="p-2 bg-white rounded-full shadow-sm">
                 <Send className="size-5 md:size-6 text-[#f78608]" />
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
                  <CheckCircle2 className="size-12 text-green-600" />
                </div>
                <h3 className="font-[family-name:var(--font-gate)] text-2xl text-[#1A1A1A] mb-2">Dados enviados!</h3>
                <p className="font-[family-name:var(--font-poppins)] text-gray-600 mb-6">{submitStatus.message}</p>
                <Button variant="outline" onClick={() => setSubmitStatus({ type: null, message: "" })} className="rounded-full font-[family-name:var(--font-poppins)]">
                  Enviar outro contato
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
                  
                  {/* Plano de Interesse */}
                  <FormField
                      control={form.control}
                      name="plan"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-[family-name:var(--font-poppins)] font-medium text-[#f78608]">Interesse no Plano</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className={`pl-10 h-12 bg-orange-50/50 border-orange-200 focus:border-[#f78608] focus:ring-[#f78608]/20 rounded-xl relative text-base md:text-sm`}>
                                <Crown className="absolute left-3 top-3 h-4 w-4 text-[#f78608] z-10" />
                                <SelectValue placeholder="Selecione o plano desejado" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {plans.map((item) => (
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-[family-name:var(--font-poppins)] font-medium">Seu nome</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-[#f78608] transition-colors" />
                              <Input placeholder="Nome completo" className={inputClasses} {...field} />
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
                          <FormLabel className="font-[family-name:var(--font-poppins)] font-medium">Melhor e-mail</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-[#f78608] transition-colors" />
                              <Input placeholder="exemplo@email.com" className={inputClasses} {...field} />
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
                          <FormLabel className="font-[family-name:var(--font-poppins)] font-medium">WhatsApp</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-[#f78608] transition-colors" />
                              <Input placeholder="(00) 00000-0000" className={inputClasses} maxLength={15} onChange={(e) => handlePhoneChange(e, onChange)} {...field} />
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
                          <FormLabel className="font-[family-name:var(--font-poppins)] font-medium">Nome da Empresa</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <Building2 className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-[#f78608] transition-colors" />
                              <Input placeholder="Nome do Restaurante" className={inputClasses} {...field} />
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
                          <FormLabel className="font-[family-name:var(--font-poppins)] font-medium">Segmento</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className={inputClasses}>
                                <Store className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
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
                          <FormLabel className="font-[family-name:var(--font-poppins)] font-medium">Faturamento Mensal</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className={inputClasses}>
                                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
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
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        "Receber Proposta"
                      )}
                    </Button>
                    <p className="text-xs text-center text-gray-400 mt-4 font-[family-name:var(--font-poppins)]">
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
