import React, { useRef } from 'react';
import { 
  Calendar, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Heart, 
  CheckCircle2,
  Camera,
  Upload
} from 'lucide-react';
import { 
  WHATSAPP_DISPLAY, 
  getWhatsAppLink, 
  INSTAGRAM_HANDLE, 
  INSTAGRAM_URL 
} from '../data/content';
import { useDraPhoto } from '../context/useDraPhoto';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenQuiz }) => {
  const { photoUrl, handleFileUpload } = useDraPhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const whatsappHref = getWhatsAppLink(
    "Olá, Dra. Ana Vládia! Vi o seu site e gostaria de agendar uma consulta de avaliação para emagrecimento/lipedema."
  );

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F3] via-[#F6ECE4] to-[#FAF6F3] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E8C5B0]/30">
      {/* Decorative ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#E8C5B0]/30 to-[#DCAE96]/20 blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Professional Subheading Badge / Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8C5B0]/30 border border-[#DCAE96]/50 text-xs font-semibold uppercase tracking-wider text-[#9C523A]">
              <Sparkles className="w-3.5 h-3.5 text-[#B86B52]" />
              <span>Farmacêutica Esteta · Saúde & Estética Integrativa</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#2C1E18] leading-[1.12]">
              Emagrecimento Feminino Consciente & Tratamento Especializado do{' '}
              <span className="italic font-serif text-[#B86B52] underline decoration-[#E8C5B0]/70 decoration-wavy decoration-1 underline-offset-8">
                Lipedema
              </span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="text-base sm:text-lg text-[#5A453C] leading-relaxed max-w-2xl font-light">
              Desinflame o seu corpo, recupere o contorno e elimine as dores nas pernas através de um 
              <strong className="font-semibold text-[#2C1E18]"> acompanhamento individualizado</strong>. 
              Ciência farmacológica, prescrição magistral precisa e tecnologias corporais combinadas para a fisiologia única da mulher.
            </p>

            {/* Trust Points checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-[#48342B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B86B52] shrink-0" />
                <span>Manejo clínico e alívio da dor no Lipedema</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B86B52] shrink-0" />
                <span>Nutracêuticos e fitoterápicos sob medida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B86B52] shrink-0" />
                <span>Protocolo sem dietas extremas ou efeito rebote</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B86B52] shrink-0" />
                <span>Atendimento humanizado e acolhedor em Fortaleza</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-[#B86B52] hover:bg-[#A05942] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 group text-center"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Chamar no WhatsApp ({WHATSAPP_DISPLAY})</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-5 py-4 rounded-xl text-sm font-semibold tracking-wide text-[#2C1E18] bg-white border border-[#DCAE96]/70 hover:border-[#B86B52] hover:bg-[#FAF4F0] transition-all flex items-center justify-center gap-2.5 shadow-sm text-center cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#B86B52]" />
                <span>Agendar Consulta Presencial</span>
              </button>
            </div>

            {/* Quick lipedema self-check banner */}
            <div className="pt-2">
              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-3 p-3.5 rounded-xl bg-white/70 border border-[#E8C5B0] hover:bg-white text-xs text-[#5A453C] hover:text-[#2C1E18] transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 text-left">
                  <div className="w-8 h-8 rounded-lg bg-[#E8C5B0]/30 flex items-center justify-center text-[#B86B52] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C1E18] text-xs">Desconfia que pode ter Lipedema?</p>
                    <p className="text-[11px] text-[#6E5345]">Faça nosso teste rápido de rastreamento de sintomas (1 minuto)</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#B86B52] group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase (Matching uploaded image palette & essence) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing decorative card with the exact signature tone */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#DCAE96] via-[#E8C5B0] to-[#FAF4F0] rounded-3xl transform rotate-1 opacity-70 blur-sm" />

              {/* Main portrait card */}
              <div className="relative bg-[#FAF4F0] rounded-3xl p-6 sm:p-7 border border-[#E8C5B0] shadow-xl overflow-hidden">
                
                {/* Elegant subtle watermark script mirroring the photo background */}
                <div className="absolute -top-8 -right-6 text-7xl font-script text-[#DCAE96]/25 select-none pointer-events-none rotate-6">
                  Ana Vládia
                </div>
                <div className="absolute top-1/2 -left-10 text-8xl font-script text-[#DCAE96]/20 select-none pointer-events-none -rotate-12">
                  Brasileiro
                </div>

                {/* Profile Portrait Presentation */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 bg-[#FAF4F0] border border-[#DCAE96]/50 shadow-md flex flex-col justify-end p-5 group">
                  
                  {/* Photo container */}
                  <div className="absolute inset-0">
                    <img 
                      src={photoUrl} 
                      alt="Dra. Ana Vládia Brasileiro"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    {/* Subtle soft gradient at the very bottom to ensure badge legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E18]/85 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Hidden File Input & Upload Trigger */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={onFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="Carregar ou atualizar a foto oficial da Dra. Ana Vládia (image.png)"
                    className="absolute top-3 right-3 z-20 px-2.5 py-1.5 rounded-xl bg-white/90 hover:bg-white text-[#2C1E18] text-[11px] font-semibold border border-[#E8C5B0] shadow-sm flex items-center gap-1.5 backdrop-blur-xs transition-all hover:scale-105 cursor-pointer opacity-90 hover:opacity-100"
                  >
                    <Camera className="w-3.5 h-3.5 text-[#B86B52]" />
                    <span>Inserir Foto</span>
                  </button>

                  {/* Floating badge inside photo */}
                  <div className="relative z-10 text-white space-y-1">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#B86B52]/90 backdrop-blur-sm text-[11px] font-semibold tracking-wider uppercase text-white shadow-sm">
                      Dra. Ana Vládia Brasileiro
                    </span>
                    <p className="text-xs text-white/95 font-light drop-shadow-xs">
                      Farmacêutica Esteta · CRF/CE · Especialista em Lipedema & Emagrecimento Feminino
                    </p>
                  </div>
                </div>

                {/* Bio pill & credibility highlights */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#6E5345] pt-1 border-t border-[#E8C5B0]/30">
                    <span className="font-medium text-[#2C1E18]">Atendimento Individualizado</span>
                    <span className="text-[#B86B52] font-semibold">Fortaleza · CE</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="p-3 bg-white/80 rounded-xl border border-[#E8C5B0]/40">
                      <p className="font-serif text-2xl font-bold text-[#B86B52]">100%</p>
                      <p className="text-[11px] text-[#5A453C]">Personalizado para seu Biotipo</p>
                    </div>
                    <div className="p-3 bg-white/80 rounded-xl border border-[#E8C5B0]/40">
                      <p className="font-serif text-2xl font-bold text-[#B86B52]">Foco</p>
                      <p className="text-[11px] text-[#5A453C]">Desinflamação & Lipedema</p>
                    </div>
                  </div>

                  {/* Instagram quick follow */}
                  <div className="flex items-center justify-between bg-white/60 p-2.5 rounded-xl border border-[#E8C5B0]/40 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E5B69F]"></span>
                      <span className="text-[#5A453C]">Instagram Oficial:</span>
                      <strong className="text-[#2C1E18]">{INSTAGRAM_HANDLE}</strong>
                    </div>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B86B52] font-semibold hover:underline"
                    >
                      Seguir →
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
