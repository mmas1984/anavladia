import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  MessageCircle,
  Calendar
} from 'lucide-react';
import { 
  TESTIMONIALS, 
  WHATSAPP_DISPLAY, 
  getWhatsAppLink 
} from '../data/content';

interface TestimonialsProps {
  onOpenBooking: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'lipedema' | 'emagrecimento' | 'corporal'>('all');

  const filtered = activeCategory === 'all' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#FAF6F3] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E8C5B0]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8C5B0]/30 border border-[#DCAE96]/50 text-xs font-semibold uppercase tracking-wider text-[#9C523A]">
            <Sparkles className="w-3.5 h-3.5 text-[#B86B52]" />
            <span>Resultados e Histórias Reais</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C1E18] tracking-tight">
            Pacientes que Recuperaram a <span className="italic text-[#B86B52]">Leveza & Confiança</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A453C] font-light leading-relaxed">
            Nada fala mais alto do que a transformação de mulheres reais que venceram o cansaço, a dor do lipedema e a frustração com o próprio corpo:
          </p>

          {/* Aggregate rating badge */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#5A453C]">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-[#2C1E18]">5.0 de avaliação</span>
            <span className="text-[#6E5345]">· +300 mulheres acompanhadas com sucesso</span>
          </div>
        </div>

        {/* Category Filters (Clean segmented button controls) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#B86B52] text-white shadow-xs'
                : 'bg-white text-[#5A453C] border border-[#E8C5B0] hover:border-[#B86B52]'
            }`}
          >
            Todos os Casos
          </button>
          <button
            onClick={() => setActiveCategory('lipedema')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === 'lipedema'
                ? 'bg-[#B86B52] text-white shadow-xs'
                : 'bg-white text-[#5A453C] border border-[#E8C5B0] hover:border-[#B86B52]'
            }`}
          >
            Alívio & Lipedema
          </button>
          <button
            onClick={() => setActiveCategory('emagrecimento')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === 'emagrecimento'
                ? 'bg-[#B86B52] text-white shadow-xs'
                : 'bg-white text-[#5A453C] border border-[#E8C5B0] hover:border-[#B86B52]'
            }`}
          >
            Emagrecimento Saudável
          </button>
          <button
            onClick={() => setActiveCategory('corporal')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === 'corporal'
                ? 'bg-[#B86B52] text-white shadow-xs'
                : 'bg-white text-[#5A453C] border border-[#E8C5B0] hover:border-[#B86B52]'
            }`}
          >
            Remodelamento & Flacidez
          </button>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-[#FCF8F5] rounded-3xl p-7 border border-[#E8C5B0]/70 hover:border-[#B86B52] transition-all shadow-xs hover:shadow-md flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Top card metadata */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#B86B52] bg-[#FAF4F0] px-2.5 py-0.5 rounded-full border border-[#E8C5B0]/50">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Highlight banner */}
                <div className="p-3 rounded-xl bg-white/90 border border-[#E8C5B0]/50 text-xs font-semibold text-[#9C523A] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#B86B52] shrink-0" />
                  <span>{item.highlight}</span>
                </div>

                {/* Summary & Quote */}
                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-semibold text-[#2C1E18] leading-snug">
                    "{item.summary}"
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A453C] leading-relaxed font-light">
                    {item.story}
                  </p>
                </div>
              </div>

              {/* Patient info */}
              <div className="pt-4 border-t border-[#E8C5B0]/40 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-[#2C1E18]">{item.name}</p>
                  <p className="text-[11px] text-[#6E5345]">{item.age} anos · {item.city}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#9C523A] font-semibold">
                    {item.weeks}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner below testimonials */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#FAF4F0] via-[#F3E5DE] to-[#FAF4F0] border border-[#E8C5B0] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="font-serif text-2xl font-semibold text-[#2C1E18]">
              Quer ser a próxima mulher a viver essa transformação?
            </h3>
            <p className="text-xs sm:text-sm text-[#5A453C]">
              O primeiro passo é uma consulta acolhedora de diagnóstico e alinhamento de expectativas.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#B86B52] hover:bg-[#A05942] transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Minha Consulta</span>
            </button>
            <a
              href={getWhatsAppLink("Olá, Dra. Ana Vládia! Vi os depoimentos das suas pacientes e gostaria de agendar uma consulta para mim também.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-white border border-[#E8C5B0] text-[#1E7E34] hover:bg-[#FAF4F0] transition-colors"
              title="Falar no WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
