import React from 'react';
import { 
  FlaskConical, 
  Pill, 
  Sparkles, 
  Layers, 
  HeartHandshake, 
  ShieldCheck, 
  Calendar,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { INDIVIDUALIZED_BENEFITS } from '../data/content';

interface IndividualizedCareProps {
  onOpenBooking: () => void;
}

export const IndividualizedCare: React.FC<IndividualizedCareProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5 text-[#B86B52]" />;
      case 'Pill':
        return <Pill className="w-5 h-5 text-[#B86B52]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#B86B52]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#B86B52]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#B86B52]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-5 h-5 text-[#B86B52]" />;
    }
  };

  return (
    <section id="acompanhamento" className="py-20 lg:py-28 bg-[#FAF6F3] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#E8C5B0]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8C5B0]/30 border border-[#DCAE96]/50 text-xs font-semibold uppercase tracking-wider text-[#9C523A]">
            <HeartHandshake className="w-3.5 h-3.5 text-[#B86B52]" />
            <span>Cuidado Sob Medida para Você</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C1E18] tracking-tight">
            Os Benefícios do Acompanhamento <span className="italic text-[#B86B52]">Profissional Individualizado</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A453C] font-light leading-relaxed">
            Seu corpo não é igual ao de ninguém. Protocolos genéricos de internet falham porque ignoram a sua bioquímica, seus hormônios e a saúde do seu tecido adiposo. Veja o que muda com uma especialista ao seu lado:
          </p>
        </div>

        {/* Benefits Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDIVIDUALIZED_BENEFITS.map((item, index) => (
            <div
              key={index}
              className="bg-[#FCF8F5] rounded-3xl p-7 border border-[#E8C5B0]/60 hover:border-[#B86B52] transition-all shadow-xs hover:shadow-md text-left flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8C5B0]/70 flex items-center justify-center shadow-2xs group-hover:bg-[#FAF4F0] transition-colors">
                  {getIcon(item.icon)}
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B86B52]">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#2C1E18]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5A453C] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#E8C5B0]/30 flex items-center text-xs font-medium text-[#9C523A]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B86B52] mr-1.5 shrink-0" />
                <span>Aplicado em todas as etapas</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Highlighting the Pharmacist Edge */}
        <div className="mt-14 bg-gradient-to-r from-[#2C1E18] to-[#4A3227] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-left">
          {/* Subtle watermark */}
          <div className="absolute -right-10 -bottom-10 text-9xl font-serif text-white/5 pointer-events-none select-none">
            Ana Vládia
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#E5B69F]/20 text-[#E8C5B0] text-xs font-semibold uppercase tracking-wider">
                O Diferencial Farmacêutico
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-snug">
                Por que uma Farmacêutica Esteta entrega resultados mais profundos e sustentáveis?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-2xl">
                O farmacêutico esteta é o profissional legalmente habilitado e academicamente preparado para entender a 
                <strong> farmacologia dos ativos, a dosagem exata de fitoterápicos e as interações moleculares</strong>. 
                Isso significa que sua prescrição de nutracêuticos não é uma suposição: é ciência aplicada para potencializar cada sessão estética corporal e restaurar o seu equilíbrio biológico.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-[#2C1E18] bg-[#FAF6F3] hover:bg-white transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#B86B52]" />
                <span>Agendar Avaliação Individual</span>
              </button>
              <p className="text-[11px] text-[#E8C5B0] mt-2.5">
                Vagas limitadas por mês para acompanhamento próximo
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
