"use client";

import { useState } from "react";
import { Loader2, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation"; 

export function MiniForm({ redirectTo = "/atendimento" }: { redirectTo?: string }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+55 ");
  const [companyName, setCompanyName] = useState("");
  const [revenue, setRevenue] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [hasDelivery, setHasDelivery] = useState("");

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
      // ENVIO REAL PARA O n8n COM A SUA URL DE PRODUÇÃO
      await fetch("https://n8n.srv966092.hstgr.cloud/webhook/weeat-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: name,
          telefone: phone,
          empresa: companyName,
          faturamento: revenue === "ate_40k" ? "Até R$ 40.000" : revenue === "40k_100k" ? "R$ 40k - 100k" : "Acima de R$ 100k",
          funcionarios: employeeCount,
          entregador: hasDelivery,
          origem: "LP Curta",
          data: new Date().toLocaleString("pt-BR")
        }),
      });
    } catch (error) {
      console.error("Erro ao enviar para o n8n:", error);
    }

    setIsSubmitting(false);

    if (revenue === "ate_40k") {
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
              <option value="ate_40k" className="text-black bg-white">Até R$ 40k</option>
              <option value="40k_100k" className="text-black bg-white">R$ 40k - 100k</option>
              <option value="acima_100k" className="text-black bg-white">Acima de R$ 100k</option>
            </select>
            <ChevronDown className="absolute right-3 top-[calc(50%+2px)] -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
          </div>
        </div>

        <div className="lg:col-span-1">
          <label htmlFor="employeeCount" className={labelStyle}>N° de funcionários</label>
          <div className={selectWrapperStyle}>
            <select id="employeeCount" required className={`${selectStyle} ${employeeCount === "" ? "text-white/40" : "text-white"}`} value={employeeCount} onChange={(e) => setEmployeeCount(e.target.value)}>
              <option value="" disabled>Selecione</option>
              <option value="1-5" className="text-black bg-white">1 a 5</option>
              <option value="6-15" className="text-black bg-white">6 a 15</option>
              <option value="16-30" className="text-black bg-white">16 a 30</option>
              <option value="30+" className="text-black bg-white">Mais de 30</option>
            </select>
            <ChevronDown className="absolute right-3 top-[calc(50%+2px)] -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
          </div>
        </div>

        <div className="lg:col-span-2">
          <label htmlFor="hasDelivery" className={labelStyle}>Já tem entregador próprio?</label>
          <div className={selectWrapperStyle}>
            <select id="hasDelivery" required className={`${selectStyle} ${hasDelivery === "" ? "text-white/40" : "text-white"}`} value={hasDelivery} onChange={(e) => setHasDelivery(e.target.value)}>
              <option value="" disabled>Selecione</option>
              <option value="sim" className="text-black bg-white">Sim</option>
              <option value="nao" className="text-black bg-white">Não</option>
              <option value="planejando" className="text-black bg-white">Estou planejando</option>
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