import React, { useState } from 'react';
import { 
  Calendar, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ShieldCheck,
  Send,
  User,
  Phone,
  FileText
} from 'lucide-react';
import { 
  WHATSAPP_DISPLAY, 
  WHATSAPP_NUMBER, 
  getWhatsAppLink 
} from '../data/content';

interface BookingFormProps {
  initialProtocol?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ 
  initialProtocol = '', 
  isModal = false,
  onCloseModal 
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState(initialProtocol || 'Avaliação & Tratamento de Lipedema');
  const [preferredPeriod, setPreferredPeriod] = useState('Manhã');
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const symptomOptions = [
    "Dores ou sensibilidade nas pernas",
    "Sensação de pernas pesadas",
    "Manchas roxas frequentes sem motivo",
    "Dificuldade de perder peso",
    "Inchaço abdominal e retenção",
    "Flacidez corporal pós-parto ou emagrecimento"
  ];

  const handleToggleSymptom = (item: string) => {
    if (symptoms.includes(item)) {
      setSymptoms(symptoms.filter(s => s !== item));
    } else {
      setSymptoms([...symptoms, item]);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);
    
    // Simple mask for Brazilian phone numbers: (85) 99999-9999
    if (val.length > 6) {
      val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
    } else if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    } else if (val.length > 0) {
      val = `(${val}`;
    }
    setPhone(val);
  };

  const generateWhatsAppMessage = () => {
    let msg = `Olá, Dra. Ana Vládia! Gostaria de agendar uma consulta presencial.\n\n`;
    msg += `👤 *Nome:* ${name || 'Não informado'}\n`;
    msg += `📱 *WhatsApp:* ${phone || 'Não informado'}\n`;
    msg += `🎯 *Interesse Principal:* ${interest}\n`;
    msg += `⏰ *Período de Preferência:* ${preferredPeriod}\n`;
    if (symptoms.length > 0) {
      msg += `📋 *Sintomas/Queixas:* ${symptoms.join(', ')}\n`;
    }
    if (notes.trim()) {
      msg += `💬 *Observações:* ${notes.trim()}\n`;
    }
    msg += `\nAguardo as opções de horários disponíveis. Obrigada!`;
    return msg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Mark as submitted and open WhatsApp
    setSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <div id="agendamento" className={`${isModal ? 'p-0' : 'py-20 lg:py-28 bg-[#F6ECE4] border-t border-[#E8C5B0]/50'}`}>
      <div className={`${isModal ? 'w-full' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        {/* Header if not in modal */}
        {!isModal && (
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#DCAE96] text-xs font-semibold uppercase tracking-wider text-[#9C523A] shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-[#B86B52]" />
              <span>Agendamento Direto</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C1E18] tracking-tight">
              Agende Sua <span className="italic text-[#B86B52]">Consulta de Avaliação</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5A453C] font-light max-w-2xl mx-auto">
              Preencha o formulário abaixo para enviar sua solicitação diretamente para nossa equipe no WhatsApp ({WHATSAPP_DISPLAY}) com seus dados e horários de preferência.
            </p>
          </div>
        )}

        {/* Card Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8C5B0] shadow-md text-left">
          
          {submitted ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C1E18]">
                  Solicitação de Agendamento Enviada!
                </h3>
                <p className="text-sm text-[#5A453C] max-w-md mx-auto">
                  Sua mensagem foi gerada e direcionada para o WhatsApp da Dra. Ana Vládia ({WHATSAPP_DISPLAY}).
                </p>
              </div>

              <div className="p-5 bg-[#FAF4F0] rounded-2xl border border-[#E8C5B0]/70 max-w-md mx-auto text-left space-y-2 text-xs text-[#5A453C]">
                <p><strong>Paciente:</strong> {name}</p>
                <p><strong>Telefone:</strong> {phone}</p>
                <p><strong>Foco:</strong> {interest}</p>
                <p><strong>Turno preferido:</strong> {preferredPeriod}</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#B86B52] hover:bg-[#A05942] transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reabrir WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    if (onCloseModal) onCloseModal();
                  }}
                  className="px-5 py-3.5 rounded-xl text-sm font-medium text-[#2C1E18] bg-white border border-[#E8C5B0] hover:bg-[#FAF4F0] transition-colors cursor-pointer"
                >
                  Novo Agendamento
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#2C1E18] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#B86B52]" />
                    <span>Nome Completo *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8C5B0] focus:border-[#B86B52] focus:ring-1 focus:ring-[#B86B52] outline-none text-sm text-[#2C1E18] bg-[#FCF8F5]"
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#2C1E18] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#B86B52]" />
                    <span>WhatsApp / Telefone *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(85) 99999-9999"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8C5B0] focus:border-[#B86B52] focus:ring-1 focus:ring-[#B86B52] outline-none text-sm text-[#2C1E18] bg-[#FCF8F5]"
                  />
                </div>
              </div>

              {/* Interest */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#2C1E18] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B86B52]" />
                  <span>Principal Motivo da Consulta *</span>
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8C5B0] focus:border-[#B86B52] focus:ring-1 focus:ring-[#B86B52] outline-none text-sm text-[#2C1E18] bg-[#FCF8F5] cursor-pointer"
                >
                  <option value="Avaliação & Tratamento de Lipedema">Avaliação & Tratamento de Lipedema (Dor e inchaço nas pernas)</option>
                  <option value="Emagrecimento Metabólico Feminino">Emagrecimento Metabólico Feminino (Perda de peso consciente)</option>
                  <option value="Gordura Localizada & Contorno Corporal">Gordura Localizada & Contorno Corporal</option>
                  <option value="Remodelamento & Flacidez Tissular">Remodelamento & Flacidez Tissular (Estímulo de colágeno)</option>
                  <option value="Consulta Farmacêutica Integrativa">Consulta Farmacêutica Integrativa & Prescrição Magistral</option>
                </select>
              </div>

              {/* Symptoms check */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#2C1E18]">
                  Selecione queixas que você sente com frequência (opcional):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {symptomOptions.map((symptom, idx) => {
                    const isChecked = symptoms.includes(symptom);
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => handleToggleSymptom(symptom)}
                        className={`p-3 rounded-xl text-left text-xs transition-colors border flex items-center gap-2.5 cursor-pointer ${
                          isChecked 
                            ? 'bg-[#F6ECE4] border-[#B86B52] text-[#9C523A] font-medium' 
                            : 'bg-[#FCF8F5] border-[#E8C5B0]/60 text-[#5A453C] hover:bg-white'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-[#B86B52] border-[#B86B52] text-white' : 'border-[#DCAE96] bg-white'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span>{symptom}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Preferred Period */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#2C1E18] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B86B52]" />
                  <span>Turno de Preferência para Atendimento</span>
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {['Manhã', 'Tarde', 'Sábado'].map((period) => (
                    <button
                      type="button"
                      key={period}
                      onClick={() => setPreferredPeriod(period)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                        preferredPeriod === period
                          ? 'bg-[#B86B52] text-white border-[#B86B52]'
                          : 'bg-[#FCF8F5] text-[#5A453C] border-[#E8C5B0] hover:bg-white'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#2C1E18] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#B86B52]" />
                  <span>Observações ou Mensagem Adicional (opcional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Conte um pouco sobre sua rotina, expectativas ou dúvidas..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8C5B0] focus:border-[#B86B52] focus:ring-1 focus:ring-[#B86B52] outline-none text-sm text-[#2C1E18] bg-[#FCF8F5]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-[#B86B52] hover:bg-[#A05942] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar e Confirmar Agendamento no WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-[#6E5345]">
                  🔒 Seus dados são confidenciais e enviados diretamente para o WhatsApp oficial da clínica: <strong>{WHATSAPP_DISPLAY}</strong>.
                </p>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};
