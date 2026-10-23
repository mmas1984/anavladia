import React from 'react';
import { 
  Instagram, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Calendar, 
  Heart,
  Sparkles
} from 'lucide-react';
import { 
  WHATSAPP_DISPLAY, 
  INSTAGRAM_HANDLE, 
  INSTAGRAM_URL, 
  getWhatsAppLink 
} from '../data/content';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenQuiz }) => {
  return (
    <footer className="bg-[#241813] text-[#FAF6F3] pt-16 pb-12 border-t border-[#443027] relative overflow-hidden">
      {/* Background script watermark */}
      <div className="absolute right-0 bottom-0 text-[180px] font-script text-white/[0.02] select-none pointer-events-none leading-none">
        Ana Vládia
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#443027] text-left">
          
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-3xl font-semibold tracking-tight text-white block">
                Dra. Ana Vládia Brasileiro
              </span>
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#E8C5B0]">
                Farmacêutica Esteta · CRF/CE
              </p>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light max-w-md">
              Estética corporal e emagrecimento consciente com base na farmacologia e na fisiologia feminina. Tratamento integrativo especializado para mulheres com Lipedema.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#B86B52] text-white flex items-center justify-center transition-colors"
                title={`Instagram: ${INSTAGRAM_HANDLE}`}
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppLink("Olá, Dra. Ana Vládia! Gostaria de agendar uma consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                title={`WhatsApp: ${WHATSAPP_DISPLAY}`}
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E8C5B0]">
              Navegação
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75 font-light">
              <li>
                <a href="#inicio" className="hover:text-[#E8C5B0] transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#E8C5B0] transition-colors">Sobre a Dra. Ana Vládia</a>
              </li>
              <li>
                <a href="#lipedema" className="hover:text-[#E8C5B0] transition-colors">O que é o Lipedema</a>
              </li>
              <li>
                <a href="#acompanhamento" className="hover:text-[#E8C5B0] transition-colors">Acompanhamento Individual</a>
              </li>
              <li>
                <a href="#protocolos" className="hover:text-[#E8C5B0] transition-colors">Protocolos & Tratamentos</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#E8C5B0] transition-colors">Depoimentos de Pacientes</a>
              </li>
              <li>
                <button 
                  onClick={onOpenQuiz} 
                  className="hover:text-[#E8C5B0] transition-colors text-left cursor-pointer flex items-center gap-1 text-[#E5B69F]"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Autoavaliação de Lipedema</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Scheduling */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E8C5B0]">
              Contato & Agendamento
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#E5B69F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">WhatsApp Oficial:</p>
                  <a 
                    href={getWhatsAppLink("Olá, Dra. Ana Vládia! Gostaria de agendar uma consulta.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8C5B0] hover:underline"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-[#E5B69F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Instagram:</p>
                  <a 
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8C5B0] hover:underline"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E5B69F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Atendimento Presencial:</p>
                  <p className="text-white/70">Fortaleza · Ceará (com agendamento prévio)</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-[#2C1E18] bg-[#E8C5B0] hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Formulário de Agendamento</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & ethical statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} Dra. Ana Vládia Brasileiro · Farmacêutica Esteta · Todos os direitos reservados.
          </p>
          <p className="text-center sm:text-right text-[11px] text-white/40">
            Atuação profissional respaldada pelas resoluções do Conselho Federal de Farmácia (CFF).
          </p>
        </div>

      </div>
    </footer>
  );
};
