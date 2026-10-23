import React from 'react';
import { 
  Instagram, 
  ExternalLink, 
  Heart, 
  MessageCircle, 
  Sparkles,
  Play
} from 'lucide-react';
import { 
  INSTAGRAM_HANDLE, 
  INSTAGRAM_URL 
} from '../data/content';

export const InstagramSection: React.FC = () => {
  const posts = [
    {
      title: "Lipedema não é falta de vergonha na cara",
      tag: "Lipedema & Saúde",
      description: "Por que dietas restritivas não diminuem a dor nas pernas e o que você precisa saber sobre o estadiamento da doença.",
      likes: "1.4k",
      type: "Vídeo / Reels",
      bgGradient: "from-[#F3E5DE] to-[#E8C5B0]"
    },
    {
      title: "Por que o seu metabolismo trava após os 30?",
      tag: "Emagrecimento Feminino",
      description: "A relação íntima entre cortisol, ciclo menstrual, saúde tireoidiana e a resistência à perda de gordura.",
      likes: "980",
      type: "Carrossel Informativo",
      bgGradient: "from-[#FAF4F0] to-[#F3E5DE]"
    },
    {
      title: "Nutracêuticos para retenção e inchaço",
      tag: "Farmácia Magistral",
      description: "Ativos bioidênticos e fitoterápicos flebotônicos prescritos sob medida para dar leveza imediata às pernas.",
      likes: "1.2k",
      type: "Vídeo Clínico",
      bgGradient: "from-[#E8C5B0] to-[#FAF4F0]"
    },
    {
      title: "Antes e Depois: Paciente com Lipedema Grau 2",
      tag: "Resultados Reais",
      description: "12 semanas de protocolo integrativo: desinflamação, alívio completo de dores e -8cm de circunferência coxa.",
      likes: "2.1k",
      type: "Estudo de Caso",
      bgGradient: "from-[#FAF4F0] to-[#E8C5B0]"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF6F3] relative overflow-hidden border-t border-[#E8C5B0]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C5B0]/30 border border-[#DCAE96]/50 text-xs font-semibold uppercase tracking-wider text-[#9C523A]">
              <Instagram className="w-3.5 h-3.5 text-[#B86B52]" />
              <span>Acompanhe no Instagram</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#2C1E18]">
              Conteúdo Diário com a <span className="italic text-[#B86B52]">Dra. Ana Vládia</span>
            </h2>

            <p className="text-sm text-[#5A453C] font-light max-w-xl">
              Vídeos explicativos, esclarecimento de mitos sobre o lipedema, rotina clínica e orientações valiosas sobre estética integrativa.
            </p>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-white border border-[#E8C5B0] hover:border-[#B86B52] text-[#2C1E18] hover:text-[#B86B52] transition-all text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-2xs group shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#B86B52]" />
            <span>Seguir {INSTAGRAM_HANDLE}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#6E5345] group-hover:text-[#B86B52] transition-colors" />
          </a>
        </div>

        {/* Post cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl p-6 border border-[#E8C5B0]/70 hover:border-[#B86B52] transition-all shadow-xs hover:shadow-md flex flex-col justify-between group h-full"
            >
              <div className="space-y-4">
                {/* Visual preview box with warm palette */}
                <div className={`aspect-square rounded-2xl bg-gradient-to-br ${post.bgGradient} p-5 flex flex-col justify-between border border-[#E8C5B0]/50 relative overflow-hidden group-hover:scale-[1.02] transition-transform`}>
                  <div className="flex items-center justify-between text-xs text-[#9C523A] font-semibold">
                    <span className="bg-white/80 px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase">
                      {post.type}
                    </span>
                    <Instagram className="w-4 h-4 text-[#B86B52]" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-[#9C523A] uppercase tracking-wider block">
                      {post.tag}
                    </span>
                    <p className="font-serif text-lg font-bold text-[#2C1E18] leading-snug">
                      {post.title}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#6E5345]">
                    <span className="flex items-center gap-1 font-medium">
                      <Heart className="w-3 h-3 text-[#B86B52] fill-current" />
                      {post.likes}
                    </span>
                    <span className="font-medium text-[#2C1E18] group-hover:underline">
                      Assistir →
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#5A453C] leading-relaxed font-light">
                  {post.description}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-[#E8C5B0]/30 flex items-center justify-between text-xs text-[#9C523A] font-medium">
                <span>{INSTAGRAM_HANDLE}</span>
                <span className="group-hover:translate-x-0.5 transition-transform text-[#B86B52]">
                  Abrir no Instagram →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
