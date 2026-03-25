// ─── Serviços ────────────────────────────────────────────────────────────────

export interface Servico {
  id: string;
  icone: string;
  titulo: string;
  descricaoCurta: string;
  descricaoLonga: string;
}

export const servicos: Servico[] = [
  {
    id: "avaliacao-pavimento",
    icone: "Activity",
    titulo: "Avaliação do Pavimento Pélvico",
    descricaoCurta: "Avaliação completa e personalizada da função do pavimento pélvico.",
    descricaoLonga:
      "Avaliação funcional detalhada do pavimento pélvico, incluindo análise postural, respiratória e muscular. Identificamos disfunções e elaboramos um plano de tratamento individualizado para cada paciente.",
  },
  {
    id: "fisioterapia-gravidez",
    icone: "Heart",
    titulo: "Fisioterapia na Gravidez",
    descricaoCurta: "Acompanhamento especializado durante toda a gravidez.",
    descricaoLonga:
      "Tratamento e prevenção de dores lombares, pélvicas e abdominais durante a gravidez. Exercícios adaptados a cada trimestre para manter a saúde da mãe e preparar o corpo para o parto.",
  },
  {
    id: "recuperacao-pos-parto",
    icone: "Star",
    titulo: "Recuperação Pós-Parto",
    descricaoCurta: "Recuperação segura e eficaz após o parto, natural ou cesariana.",
    descricaoLonga:
      "Programa de reabilitação do pavimento pélvico e da musculatura abdominal após o parto. Tratamento de diástase abdominal, incontinência urinária pós-parto e retorno seguro à atividade física.",
  },
  {
    id: "incontinencia-urinaria",
    icone: "Droplets",
    titulo: "Tratamento de Incontinência Urinária",
    descricaoCurta: "Recupere o controlo e a confiança no seu dia a dia.",
    descricaoLonga:
      "Tratamento conservador da incontinência urinária de esforço, urgência e mista através de técnicas especializadas de fortalecimento do pavimento pélvico, biofeedback e eletroestimulação.",
  },
  {
    id: "disfuncao-sexual",
    icone: "Sparkles",
    titulo: "Disfunção Sexual Feminina",
    descricaoCurta: "Tratamento de dispareunia, vaginismo e outras disfunções.",
    descricaoLonga:
      "Abordagem integrativa e empática para o tratamento de disfunções sexuais femininas, incluindo dispareunia (dor durante a relação), vaginismo e hipertonia do pavimento pélvico.",
  },
  {
    id: "preparacao-parto",
    icone: "Baby",
    titulo: "Preparação para o Parto",
    descricaoCurta: "Prepare o seu corpo e a sua mente para o momento do nascimento.",
    descricaoLonga:
      "Programa completo de preparação para o parto incluindo técnicas de respiração, posições para trabalho de parto, mobilidade pélvica e exercícios de relaxamento do pavimento pélvico.",
  },
  {
    id: "endometriose-dor-pelvica",
    icone: "Shield",
    titulo: "Endometriose e Dor Pélvica Crónica",
    descricaoCurta: "Alívio da dor e melhoria da qualidade de vida.",
    descricaoLonga:
      "Tratamento especializado para mulheres com endometriose, adenomiose e dor pélvica crónica. Técnicas miofasciais, mobilização visceral e educação para o autocuidado.",
  },
  {
    id: "menopausa-perimenopausa",
    icone: "Sun",
    titulo: "Menopausa e Perimenopausa",
    descricaoCurta: "Cuide da sua saúde pélvica nesta nova fase da sua vida.",
    descricaoLonga:
      "Tratamento das alterações do pavimento pélvico associadas à menopausa, incluindo atrofia geniturinária, prolapso de órgãos pélvicos e incontinência. Abordagem integrativa que respeita cada etapa da vida da mulher.",
  },
  {
    id: "nutricao-integrativa",
    icone: "Leaf",
    titulo: "Nutrição Integrativa",
    descricaoCurta: "A alimentação como pilar da saúde feminina em cada fase da vida.",
    descricaoLonga:
      "Acompanhamento nutricional personalizado que considera o ciclo hormonal, as fases da vida e o bem-estar emocional da mulher. Uma abordagem que vai além das calorias — alimentar o corpo, a mente e as emoções.",
  },
  {
    id: "coaching-desenvolvimento-pessoal",
    icone: "Compass",
    titulo: "Coaching e Desenvolvimento Pessoal",
    descricaoCurta: "Acompanhamento do crescimento emocional e pessoal da Mulher.",
    descricaoLonga:
      "Processo de coaching estruturado para apoiar a mulher a identificar os seus valores, superar bloqueios emocionais e construir uma vida alinhada com o seu bem-estar. Ferramentas práticas para o autoconhecimento e crescimento pessoal.",
  },
  {
    id: "medicina-integrativa",
    icone: "Stethoscope",
    titulo: "Medicina Integrativa",
    descricaoCurta: "Uma visão completa da saúde que une o convencional e o integrativo.",
    descricaoLonga:
      "Abordagem que combina medicina convencional com terapias complementares, tratando a mulher na sua totalidade — física, mental e emocional. Diagnóstico e acompanhamento personalizado que respeita a singularidade de cada paciente.",
  },
  {
    id: "aulas-pavimento-pelvico",
    icone: "Users",
    titulo: "Aulas de Pavimento Pélvico",
    descricaoCurta: "Consciência, fortalecimento e cuidado do pavimento pélvico em grupo.",
    descricaoLonga:
      "Aulas de grupo dedicadas ao conhecimento e cuidado do pavimento pélvico. Exercícios de consciência corporal, fortalecimento e relaxamento, adaptados às diferentes fases da vida da mulher. Um espaço seguro para aprender, partilhar e cuidar de si.",
  },
  {
    id: "inteligencia-emocional",
    icone: "Brain",
    titulo: "Inteligência Emocional",
    descricaoCurta: "Ferramentas práticas para a gestão emocional e o bem-estar mental.",
    descricaoLonga:
      "Acompanhamento especializado no desenvolvimento da inteligência emocional — reconhecer, compreender e gerir emoções para uma vida mais equilibrada e saudável. Técnicas de mindfulness, regulação emocional e gestão do stress adaptadas à realidade da Mulher.",
  },
];

// ─── Serviços (preview para homepage) ────────────────────────────────────────

// Show a cross-section: pélvica, nutrição, coaching
export const servicosPreview = [servicos[0], servicos[8], servicos[9]];

// ─── Para Quem É ─────────────────────────────────────────────────────────────

export interface ParaSi {
  id: string;
  titulo: string;
  subtitulo: string;
  imagem: string;
  sintomas: string[];
  descricao: string;
}

export const paraSi: ParaSi[] = [
  {
    id: "adolescencia",
    titulo: "Na Adolescência",
    subtitulo: "Um início consciente para uma saúde feminina plena",
    imagem: "/images/adolescencia.jpg",
    descricao:
      "A adolescência marca o início da vida hormonal da mulher. Acompanhar esta fase com atenção e cuidado é o primeiro passo para uma saúde pélvica e emocional sólida ao longo de toda a vida.",
    sintomas: [
      "Dismenorreia (cólicas menstruais intensas)",
      "Irregularidades do ciclo menstrual",
      "Dor pélvica recorrente",
      "Educação e consciência corporal",
      "Prevenção e saúde pélvica desde cedo",
    ],
  },
  {
    id: "gravidez",
    titulo: "Na Gravidez",
    subtitulo: "Cuide de si e do seu bebé desde o início",
    imagem: "/images/gravidez.png",
    descricao:
      "A gravidez traz alterações profundas no corpo da mulher. A fisioterapia pélvica acompanha-a em cada trimestre, prevenindo dores e preparando o corpo para um parto mais tranquilo.",
    sintomas: [
      "Dores lombares e pélvicas",
      "Diastase abdominal",
      "Incontinência urinária",
      "Preparação para o parto",
      "Exercício seguro na gravidez",
    ],
  },
  {
    id: "pos-parto",
    titulo: "No Pós-Parto",
    subtitulo: "Recupere o seu corpo com segurança e confiança",
    imagem: "/images/pos-parto.jpg",
    descricao:
      "O período pós-parto exige atenção e cuidado. A recuperação do pavimento pélvico e da musculatura abdominal é essencial para o bem-estar a longo prazo.",
    sintomas: [
      "Incontinência urinária pós-parto",
      "Diastase abdominal",
      "Dores perineais",
      "Cicatriz de cesariana",
      "Retorno seguro à atividade física",
    ],
  },
  {
    id: "menopausa",
    titulo: "Na Menopausa",
    subtitulo: "Viva esta fase com bem-estar e qualidade de vida",
    imagem: "/images/menopausa.png",
    descricao:
      "As alterações hormonais da menopausa afetam o pavimento pélvico. A fisioterapia especializada ajuda a manter a qualidade de vida e a independência.",
    sintomas: [
      "Atrofia geniturinária",
      "Incontinência urinária",
      "Prolapso de órgãos pélvicos",
      "Dor pélvica crónica",
      "Disfunção sexual",
    ],
  },
  {
    id: "dor-disfuncao",
    titulo: "Dor e Disfunção Pélvica",
    subtitulo: "Não precisa de viver com dor",
    imagem: "/images/dor-pelvica.png",
    descricao:
      "A dor pélvica crónica e as disfunções do pavimento pélvico têm tratamento. Com a abordagem certa, é possível recuperar a qualidade de vida e o bem-estar.",
    sintomas: [
      "Endometriose",
      "Vaginismo e dispareunia",
      "Cistite intersticial",
      "Dor coccígea",
      "Síndrome da bexiga dolorosa",
    ],
  },
];

// ─── Testemunhos ─────────────────────────────────────────────────────────────

export interface Testemunho {
  id: string;
  texto: string;
  nome: string;
  condicao: string;
}

export const testemunhos: Testemunho[] = [
  {
    id: "t1",
    texto:
      "A Dra. Michele transformou a minha vida. Após o segundo parto tinha incontinência que me impedia de correr ou rir sem me preocupar. Em 8 semanas de tratamento recuperei completamente. A sua abordagem é ao mesmo tempo técnica e humana.",
    nome: "Ana M.",
    condicao: "Recuperação Pós-Parto",
  },
  {
    id: "t2",
    texto:
      "Tinha endometriose com dores crónicas que afetavam o meu relacionamento e a minha autoestima. A Dra. Michele explicou tudo com tanta clareza e o tratamento foi progressivo e respeitoso. Hoje tenho uma qualidade de vida que não pensava ser possível.",
    nome: "Sofia R.",
    condicao: "Endometriose e Dor Pélvica",
  },
  {
    id: "t3",
    texto:
      "Fui encaminhada na 16ª semana de gravidez por dores lombares intensas. O acompanhamento ao longo da gravidez foi essencial. O meu parto foi tranquilo e a recuperação foi muito mais rápida do que esperava. Recomendo a todas as grávidas.",
    nome: "Mariana C.",
    condicao: "Fisioterapia na Gravidez",
  },
];

// ─── Credenciais ──────────────────────────────────────────────────────────────

export interface Credencial {
  titulo: string;
  instituicao: string;
  ano: string;
}

export const credenciais: Credencial[] = [
  {
    titulo: "Licenciatura em Fisioterapia",
    instituicao: "Escola Superior de Saúde",
    ano: "2008",
  },
  {
    titulo: "Pós-Graduação em Fisioterapia Pélvica e Obstétrica",
    instituicao: "Instituto Português de Fisioterapia Pélvica",
    ano: "2011",
  },
  {
    titulo: "Formação Avançada em Disfunção Sexual Feminina",
    instituicao: "European Urogynecological Association",
    ano: "2014",
  },
  {
    titulo: "Certificação em Terapia Miofascial",
    instituicao: "Instituto de Terapia Manual",
    ano: "2016",
  },
  {
    titulo: "Membro da Secção de Uroginecologia – APA",
    instituicao: "Associação Portuguesa de Fisioterapia",
    ano: "2012–presente",
  },
];

export const metricas = [
  { valor: "+12", label: "Anos de Experiência" },
  { valor: "+800", label: "Pacientes Acompanhadas" },
  { valor: "+15", label: "Formações Especializadas" },
];

// ─── Contacto ────────────────────────────────────────────────────────────────

export const contacto = {
  telefone: "+351 965 589 127",
  email: "geral@institutowoman.pt",
  morada: "Rua Arrabalde da Ponte, 163\n2415-372 Leiria",
  horario: "Segunda–Sexta: 09:00–19:00 | Sábado: 09:00–13:00",
  whatsapp: "351965589127",
  cidade: "Leiria",
};

// ─── Form data ───────────────────────────────────────────────────────────────

export const motivosConsulta = [
  "Gravidez",
  "Pós-Parto",
  "Menopausa",
  "Pavimento Pélvico",
  "Incontinência Urinária",
  "Dor Pélvica Crónica",
  "Disfunção Sexual",
  "Endometriose",
  "Preparação para o Parto",
  "Nutrição",
  "Coaching e Desenvolvimento Pessoal",
  "Medicina Integrativa",
  "Inteligência Emocional",
  "Aulas de Pavimento Pélvico",
  "Outro",
];

export const horasDisponiveis = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00",
];

export const comoNosConheceu = [
  "Pesquisa no Google",
  "Redes Sociais (Instagram/Facebook)",
  "Recomendação de médico/especialista",
  "Recomendação de amiga/familiar",
  "Site ou blog de saúde",
  "Outro",
];
