"use client";

import { useState } from "react";
import { Loader2, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation"; 

const revenueRanges = [
  "Até R$ 40.000",
  "R$ 40.000 - R$ 50.000",
  "R$ 50.000 - R$ 80.000",
  "R$ 80.000 - R$ 100.000",
  "R$ 100.000 - R$ 150.000",
  "R$ 150.000 - R$ 250.000",
  "R$ 500.000 - R$ 1.000.000",
];

const employeeOptions = [
  "1 a 3",
  "3 a 5",
  "5 a 7",
  "7 a 15",
  "15 a 30",
  "Mais que 30"
];

const ticketOptions = [
  "Até R$ 30,00",
  "R$ 30,00 a R$ 50,00",
  "R$ 50,00 a R$ 80,00",
  "R$ 80,00 a R$ 120,00",
  "Acima de R$ 120,00"
];

const ordersPerDayOptions = [
  "Até 15",
  "15 a 20",
  "20 a 30",
  "30 a 50",
  "50 a 100",
  "Mais que 100"
];

export function MiniForm({ redirectTo = "/atendimento" }: { redirectTo?: string }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+55 ");
  const [companyName, setCompanyName] = useState("");
  const [revenue, setRevenue] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [averageTicket, setAverageTicket] = useState("");
  const [ordersPerDay, setOrdersPerDay] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    setName(val);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, ""); 
    if (!val.startsWith("55")) val = "55" + val;
    if (val.length > 13) val = val.substring(0, 13);

    let formatted = "+55 ";
    if (val.length > 2) formatted += "(" + val.substring(2, 4);
    if (val.length > 4) formatted += ") " + val.substring(4, 9);
    if (val.length > 9) formatted += "-" + val.substring(9, 13);
    if (val === "55" || val.length < 2) formatted = "+55 ";
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://n8n.srv966092.hstgr.cloud/webhook/weeat-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: name,
          telefone: phone,
          empresa: companyName,
          faturamento: revenue,
          funcionarios: employeeCount,
          ticket_medio: averageTicket,
          pedidos_por_dia: ordersPerDay,
          origem: "LP Curta",
          data: new Date().toLocaleString("pt-BR")
        }),
      });
    } catch (error) {
      console.error("Erro ao enviar para o n8n:", error);
    }

    setIsSubmitting(false);

    if (revenue === "Até R$ 40.000") {
       alert("Agradecemos o contato! Infelizmente o seu perfil não atende aos nossos requisitos no momento.");
       return; 
    }

    router.push(redirectTo);
  };

  const inputStyle = "w-full h-11 bg-[#141414] border border-white/10 rounded-xl px-4 text-white text-sm placeholder:text-white/20 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-all font-[family-name:var(--font-poppins)] mt-1"; 
  const labelStyle = "text-white/80 text-xs font-semibold font-[family-name:var(--font-poppins)] block pl-1";
  const selectWrapperStyle = "relative w-full mt-1";
  const selectStyle = "w-full h-11 bg-[#141414] border border-white/10 rounded-xl px-4 text-white text-sm focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-all font-[family-name:var(--font-poppins)] appearance-none cursor-pointer pr-10";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3">
        
        <div className="lg:col-span-2">
          <label htmlFor="name" className={labelStyle}>Nome</label>
          <input id="name" type="text" placeholder="Seu nome" required className={inputStyle} value={name} onChange={handleNameChange} />
        </div>
        
        <div className="lg:col-span-2">
          <label htmlFor="whatsapp" className={labelStyle}>WhatsApp</label>
          <input id="whatsapp" type="tel" placeholder="+55 (00) 00000-0000" required className={inputStyle} value={phone} onChange={handlePhoneChange} />
        </div>

        <div className="lg:col-span-2">
          <label htmlFor="companyName" className={labelStyle}>Nome da empresa</label>
          <input id="companyName" type="text" placeholder="Sua empresa" required className={inputStyle} value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </div>

        <div className="lg:col-span-1">
          <label htmlFor="revenue" className={labelStyle}>Faturamento Mensal</label>
          <div className={selectWrapperStyle}>
            <select id="revenue" required className={`${selectStyle} ${revenue === "" ? "text-white/40" : "text-white"}`} value={revenue} onChange={(e) => setRevenue(e.target.value)}>
              <option value="" disabled>Selecione</option>
              {revenueRanges.map((range) => (
                <option key={range} value={range} className="text-black bg-white">{range}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-[calc(50%+2px)] -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
          </div>
        </div>

        <div className="lg:col-span-1">
          <label htmlFor="employeeCount" className={labelStyle}>Número de funcionários</label>
          <div className={selectWrapperStyle}>
            <select id="employeeCount" required className={`${selectStyle} ${employeeCount === "" ? "text-white/40" : "text-white"}`} value={employeeCount} onChange={(e) => setEmployeeCount(e.target.value)}>
              <option value="" disabled>Selecione</option>
              {employeeOptions.map((item) => (
                <option key={item} value={item} className="text-black bg-white">{item}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-[calc(50%+2px)] -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
          </div>
        </div>

        <div className="lg:col-span-1">
          <label htmlFor="averageTicket" className={labelStyle}>Ticket Médio</label>
          <div className={selectWrapperStyle}>
            <select id="averageTicket" required className={`${selectStyle} ${averageTicket === "" ? "text-white/40" : "text-white"}`} value={averageTicket} onChange={(e) => setAverageTicket(e.target.value)}>
              <option value="" disabled>Selecione</option>
              {ticketOptions.map((item) => (
                <option key={item} value={item} className="text-black bg-white">{item}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-[calc(50%+2px)] -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
          </div>
        </div>

        <div className="lg:col-span-1">
          <label htmlFor="ordersPerDay" className={labelStyle}>Número de pedidos por dia</label>
          <div className={selectWrapperStyle}>
            <select id="ordersPerDay" required className={`${selectStyle} ${ordersPerDay === "" ? "text-white/40" : "text-white"}`} value={ordersPerDay} onChange={(e) => setOrdersPerDay(e.target.value)}>
              <option value="" disabled>Selecione</option>
              {ordersPerDayOptions.map((item) => (
                <option key={item} value={item} className="text-black bg-white">{item}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-[calc(50%+2px)] -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
          </div>
        </div>

      </div>

      <button type="submit" disabled={isSubmitting} className="w-full h-12 bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold rounded-full uppercase tracking-tighter text-[15px] transition-all flex items-center justify-center gap-2 mt-4 font-[family-name:var(--font-poppins)]">
        {isSubmitting ? <Loader2 className="animate-spin" /> : "Quero lucrar mais agora"}
      </button>
    </form>
  );
}