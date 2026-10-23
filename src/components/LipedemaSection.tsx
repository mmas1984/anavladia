import React, { useState } from 'react';
import { 
  AlertCircle, 
  HelpCircle, 
  Check, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Activity, 
  ShieldAlert, 
  HeartHandshake,
  Layers,
  ChevronRight
} from 'lucide-react';
import { 
  LIPEDEMA_COMPARISON, 
  WHATSAPP_DISPLAY, 
  getWhatsAppLink 
} from '../data/content';

interface LipedemaSectionProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const LipedemaSection: React.FC<LipedemaSectionProps> = ({ onOpenBooking, onOpenQuiz }) => {
  const [activeTab, setActiveTab] = useState<'oquee' | 'sintomas' | 'comparativo' | 'tratamento'>('oquee');

  const symptomsList = [
    {
      title: "Dor & Hipersensibilidade",
      desc: "Dor ao toque leve, aperto nas pernas, incômodo com roupas justas e queimação que piora ao calor ou final da tarde.",
      badge: "Sintoma Cardinal"
    },
    {
      title: "Desproporção Tronco-Pernas",
      desc: "Tronco, colo e cintura finos enquanto quadris, coxas e pernas acumulam volume resistente que não diminui proporcionalmente.",
      badge: "Distribuição Típica"
    },
    {
      title: "Hematomas Frequentes (Roxos)",
      desc: "Manchas roxas que surgem sem motivo aparente ou com impactos mínimos, decorrentes da fragilidade da microcirculação capilar.",
      badge: "Fragilidade Vascular"
    },
    {
      title: "Sensação de Pernas de Chumbo",
      desc: "Sensação diária de peso excessivo, cansaço profundo e pernas latejantes ao longo do dia de trabalho.",
      badge: "Sobrecarga Circulatória"
    },
    {
      title: "Nódulos Subcutâneos Palpáveis",
      desc: "Ao apalpar a pele profunda das coxas e panturrilhas, sentem-se grânulos semelhantes a feijõezinhos ou arroz sob o tecido.",
      badge: "Fibrose Tecidual"
    },
    {
      title: "Pés Preservados (Sinal do Colar)",
      desc: "O acúmulo de gordura e inchaço para abruptamente na linha dos tornozelos, formando uma dobra característica sem inchar os pés.",
      badge: "Diferencial Clínico"
    }
  ];

  return (
    <section id="lipedema" className="py-20 lg:py-28 bg-[#F6ECE4] relative overflow-hidden border-y border-[#E8C5B0]/50">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#E8C5B0]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FAF6F3]/50 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#DCAE96] text-xs font-semibold uppercase tracking-wider text-[#9C523A] shadow-xs">
            <Activity className="w-3.5 h-3.5 text-[#B86B52]" />
            <span>Condição Clínica & Inflamatória</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C1E18] tracking-tight">
            Entendendo o <span className="italic text-[#B86B52]">Lipedema</span>: Não é falta de disciplina, é uma condição inflamatória.
          </h2>

          <p className="text-base sm:text-lg text-[#5A453C] font-light leading-relaxed">
            Muitas mulheres passam a vida inteira acreditando que têm "apenas pernas grossas" ou "gordura teimosa". 
            O Lipedema é uma doença reconhecida pela OMS (CID-11 EF02) que exige olhar especializado e conduta terapêutica específica.
          </p>
        </div>

        {/* Interactive Segmented Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl mx-auto bg-white/70 p-1.5 rounded-2xl border border-[#E8C5B0]/60 shadow-xs">
          <button
            onClick={() => setActiveTab('oquee')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'oquee' 
                ? 'bg-[#B86B52] text-white shadow-sm' 
                : 'text-[#5A453C] hover:text-[#2C1E18] hover:bg-white/60'
            }`}
          >
            O que é o Lipedema?
          </button>
          <button
            onClick={() => setActiveTab('sintomas')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'sintomas' 
                ? 'bg-[#B86B52] text-white shadow-sm' 
                : 'text-[#5A453C] hover:text-[#2C1E18] hover:bg-white/60'
            }`}
          >
            Sinais & Sintomas
          </button>
          <button
            onClick={() => setActiveTab('comparativo')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'comparativo' 
                ? 'bg-[#B86B52] text-white shadow-sm' 
                : 'text-[#5A453C] hover:text-[#2C1E18] hover:bg-white/60'
            }`}
          >
            Lipedema vs Obesidade
          </button>
          <button
            onClick={() => setActiveTab('tratamento')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'tratamento' 
                ? 'bg-[#B86B52] text-white shadow-sm' 
                : 'text-[#5A453C] hover:text-[#2C1E18] hover:bg-white/60'
            }`}
          >
            Como Nós Tratamos
          </button>
        </div>

        {/* Tab 1: O Que é o Lipedema */}
        {activeTab === 'oquee' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-[#E8C5B0] shadow-sm">
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B52]">
                Definição Clínica e Desmistificação
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2C1E18]">
                Uma disfunção do tecido adiposo com forte componente hormonal e vascular
              </h3>
              <p className="text-sm sm:text-base text-[#5A453C] leading-relaxed font-light">
                O Lipedema é uma afecção crônica, progressiva e inflamatória que acomete predominantemente mulheres. Caracteriza-se pela proliferação anormal e retenção fibrótica de células de gordura, principalmente nos membros inferiores (quadris, coxas, pernas) e, em alguns casos, nos braços.
              </p>
              <p className="text-sm sm:text-base text-[#5A453C] leading-relaxed font-light">
                Diferente da gordura comum de reserva energética, o tecido lipedêmico apresenta <strong>permeabilidade capilar alterada, hipóxia tecidual, dor neuropática e inflamação crônica</strong>. Por esse motivo, dietas com restrição calórica severa falham: a mulher perde volume no rosto, colo e abdômen, mas as pernas permanecem inchadas, pesadas e doloridas.
              </p>

              <div className="p-4 rounded-2xl bg-[#FAF4F0] border border-[#E8C5B0]/60 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#9C523A]">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Você não está louca e não é culpada</span>
                </div>
                <p className="text-xs text-[#5A453C] leading-relaxed">
                  Estudos indicam que o Lipedema se manifesta ou se agrava em momentos de oscilações hormonais marcantes (menarca, uso de anticoncepcionais, pós-gestação ou climatério). O primeiro passo para o alívio é o diagnóstico correto.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenQuiz}
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#B86B52] hover:bg-[#A05942] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Fazer Teste de Rastreamento de Sinais</span>
                </button>
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#2C1E18] bg-[#FAF4F0] border border-[#E8C5B0] hover:bg-[#F3E5DE] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Agendar Avaliação Clínica</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-[#FCF8F5] border border-[#E8C5B0]/70 space-y-4">
                <p className="font-serif text-lg font-semibold text-[#2C1E18]">
                  Fatos Cruciais sobre o Lipedema:
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-[#5A453C]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#E8C5B0]/40 text-[#B86B52] flex items-center justify-center font-bold text-xs shrink-0">1</span>
                    <span><strong>Quase 1 em cada 10 mulheres</strong> possui algum grau de Lipedema, a maioria sem diagnóstico.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#E8C5B0]/40 text-[#B86B52] flex items-center justify-center font-bold text-xs shrink-0">2</span>
                    <span><strong>Não é obesidade:</strong> a gordura do lipedema é inflamatória e dolorosa ao toque.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#E8C5B0]/40 text-[#B86B52] flex items-center justify-center font-bold text-xs shrink-0">3</span>
                    <span><strong>Tem tratamento conservador eficaz:</strong> o manejo integrativo reduz medidas, alivia dores e devolve a leveza.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#2C1E18] text-[#FAF6F3] space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#E8C5B0]">
                  Abordagem Farmacêutica
                </p>
                <p className="text-xs text-white/80 leading-relaxed font-light">
                  A regulação das vias inflamatórias (NF-κB, citocinas), a proteção da integridade dos vasos com flavonoides e a drenagem metabólica reduzem a dor e o edema em poucas semanas.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Sinais & Sintomas */}
        {activeTab === 'sintomas' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {symptomsList.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 border border-[#E8C5B0]/70 hover:border-[#B86B52] transition-all shadow-xs hover:shadow-md text-left space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#F6ECE4] text-[11px] font-semibold text-[#B86B52]">
                      {item.badge}
                    </div>
                    <h4 className="font-serif text-xl font-medium text-[#2C1E18]">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5A453C] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-2 text-[11px] text-[#9C523A] font-medium flex items-center gap-1">
                    <span>Avaliado na consulta clínica</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/80 rounded-2xl p-6 border border-[#E8C5B0] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left space-y-1">
                <p className="font-serif text-lg font-semibold text-[#2C1E18]">
                  Identificou 2 ou mais desses sintomas no seu dia a dia?
                </p>
                <p className="text-xs sm:text-sm text-[#5A453C]">
                  Não adie seu bem-estar. Faça nosso teste de triagem ou marque uma avaliação individual.
                </p>
              </div>
              <button
                onClick={onOpenQuiz}
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#B86B52] hover:bg-[#A05942] transition-colors shrink-0 shadow-sm cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Iniciar Teste de Lipedema</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Comparativo Lipedema vs Obesidade vs Linfedema */}
        {activeTab === 'comparativo' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8C5B0] shadow-sm overflow-hidden space-y-6">
            <div className="text-left space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B52]">
                Diagnóstico Diferencial
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2C1E18]">
                Entenda as diferenças entre Lipedema, Obesidade e Linfedema
              </h3>
              <p className="text-xs sm:text-sm text-[#5A453C]">
                Muitas mulheres com lipedema são tratadas erroneamente como pessoas com obesidade clássica. Veja como diferenciar:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-[#E8C5B0] bg-[#FAF4F0]">
                    <th className="py-3.5 px-4 font-semibold text-[#2C1E18] w-1/4">Característica</th>
                    <th className="py-3.5 px-4 font-bold text-[#B86B52] bg-[#F6ECE4]/60 w-1/4">
                      Lipedema (Foco da Dra. Ana)
                    </th>
                    <th className="py-3.5 px-4 font-medium text-[#5A453C] w-1/4">Obesidade Comum</th>
                    <th className="py-3.5 px-4 font-medium text-[#5A453C] w-1/4">Linfedema</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8C5B0]/40">
                  {LIPEDEMA_COMPARISON.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FCF8F5]/60 transition-colors">
                      <td className="py-3.5 px-4 font-medium text-[#2C1E18] align-top">{row.feature}</td>
                      <td className="py-3.5 px-4 font-semibold text-[#9C523A] bg-[#F6ECE4]/30 align-top leading-relaxed">
                        {row.lipedema}
                      </td>
                      <td className="py-3.5 px-4 text-[#5A453C] align-top leading-relaxed">{row.obesidade}</td>
                      <td className="py-3.5 px-4 text-[#5A453C] align-top leading-relaxed">{row.linfedema}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E8C5B0]/40">
              <p className="text-xs text-[#6E5345] text-left">
                *O diagnóstico clínico definitivo deve ser realizado em consulta individualizada com avaliação física minuciosa.
              </p>
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#B86B52] hover:bg-[#A05942] transition-colors cursor-pointer shrink-0"
              >
                Agendar Consulta Avaliativa
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Como Tratamos o Lipedema */}
        {activeTab === 'tratamento' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8C5B0] shadow-sm space-y-8">
            <div className="max-w-2xl text-left space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B86B52]">
                Metodologia Exclusiva da Dra. Ana Vládia
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2C1E18]">
                Protocolo Integrativo e Não Invasivo para Lipedema
              </h3>
              <p className="text-sm text-[#5A453C] font-light">
                O tratamento não envolve cirurgias agressivas no primeiro momento. Nosso foco é desinflamar o tecido, devolver a funcionalidade vascular, aliviar as dores e remodelar o contorno.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="p-5 rounded-2xl bg-[#FCF8F5] border border-[#E8C5B0]/70 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#B86B52] text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h4 className="font-serif text-lg font-semibold text-[#2C1E18]">Desinflamação Sistêmica</h4>
                <p className="text-xs text-[#5A453C] leading-relaxed">
                  Modulação alimentar anti-inflamatória e restauração da barreira intestinal para conter a cascata inflamatória que alimenta a dor e a fibrose.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FCF8F5] border border-[#E8C5B0]/70 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#B86B52] text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h4 className="font-serif text-lg font-semibold text-[#2C1E18]">Nutracêuticos Magistrais</h4>
                <p className="text-xs text-[#5A453C] leading-relaxed">
                  Prescrição personalizada de flavonoides flebotônicos, picnogenol, rutina, curcumina biodisponível e antioxidantes para selar vasos e cessar hematomas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FCF8F5] border border-[#E8C5B0]/70 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#B86B52] text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h4 className="font-serif text-lg font-semibold text-[#2C1E18]">Drenagem & Tecnologias</h4>
                <p className="text-xs text-[#5A453C] leading-relaxed">
                  Estímulo linfático profundo e tecnologias seguras calibradas para o lipedema, quebrando fibroses sem provocar hematomas ou danos endoteliais.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FCF8F5] border border-[#E8C5B0]/70 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#B86B52] text-white flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <h4 className="font-serif text-lg font-semibold text-[#2C1E18]">Sustentação do Alívio</h4>
                <p className="text-xs text-[#5A453C] leading-relaxed">
                  Acompanhamento regular, medições precisas por bioimpedância, ajuste contínuo de conduta e suporte para manter suas pernas leves e funcionais.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FAF4F0] to-[#F3E5DE] border border-[#E8C5B0] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left space-y-1">
                <p className="font-serif text-lg font-semibold text-[#2C1E18]">
                  Pronta para dar um fim à sensação de pernas pesadas e doloridas?
                </p>
                <p className="text-xs text-[#5A453C]">
                  Converse diretamente com a equipe da Dra. Ana Vládia e tire todas as suas dúvidas.
                </p>
              </div>
              <a
                href={getWhatsAppLink("Olá, Dra. Ana Vládia! Gostaria de saber mais sobre o tratamento especializado para Lipedema.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#B86B52] hover:bg-[#A05942] transition-colors flex items-center gap-2 shrink-0 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp ({WHATSAPP_DISPLAY})</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
