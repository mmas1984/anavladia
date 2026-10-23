import React from 'react';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  MessageCircle, 
  Calendar 
} from 'lucide-react';
import { 
  PROTOCOLS, 
  getWhatsAppLink 
} from '../data/content';

interface ProtocolsProps {
  onOpenBooking: () => void;
  onSelectProtocol: (protocolTitle: string) => void;
}

export const Protocols: React.FC<ProtocolsProps> = ({ 
  onOpenBooking, 
  onSelectProtocol 
}) => {
  return (
    <section id="protocolos" className="py-20 lg:py-28 bg-[#F6ECE4] relative overflow-hidden border-t border-[#E8C5B0]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#DCAE96] text-xs font-semibold uppercase tracking-wider text-[#9C523A] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B86B52]" />
            <span>Abordagem Clínica Avançada</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C1E18] tracking-tight">
            Protocolos Exclusivos Desenvolvidos para a <span className="italic text-[#B86B52]">Mulher</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A453C] font-light leading-relaxed">
            Cada corpo responde de maneira diferente aos estímulos. Conheça nossos protocolos integrativos desenhados para agir na causa raiz do inchaço, da gordura resistente e da flacidez:
          </p>
        </div>

        {/* Protocols Grid (2x2 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {PROTOCOLS.map((protocol) => (
            <div
              key={protocol.id}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E8C5B0] hover:border-[#B86B52] transition-all shadow-sm hover:shadow-lg flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#FAF4F0] text-[11px] font-semibold text-[#B86B52] border border-[#E8C5B0]/60">
                    {protocol.badge}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2C1E18] group-hover:text-[#B86B52] transition-colors">
                    {protocol.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#6E5345]">
                    {protocol.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#5A453C] font-light leading-relaxed pt-1">
                    {protocol.description}
                  </p>
                </div>

                {/* Indications & Differentials */}
                <div className="space-y-4 pt-2 border-t border-[#E8C5B0]/40">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-[#2C1E18] uppercase tracking-wider">
                      Para quem é indicado:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#5A453C]">
                      {protocol.indications.map((ind, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#B86B52] shrink-0 mt-0.5" />
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-semibold text-[#2C1E18] uppercase tracking-wider">
                      O que inclui o plano terapêutico:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#5A453C]">
                      {protocol.differentials.map((diff, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#B86B52] shrink-0 mt-1.5" />
                          <span>{diff}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-8 mt-6 border-t border-[#E8C5B0]/40 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => {
                    onSelectProtocol(protocol.title);
                    onOpenBooking();
                  }}
                  className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#B86B52] hover:bg-[#A05942] transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Este Protocolo</span>
                </button>

                <a
                  href={getWhatsAppLink(`Olá, Dra. Ana Vládia! Gostaria de tirar dúvidas sobre o "${protocol.title}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl text-xs sm:text-sm font-medium text-[#2C1E18] bg-[#FAF4F0] hover:bg-[#F3E5DE] border border-[#E8C5B0] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#B86B52]" />
                  <span>Dúvidas</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
