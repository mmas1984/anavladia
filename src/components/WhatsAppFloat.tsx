import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { 
  WHATSAPP_DISPLAY, 
  getWhatsAppLink 
} from '../data/content';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = "Olá, Dra. Ana Vládia! Vi o seu site e gostaria de agendar uma consulta/avaliação.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip message */}
      {showTooltip && (
        <div className="relative bg-[#2C1E18] text-[#FAF6F3] text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-[#E8C5B0]/40 max-w-xs animate-fade-in flex items-center gap-2">
          <div className="text-left">
            <p className="font-semibold text-[#E8C5B0] text-[11px]">Dúvidas ou Agendamento?</p>
            <p className="text-[10px] text-white/80">Converse no WhatsApp: {WHATSAPP_DISPLAY}</p>
          </div>
          <button 
            onClick={() => setShowTooltip(false)}
            className="p-1 hover:text-[#E8C5B0] transition-colors ml-1 cursor-pointer"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppLink(defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group relative"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-600 rounded-full border-2 border-white" />
        <MessageCircle className="w-7 h-7 fill-white/10 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
