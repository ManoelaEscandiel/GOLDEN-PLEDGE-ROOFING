import type { Campaign, KeywordRow, AdCreative } from '../types';

export const initialAdGroup: Campaign = {
    id: 2,
    title: '[GPR] B2C - GAF Master Elite (Foco: Helena)',
    details: [
      { label: 'Objetivo', value: 'Capturar a demanda proativa que busca a melhor qualidade e garantia. Esta é a principal vantagem contra concorrentes locais.' },
      { label: 'Tipos de Palavras-Chave', value: 'Frase e Exata.' },
    ],
};

export const futureAdGroups: Campaign[] = [
  {
    id: 1,
    title: '[GPR] B2C - Storm & Insurance (Foco: Hélio)',
    details: [
      { label: 'Objetivo', value: 'Capturar a demanda reativa e de alta urgência pós-tempestade. Foco em confiança e especialização em sinistros.' },
      { label: 'Tipos de Palavras-Chave', value: 'Frase e Exata para controlar custos e capturar alta intenção.' },
    ],
  },
  {
    id: 3,
    title: '[GPR] B2B - Commercial (Foco: Paula)',
    details: [
      { label: 'Objetivo', value: 'Capturar gestores de propriedades. A credibilidade da LP profissional é essencial aqui.' },
      { label: 'Tipos de Palavras-Chave', value: 'Frase e Exata.' },
    ],
  },
  {
    id: 4,
    title: '[GPR] Brand',
    details: [
      { label: 'Objetivo', value: 'Proteger a marca e capturar usuários que já ouviram falar da GPR.' },
    ],
  },
];

export const keywordData: KeywordRow[] = [
    {
      group: 'B2C - Storm / Insurance',
      keywords: ['hail damage roof repair cypress', 'storm damage roofing houston', 'emergency roof repair', 'roof leak repair houston'],
      persona: 'Hélio (Reativo)',
      cpc: '$7.00 - $15.00',
      justification: 'Termos de alta urgência. Baseado em `roof repair` ($7.57) e `roof leak inspection` ($8.38).',
    },
    {
      group: 'B2C - GAF Master Elite',
      keywords: [
        'GAF Master Elite contractor', 
        'best roof warranty houston', 
        'GAF certified roofer cypress',
        'roof replacement houston',
        'roof replacement cypress tx',
        'new roof cost houston',
        'roof replacement quote',
        'roof inspection houston',
        'roof maintenance houston',
        'roof repair houston',
        'roofing contractors cypress'
      ],
      persona: 'Helena (Proativa)',
      cpc: '$4.50 - $25.00+',
      justification: 'Combina termos de nicho (GAF) com alta intenção (troca, reparo, inspeção) para capturar leads qualificados em diferentes estágios da jornada.',
    },
    {
      group: 'B2B - Commercial',
      keywords: ['commercial roofing houston', 'multi-family roofing', 'property management roofer'],
      persona: 'Paula (B2B)',
      cpc: '$15.00 - $30.00+',
      justification: 'Termos B2B são caros. Baseado em `roofing contractors Houston` (Exata) com CPC de $25.59.',
    },
    {
      group: 'Brand',
      keywords: ['Golden Pledge Roofing', 'Golden Pledge Roofing Cypress'],
      persona: 'Todos',
      cpc: '$0.50 - $2.00',
      justification: 'CPCs de marca são historicamente baixos.',
    },
  ];

export const adCreativeData: AdCreative[] = [
    {
      title: 'Ad Group 1: Storm / Hail Damage (Foco: Hélio Reativo)',
      focus: 'Urgência, Confiança e Seguro.',
      headlines: [
        'Storm Damage Claim Experts',
        'We Handle Your Insurance',
        'Emergency Roof Repair Cypress',
        'Stop Roof Leaks Fast',
        'Golden Pledge Roofing',
        'GAF® Master Elite Contractor',
        '15+ Yrs Trusted Local Roofer',
        'Avoid "Storm Chaser" Scams',
        'Get a Free Storm Inspection',
        'Fast Response Time',
        'Cypress, TX Hail Experts',
        "Don't Wait. Call Now.",
        '$0 Out of Pocket w/ Claim',
        'Secure Your Home Today',
      ],
      descriptions: [
        "Leaking roof from hail or wind? We're Cypress's trusted storm damage specialists. We secure your home & handle the entire insurance claim.",
        'Don\'t get scammed by "storm chasers". Trust a local GAF® Master Elite roofer with 15+ years experience. Free storm damage inspections.',
        'We are insurance claim specialists. Fast, reliable, and local to Cypress. We work directly with your insurer to get your roof fixed.',
        'GAF® Master Elite certified for the highest quality repair. We fix hail, wind, and storm damage. Call now for your free inspection.',
      ],
    },
    {
        title: 'Ad Group 2: GAF Master Elite (Foco: Helena Proativa)',
        focus: 'Qualidade, Garantia e Exclusividade.',
        headlines: [
            'GAF® Master Elite Contractor',
            'Get The Best GAF® Warranty',
            'Top 2% of US Roofers',
            'Golden Pledge Warranty',
            'Quality Roof Replacement',
            'Golden Pledge Roofing',
            'Planning your New Roof',
            'Get Your Free GAF® Quote',
            'Certified GAF® Installer',
            'Peace of Mind Guaranteed',
            'Serving Cypress & Houston',
            '15+ Years of Quality',
            'The Best Materials',
            'Compare Our Warranty',
            'Invest in Quality',
        ],
        descriptions: [
            'Looking for the best? We are a GAF® Master Elite Contractor, a certification held by only 2% of roofers. Get the best materials & warranty.',
            'Get the Golden Pledge Warranty, only from a GAF® Master Elite roofer. 15+ years of quality installations in Cypress & Houston. Get your free quote today.',
            'Don\'t settle for "GAF Certified". We are GAF® Master Elite. This guarantees you the best roof, the best installation, and the best warranty in the industry.',
            'Your home is your biggest asset. Protect it with a GAF® Master Elite roof from Golden Pledge Roofing. Free estimates.',
        ]
    },
    {
        title: 'Ad Group 3: B2B - Commercial (Foco: Paula B2B)',
        focus: 'Profissionalismo, Confiabilidade e Experiência B2B.',
        headlines: [
            'Commercial Roofing Houston',
            'Multi-Family Roofing Expert',
            'Property Management Services',
            'Reliable Roofing Partner',
            'GAF® Master Elite Commercial',
            'TCO-Focused Roofing',
            'Maintenance & Replacement',
            'Avoid Tenant Issues',
            '15+ Yrs B2B Experience',
            'Fully Insured & Compliant',
            'Golden Pledge Roofing',
            'CAPEX/OPEX Planning',
            'Houston Commercial Roofer',
            'Protect Your Assets',
            'Get a B2B Proposal',
        ],
        descriptions: [
            'We partner with Property Managers for multi-family & commercial roofing. GAF® Master Elite certified. We focus on TCO and long-term reliability.',
            'Avoid tenant leaks and unexpected costs. We provide full documentation, compliance, and long-term maintenance contracts. 15+ years B2B experience.',
            'Golden Pledge Roofing offers professional B2B services. From re-roofing to maintenance, trust a GAF® Master Elite partner. Get your proposal.',
            'Your professional filter stops here. We are GAF® Master Elite, fully insured, and have 15+ years of experience with B2B & B2G projects.',
        ]
    }
];

export const recommendationsData: string[] = [
    '<strong>Foco da Fase 1:</strong> O orçamento de mídia inicial ($1.5k-$2k/mês) deve ser usado para <strong>validar a CVR</strong> da nova LP, não para gerar volume. O objetivo é atingir a CVR projetada de 5% ou mais, o que torna a meta de CPL de $150 viável.',
    '<strong>Rastreamento (Tracking):</strong> O setup do Google Analytics 4 (GA4) é crítico. Deve rastrear não apenas envios de formulário, mas também cliques em telefone (Click-to-Call), pois a persona "Hélio" (reativa) provavelmente ligará.',
    '<strong>Google Local Services Ads (LSA):</strong> Conforme mencionado no PDF, o LSA deve ser uma prioridade. A combinação do selo "Google Guaranteed" com a sua certificação "GAF Master Elite" será um diferencial de confiança imbatível.',
];