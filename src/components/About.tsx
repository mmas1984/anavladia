import React from 'react';
import { 
  Instagram, 
  Award, 
  Heart, 
  FlaskConical, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { 
  INSTAGRAM_HANDLE, 
  INSTAGRAM_URL, 
  WHATSAPP_DISPLAY, 
  getWhatsAppLink 
} from '../data/content';
import { useDraPhoto } from '../context/useDraPhoto';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const { photoUrl } = useDraPhoto();

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#FAF6F3] relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#E8C5B0]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual presentation & credential card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              {/* Background frame with nude terracotta tone */}
              <div className="absolute -inset-3 bg-[#E8C5B0]/40 rounded-3xl transform -rotate-2" />
              
              {/* Main content box */}
              <div className="relative bg-[#FCF8F5] p-7 sm:p-8 rounded-3xl border border-[#E8C5B0] shadow-lg space-y-6">
                
                {/* Image highlight with soft aura */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-[#DCAE96] to-[#FAF4F0] p-1 border border-[#DCAE96]/60 shadow-md">
                  <img
                    src={photoUrl}
                    alt="Dra. Ana Vládia Brasileiro"
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E18]/60 via-transparent to-transparent rounded-xl" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-serif text-lg font-medium">Dra. Ana Vládia Brasileiro</p>
                    <p className="text-xs text-white/80">Farmacêutica Esteta · Especialista em Estética Corporal & Lipedema</p>
                  </div>
                </div>

                {/* Core credentials checklist */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#E8C5B0]/40">
                    <div className="w-8 h-8 rounded-lg bg-[#E8C5B0]/30 flex items-center justify-center text-[#B86B52] shrink-0">
                      <FlaskConical className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#2C1E18]">Formação Farmacêutica Especializada</p>
                      <p className="text-[11px] text-[#5A453C]">Domínio de farmacologia, vias de absorção, bioquímica e prescrição magistral.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#E8C5B0]/40">
                    <div className="w-8 h-8 rounded-lg bg-[#E8C5B0]/30 flex items-center justify-center text-[#B86B52] shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#2C1E18]">Foco Exclusivo no Público Feminino</p>
                      <p className="text-[11px] text-[#5A453C]">Cuidado direcionado aos ciclos hormonais, retenção, pós-parto e climatério.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#E8C5B0]/40">
                    <div className="w-8 h-8 rounded-lg bg-[#E8C5B0]/30 flex items-center justify-center text-[#B86B52] shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#2C1E18]">Pioneirismo no Manejo de Lipedema</p>
                      <p className="text-[11px] text-[#5A453C]">Tratamentos combinados para desinflamar e aliviar dores sem promessas vazias.</p>
                    </div>
                  </div>
                </div>

                {/* Direct Instagram Link Bar */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-[#FAF4F0] to-[#F3E5DE] border border-[#E8C5B0] hover:border-[#B86B52] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#B86B52] text-white flex items-center justify-center shadow-sm">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-[#2C1E18]">{INSTAGRAM_HANDLE}</p>
                      <p className="text-[11px] text-[#5A453C]">Conteúdos semanais sobre lipedema e corpo</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-[#B86B52] group-hover:translate-x-0.5 transition-transform">
                    Ver perfil →
                  </span>
                </a>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Mission */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C5B0]/30 border border-[#DCAE96]/50 text-xs font-semibold uppercase tracking-wider text-[#9C523A]">
              <span>Trajetória & Filosofia Clínica</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C1E18] leading-[1.2]">
              "O corpo da mulher não precisa de agressão. Ele precisa ser <span className="italic text-[#B86B52]">compreendido, desinflamado e nutrido</span>."
            </h2>

            <div className="space-y-4 text-base text-[#5A453C] leading-relaxed font-light">
              <p>
                Sou a <strong className="font-semibold text-[#2C1E18]">Dra. Ana Vládia Brasileiro</strong>, farmacêutica esteta com atuação dedicada à saúde metabólica, estética corporal avançada e manejo clínico do Lipedema para mulheres em Fortaleza.
              </p>
              <p>
                Ao longo dos anos no consultório, percebi quantas mulheres chegam frustradas após passarem por dietas restritivas que deixam o rosto abatido e os braços fracos, mas não resolvem o acúmulo nodular nas pernas, o inchaço constante ou a dor ao toque. Muitas carregavam um diagnóstico equivocado de "falta de força de vontade", quando na verdade conviviam com um quadro inflamatório crônico ou com o <strong>Lipedema</strong>.
              </p>
              <p>
                Minha formação como <strong>farmacêutica</strong> me permite atuar onde a estética convencional não chega: na investigação da bioquímica celular, na permeabilidade vascular, no equilíbrio hormonal e na prescrição precisa de <strong>nutracêuticos, fitoterápicos e antioxidantes manipulados sob medida</strong> para cada paciente.
              </p>
              <p>
                Aqui, cada plano terapêutico é desenhado a quatro mãos. Sem fórmulas prontas de gaveta, sem tratamentos padronizados. Você recebe um cuidado acolhedor, fundamentado na ciência e feito exclusivamente para você.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8C5B0]/40">
              <div className="space-y-1">
                <span className="font-serif text-2xl font-bold text-[#B86B52]">01</span>
                <p className="text-xs font-semibold text-[#2C1E18]">Bioquímica Feminina</p>
                <p className="text-[11px] text-[#6E5345]">Respeito à fisiologia celular e aos eixos metabólicos de cada mulher.</p>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-2xl font-bold text-[#B86B52]">02</span>
                <p className="text-xs font-semibold text-[#2C1E18]">Prescrição Magistral</p>
                <p className="text-[11px] text-[#6E5345]">Manipulação farmacêutica personalizada com ativos de alta biodisponibilidade.</p>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-2xl font-bold text-[#B86B52]">03</span>
                <p className="text-xs font-semibold text-[#2C1E18]">Acolhimento Real</p>
                <p className="text-[11px] text-[#6E5345]">Escuta empática, sem julgamentos e com suporte contínuo durante o tratamento.</p>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#B86B52] hover:bg-[#A05942] transition-colors shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Agendar Consulta com Dra. Ana Vládia</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppLink("Olá, Dra. Ana Vládia! Gostaria de conversar com você para entender melhor seu atendimento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl text-sm font-medium text-[#2C1E18] bg-[#E8C5B0]/30 hover:bg-[#E8C5B0]/50 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#B86B52]" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
