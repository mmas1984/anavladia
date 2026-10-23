import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  AlertTriangle, 
  MessageCircle, 
  Calendar,
  RotateCcw
} from 'lucide-react';
import { 
  QUIZ_QUESTIONS, 
  WHATSAPP_DISPLAY, 
  getWhatsAppLink 
} from '../data/content';

interface LipedemaQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const LipedemaQuizModal: React.FC<LipedemaQuizModalProps> = ({ 
  isOpen, 
  onClose, 
  onOpenBooking 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const handleSelectOption = (points: number) => {
    const nextAnswers = [...answers];
    nextAnswers[currentStep] = points;
    setAnswers(nextAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  const totalScore = answers.reduce((acc, curr) => acc + (curr || 0), 0);

  let resultTier = {
    title: "Baixa Probabilidade de Lipedema",
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    description: "Seus sintomas parecem estar mais associados à retenção hídrica momentânea, má postura circulatória ou cansaço muscular comum. Ainda assim, um acompanhamento focado em emagrecimento saudável e drenagem pode trazer muito mais conforto.",
    recommendation: "Recomendamos nosso Protocolo de Emagrecimento Metabólico Feminino ou Consulta Farmacêutica Integrativa."
  };

  if (totalScore >= 8) {
    resultTier = {
      title: "Fortes Indícios de Lipedema",
      color: "text-[#9C523A] bg-[#F6ECE4] border-[#E8C5B0]",
      description: "Você apresenta múltiplos sintomas cardinais característicos do Lipedema (desproporção acentuada, dor ao toque, nódulos palpáveis e hematomas frequentes). O Lipedema é uma condição inflamatória crônica que NÃO melhora apenas com dietas comuns.",
      recommendation: "É altamente recomendado agendar uma Avaliação Clínica de Lipedema com a Dra. Ana Vládia para estadiamento e início do protocolo desinflamatório."
    };
  } else if (totalScore >= 4) {
    resultTier = {
      title: "Indícios Moderados de Lipedema",
      color: "text-amber-800 bg-amber-50 border-amber-200",
      description: "Você relatou alguns sintomas compatíveis com lipedema em estágio inicial ou associados a sobrecarga venolinfática e inflamação tecidual. Uma avaliação física minuciosa é essencial para fechar o diagnóstico diferencial.",
      recommendation: "Uma consulta individualizada permitirá apalpar o tecido, avaliar a fragilidade vascular e propor fitoterápicos preventivos."
    };
  }

  const currentQ = QUIZ_QUESTIONS[currentStep];
  const progressPercent = Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100);

  const whatsappMessage = `Olá, Dra. Ana Vládia! Fiz o teste de autoavaliação de Lipedema no seu site.\n\nMeu resultado: ${resultTier.title} (${totalScore} pontos).\nGostaria de agendar uma consulta para avaliar meus sintomas e iniciar o tratamento!`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-xl bg-[#FAF6F3] rounded-3xl shadow-2xl border border-[#E8C5B0] overflow-hidden text-left flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Top header */}
        <div className="px-6 py-5 bg-[#FAF4F0] border-b border-[#E8C5B0]/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#B86B52]/15 text-[#B86B52] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#2C1E18]">
                Autoavaliação de Sinais de Lipedema
              </h3>
              <p className="text-[11px] text-[#6E5345]">Triagem clínica informativa · Dra. Ana Vládia</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6E5345] hover:text-[#2C1E18] rounded-full hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!isCompleted ? (
            <>
              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-[#6E5345]">
                  <span>Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
                  <span className="font-semibold text-[#B86B52]">{progressPercent}%</span>
                </div>
                <div className="w-full h-2 bg-[#E8C5B0]/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#B86B52] transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="space-y-2">
                <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#2C1E18] leading-snug">
                  {currentQ.question}
                </h4>
                <p className="text-xs text-[#6E5345] bg-white/70 p-3 rounded-xl border border-[#E8C5B0]/40">
                  💡 <strong>Por que perguntamos isso:</strong> {currentQ.explanation}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = answers[currentStep] === opt.points;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.points)}
                      className={`w-full p-4 rounded-2xl text-left text-sm font-medium transition-all border flex items-center justify-between group cursor-pointer ${
                        isSelected 
                          ? 'bg-[#B86B52] text-white border-[#B86B52] shadow-sm' 
                          : 'bg-white hover:bg-[#FAF4F0] text-[#2C1E18] border-[#E8C5B0]/70 hover:border-[#B86B52]'
                      }`}
                    >
                      <span className="pr-4">{opt.label}</span>
                      <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-white' : 'text-[#B86B52] group-hover:translate-x-1'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Nav buttons */}
              {currentStep > 0 && (
                <div className="pt-2 flex justify-start">
                  <button
                    onClick={handlePrev}
                    className="text-xs text-[#6E5345] hover:text-[#2C1E18] flex items-center gap-1 font-medium cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Voltar à pergunta anterior</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Results Step */
            <div className="space-y-6 text-left">
              <div className={`p-5 rounded-2xl border ${resultTier.color} space-y-2`}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#B86B52]" />
                  <span className="text-xs uppercase font-bold tracking-wider">Seu Resultado:</span>
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#2C1E18]">
                  {resultTier.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#48342B] leading-relaxed">
                  {resultTier.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8C5B0]/60 space-y-2">
                <p className="text-xs font-semibold text-[#2C1E18]">
                  Orientação da Dra. Ana Vládia:
                </p>
                <p className="text-xs text-[#5A453C] leading-relaxed">
                  {resultTier.recommendation}
                </p>
                <p className="text-[11px] text-[#6E5345] italic">
                  *Esta autoavaliação tem caráter educativo e não substitui a consulta física de avaliação clínica.
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-[#B86B52] hover:bg-[#A05942] transition-colors shadow-md flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enviar Resultado p/ Dra. Ana Vládia no WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#2C1E18] bg-white border border-[#E8C5B0] hover:bg-[#FAF4F0] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#B86B52]" />
                  <span>Preencher Formulário de Agendamento no Site</span>
                </button>

                <button
                  onClick={handleReset}
                  className="w-full py-2 text-xs text-[#6E5345] hover:text-[#2C1E18] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer o teste</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
