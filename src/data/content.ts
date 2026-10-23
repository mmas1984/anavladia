export interface Testimonial {
  id: string;
  name: string;
  age: number;
  category: 'lipedema' | 'emagrecimento' | 'corporal';
  categoryLabel: string;
  summary: string;
  story: string;
  highlight: string;
  weeks: string;
  stars: number;
  city: string;
}

export interface ProtocolItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  indications: string[];
  differentials: string[];
  badge: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  explanation: string;
  options: {
    label: string;
    points: number;
  }[];
}

export const WHATSAPP_NUMBER = "5585997305370";
export const WHATSAPP_DISPLAY = "+55 (85) 99730-5370";
export const INSTAGRAM_HANDLE = "@anavladiabrasileiro";
export const INSTAGRAM_URL = "https://instagram.com/anavladiabrasileiro";

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Juliana Mendes",
    age: 35,
    category: "lipedema",
    categoryLabel: "Tratamento de Lipedema",
    summary: "Descobri que a dor que eu sentia nas pernas tinha nome e tratamento.",
    story: "Passei anos escutando que era 'falta de vergonha na cara' ou 'apenas gordura'. Minhas pernas doíam ao toque, ficavam pesadas no fim da tarde e com roxos constantes. A Dra. Ana Vládia foi a primeira profissional que me ouviu com empatia e diagnosticou meus sinais de lipedema. Com o protocolo desinflamatório, nutracêuticos específicos e drenagem metabólica, em 10 semanas minha dor zerou e reduzi 7cm de circunferência nas coxas!",
    highlight: "Sem dor e -7cm de circunferência",
    weeks: "10 semanas de protocolo",
    stars: 5,
    city: "Fortaleza, CE"
  },
  {
    id: "2",
    name: "Patrícia Albuquerque",
    age: 42,
    category: "emagrecimento",
    categoryLabel: "Emagrecimento Integrativo",
    summary: "Perdi 9,5kg de gordura pura mantendo minha massa muscular e energia.",
    story: "Depois dos 40 anos meu metabolismo travou por completo. Dietas restritivas só me deixavam ansiosa e sem energia. A abordagem farmacêutica da Dra. Ana investigou minha inflamação intestinal, sono e perfil hormonal. A prescrição personalizada de manipulados e a estética corporal avançada mudaram meu corpo de forma sustentável e saudável.",
    highlight: "-9,5kg e metabolismo reativado",
    weeks: "12 semanas",
    stars: 5,
    city: "Fortaleza, CE"
  },
  {
    id: "3",
    name: "Camila Barreto",
    age: 29,
    category: "lipedema",
    categoryLabel: "Lipedema & Desinflamação",
    summary: "A sensação de peso nas pernas acabou. Minha autoestima voltou por inteiro.",
    story: "Trabalho muito tempo sentada e minhas pernas pareciam de chumbo no fim do dia, com nódulos dolorosos. O cuidado individualizado da Dra. Ana Vládia é diferenciado porque ela acompanha cada detalhe da nossa rotina. O plano terapêutico desinflamou meu corpo rapidamente e devolveu o desenho harmônico dos meus tornozelos e pernas.",
    highlight: "Alívio imediato do inchaço e dor",
    weeks: "8 semanas",
    stars: 5,
    city: "Eusébio, CE"
  },
  {
    id: "4",
    name: "Dra. Renata Vasconcelos",
    age: 38,
    category: "corporal",
    categoryLabel: "Remodelamento & Flacidez",
    summary: "Como profissional da saúde, exijo fundamentação científica. A Dra. Ana entrega excelência.",
    story: "O conhecimento dela em bioquímica farmacêutica e tecnologias corporais é admirável. Fiz o protocolo associado para gordura localizada e flacidez após a gestação. A melhora na firmeza da pele e no contorno abdominal superou qualquer expectativa que eu tinha.",
    highlight: "Firmeza tecidual e contorno redefinido",
    weeks: "6 sessões combinadas",
    stars: 5,
    city: "Fortaleza, CE"
  },
  {
    id: "5",
    name: "Mariana Holanda",
    age: 31,
    category: "emagrecimento",
    categoryLabel: "Emagrecimento Feminino",
    summary: "O acompanhamento semanal e os fitoterápicos sob medida fizeram toda a diferença.",
    story: "Nunca tinha feito um acompanhamento onde o profissional realmente formulasse algo pensando exatamente na minha compulsão por doces na TPM e na minha retenção líquida. Já eliminei 6kg e perdi medidas que nenhuma academia tinha conseguido tirar.",
    highlight: "Controle de compulsão e perda de medidas",
    weeks: "8 semanas",
    stars: 5,
    city: "Fortaleza, CE"
  }
];

export const PROTOCOLS: ProtocolItem[] = [
  {
    id: "lipedema-care",
    title: "Protocolo Lipedema Care",
    tagline: "Desinflamação sistêmica, alívio de dor e modelagem para membros inferiores",
    description: "Um protocolo clínico desenhado especificamente para as particularidades do tecido adiposo doente no Lipedema. Combina estímulo da circulação linfática profunda, tecnologias redutoras de fibrose, nutracêuticos anti-inflamatórios e suporte nutricional desinflamatório.",
    indications: [
      "Dor e hipersensibilidade ao toque nas pernas",
      "Sensação de peso e queimação ao final do dia",
      "Gordura localizada resistente que não responde a dietas",
      "Nódulos palpáveis sob a pele e hematomas frequentes"
    ],
    differentials: [
      "Avaliação de estadiamento do Lipedema",
      "Fórmulas manipuladas personalizadas de suporte vascular",
      "Tecnologias não invasivas para suavizar fibroses",
      "Orientações de rotina desinflamatória sustentável"
    ],
    badge: "Foco Exclusivo Lipedema"
  },
  {
    id: "emagrecimento-integrativo",
    title: "Emagrecimento Metabólico Feminino",
    tagline: "Redução de gordura consciente com preservação da massa magra e saúde hormonal",
    description: "Protocolo que vai além do cálculo calórico simplista. Avaliamos a saúde do intestino, eixos hormonais femininos, níveis de cortisol e metabolismo para criar um plano com suplementação ativa e procedimentos estéticos de alta performance.",
    indications: [
      "Metabolismo lento ou estagnado",
      "Dificuldade de emagrecimento após os 30 anos ou pós-parto",
      "Retenção de líquidos crônica e inchaço abdominal",
      "Compulsão alimentar associada ao ciclo menstrual"
    ],
    differentials: [
      "Bioimpedância e mapeamento metabólico completo",
      "Fitoterápicos e nutracêuticos individualizados",
      "Associação de eletroterapia e lipocavitação de alta precisão",
      "Suporte contínuo sem dietas punitivas"
    ],
    badge: "Alta Performance Metabólica"
  },
  {
    id: "gordura-e-flacidez",
    title: "Contorno Corporal & Firmeza Tissular",
    tagline: "Ação sinérgica contra a flacidez e gordura localizada resistente",
    description: "Tratamento de precisão para áreas de difícil resposta como abdômen inferior, flancos, culotes, interno de coxas e costas. Estimula neocolagênese profunda enquanto metaboliza células adiposas excedentes.",
    indications: [
      "Flacidez pós-emagrecimento ou pós-gestação",
      "Gordura localizada resistente aos treinos",
      "Perda de tônus e contorno corporal definido"
    ],
    differentials: [
      "Estímulo duplo de colágeno e quebra de adipócitos",
      "Prevenção do efeito sanfona tecidual",
      "Protocolos personalizados conforme o biotipo corporal"
    ],
    badge: "Redefinição de Silhueta"
  },
  {
    id: "consulta-integrativa",
    title: "Consulta Farmacêutica Integrativa",
    tagline: "Mapeamento minucioso do seu organismo e prescrição magistral exclusiva",
    description: "Uma sessão aprofundada de investigação clínica e farmacológica. A Dra. Ana Vládia analisa seus exames laboratoriais, histórico de saúde, medicamentos em uso e elabora sua prescrição personalizada de nutracêuticos e fitoterapia.",
    indications: [
      "Mulheres que buscam entender as causas do ganho de peso",
      "Investigação inicial de suspeita de Lipedema",
      "Necessidade de suporte terapêutico para desinflamação"
    ],
    differentials: [
      "Prescrição magistral sob medida em receituário farmacêutico",
      "Interpretação integrativa de exames laboratoriais",
      "Plano terapêutico passo a passo com metas reais"
    ],
    badge: "Primeiro Passo Essencial"
  }
];

export const LIPEDEMA_COMPARISON = [
  {
    feature: "Causa Primária",
    lipedema: "Condição crônica e inflamatória do tecido adiposo (genética/hormonal)",
    obesidade: "Balanço calórico positivo crônico e acúmulo sistêmico generalizado",
    linfedema: "Disfunção estrutural no sistema de drenagem linfática"
  },
  {
    feature: "Dor & Sensibilidade",
    lipedema: "Muito comum! Dor ao toque leve, queimação e aperto nas pernas",
    obesidade: "Rara, exceto por sobrecarga mecânica articular",
    linfedema: "Sensação de tensão ou peso, geralmente indolor ao toque"
  },
  {
    feature: "Simetria Corporal",
    lipedema: "Simétrica bilateralmente (ambas as pernas ou braços de forma idêntica)",
    obesidade: "Distribuição proporcional em todo o corpo (tronco e membros)",
    linfedema: "Geralmente assimétrico (uma perna ou braço muito mais edemaciado)"
  },
  {
    feature: "Região dos Pés / Mãos",
    lipedema: "Preservados! A gordura para no tornozelo (sinal do colar/cuff)",
    obesidade: "Os pés acumulam tecido normalmente",
    linfedema: "Pés e dedos frequentemente edemaciados (sinal de Stemmer positivo)"
  },
  {
    feature: "Resposta a Dietas Restritivas",
    lipedema: "Resistente. O tronco emagrece, mas as pernas permanecem com nódulos",
    obesidade: "Responde à restrição calórica e déficit energético",
    linfedema: "Não responde a dietas comuns; requer drenagem específica"
  },
  {
    feature: "Hematomas (Roxos Fáceis)",
    lipedema: "Frequentes e espontâneos devido à fragilidade capilar tecidual",
    obesidade: "Raros sem trauma físico evidente",
    linfedema: "Pouco frequentes; risco de infecções cutâneas (erisipela)"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Você sente que a parte inferior do seu corpo (quadril, coxas e pernas) é nitidamente desproporcional ao seu tronco?",
    explanation: "O Lipedema frequentemente mantém a cintura e o tronco mais finos enquanto acumula tecido resistente do quadril para baixo.",
    options: [
      { label: "Sim, é uma desproporção muito nítida e difícil de vestir roupas", points: 3 },
      { label: "Sinto um pouco, mas tenho dúvidas", points: 1 },
      { label: "Não, meu corpo ganha peso de forma homogênea", points: 0 }
    ]
  },
  {
    id: 2,
    question: "Suas pernas doem quando são tocadas, pressionadas ou recebem uma massagem comum?",
    explanation: "A hipersensibilidade ao toque e dor em peso são marcas registradas do processo inflamatório do Lipedema.",
    options: [
      { label: "Sim, sinto dor ou incômodo até com toques leves ou abraços de crianças", points: 3 },
      { label: "Apenas quando fico muito tempo em pé", points: 1 },
      { label: "Não sinto dor alguma nas pernas", points: 0 }
    ]
  },
  {
    id: 3,
    question: "Você costuma notar manchas roxas (hematomas) nas pernas sem lembrar de ter batido em nada?",
    explanation: "A fragilidade capilar tecidual do Lipedema faz com que pequenos vasos se rompam com muita facilidade.",
    options: [
      { label: "Frequentemente acordo com manchas roxas sem motivo", points: 3 },
      { label: "Ocasionalmente acontecem alguns roxos", points: 1 },
      { label: "Muito difícil ter manchas roxas sem trauma", points: 0 }
    ]
  },
  {
    id: 4,
    question: "Mesmo quando você faz dietas rigorosas e perde peso, a gordura das suas pernas quase não muda?",
    explanation: "O tecido adiposo doente do Lipedema não responde de forma convencional ao déficit calórico comum.",
    options: [
      { label: "Sim, meu rosto e tronco emagrecem muito, mas as pernas parecem intocadas", points: 3 },
      { label: "As pernas reduzem muito devagar em relação ao resto", points: 1 },
      { label: "Não, quando emagreço perco medidas proporcionais", points: 0 }
    ]
  },
  {
    id: 5,
    question: "Ao apalpar a pele das coxas ou pernas, você sente pequenos nódulos como 'bolinhas' ou textura granulosa sob a pele?",
    explanation: "Esses nódulos são agrupamentos de gordura fibrótica típicos da evolução do Lipedema.",
    options: [
      { label: "Sim, sinto nódulos nítidos e a pele parece irregular por baixo", points: 3 },
      { label: "Sinto apenas um pouco de celulite comum", points: 1 },
      { label: "A pele é lisa e homogênea ao toque profundo", points: 0 }
    ]
  }
];

export const INDIVIDUALIZED_BENEFITS = [
  {
    title: "Visão Farmacêutica e Bioquímica",
    subtitle: "Compreensão celular profunda",
    description: "Diferente de protocolos estéticos padronizados, a Dra. Ana Vládia analisa as vias metabólicas do seu organismo, farmacocinética dos ativos e interações celulares para escolher exatamente o que o seu corpo precisa para desinflamar.",
    icon: "FlaskConical"
  },
  {
    title: "Prescrição Magistral Personalizada",
    subtitle: "Fórmulas únicas para o seu biotipo",
    description: "Nutracêuticos, fitoterápicos anti-inflamatórios, antioxidantes mitocondriais e drenantes vasculares dosados na medida exata da sua rotina, tolerância e objetivos, sem fórmulas genéricas de prateleira.",
    icon: "Pill"
  },
  {
    title: "Respeito à Fisiologia Feminina",
    subtitle: "Hormônios, ciclos e particularidades",
    description: "O corpo da mulher passa por flutuações de estrogênio, progesterona, cortisol e retenção ao longo do mês. O acompanhamento se ajusta ao seu ciclo menstrual e fases de vida (como climatério ou pós-parto).",
    icon: "Sparkles"
  },
  {
    title: "Associação Tecnológica Inteligente",
    subtitle: "Sinergia de procedimentos comprovados",
    description: "Cada sessão é planejada combinando técnicas para romper fibroses, drenar o excesso de líquido retido, tonificar a pele e estimular neocolagênese sem sobrecarregar seu organismo.",
    icon: "Layers"
  },
  {
    title: "Acompanhamento Contínuo e Humano",
    subtitle: "Você nunca fica sozinha no processo",
    description: "Monitoramento de medidas, bioimpedância, ajuste contínuo de conduta e canal direto para sanar dúvidas. O emagrecimento vira uma jornada acolhedora, segura e prazerosa.",
    icon: "HeartHandshake"
  },
  {
    title: "Foco na Causa Raiz e Desinflamação",
    subtitle: "Resultados duradouros sem efeito rebote",
    description: "Não tratamos apenas o sintoma estético superficial. Desinflamamos o tecido para que você recupere a disposição, durma melhor, elimine as dores e conquiste o corpo que merece.",
    icon: "ShieldCheck"
  }
];
