// ============================================================
// Projets — cartes de réalisations concrètes.
// Images réelles et chiffres mesurés fournis par Alistair.
// ============================================================

export type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  role: string;
  description: string;
  description2?: string;
  skills: string[];
  results?: string[];
  stats?: { value: string; label: string }[];
  status: 'publié' | 'en cours' | 'prototype' | 'clôturé';
  media: {
    src: string;
    alt: string;
    caption: string;
    ratio?: string;
  };
  media2?: {
    src: string;
    alt: string;
    caption: string;
    ratio?: string;
  };
  link?: { label: string; url: string };
};

export const PROJECTS: Project[] = [
  {
    id: 'pc-family',
    name: 'PC Family',
    category: 'Chaîne YouTube · Création musicale',
    year: 'Collège',
    role: 'Cofondateur, avec ma sœur',
    description: 'Une chaîne YouTube créée avec ma sœur. On y a publié une musique, des freestyles, des défis — soixante-seize vidéos en tout. C\'est ma première expérience de publication publique et de première audience.',
    description2: 'La vidéo musicale que l\'on avait créée ensemble est celle qui a lancé la chaîne. Elle est intégrée ci-dessous.',
    skills: ['Création de contenu', 'Montage', 'Publication', 'Travail en duo'],
    results: [
      '1 210 abonnés reunis',
      '76 vidéos publiées',
      'Des milliers de vues cumulées',
    ],
    stats: [
      { value: '1 210', label: 'abonnés' },
      { value: '76', label: 'vidéos' },
    ],
    status: 'publié',
    media: {
      src: `${import.meta.env.BASE_URL}media/pc-family/channel.jpg`,
      alt: 'Chaîne YouTube PC Family — 1 210 abonnés, 76 vidéos',
      caption: 'PC Family — la chaîne créée avec ma sœur.',
      ratio: '16 / 9',
    },
    link: { label: 'Voir la chaîne', url: 'https://www.youtube.com/@youtube_PC-Family.54' },
  },
  {
    id: 'pc-code',
    name: 'PC Code',
    category: 'Chaîne YouTube · Tech & code',
    year: 'Collège',
    role: 'Créateur, monteur, présentateur',
    description: 'Une deuxième chaîne dédiée à l\'apprentissage par la production. J\'y expliquais ce que j\'apprenais : montage, algorithmes, problèmes techniques rencontrés.',
    description2: 'Le compte développeur « pccode » que j\'utilise encore aujourd\'hui pour publier mes applications sur Google Play vient de cette époque.',
    skills: ['Pédagogie', 'Montage vidéo', 'Régularité', 'Vulgarisation'],
    results: ['Production régulière de contenu', 'Apprentissage par l\'explication'],
    status: 'publié',
    media: {
      src: `${import.meta.env.BASE_URL}media/applications/haillo/play-store.png`,
      alt: 'Application Haillo publiée sur Google Play sous le compte développeur pccode',
      caption: 'Le compte développeur « pccode », né de la chaîne PC Code, publie aujourd\'hui mes applications.',
      ratio: '16 / 9',
    },
  },
  {
    id: 'sites-web',
    name: 'Sites web sur commande',
    category: 'Service · Développement web',
    year: 'Collège → lycée',
    role: 'Développeur et interlocuteur client',
    description: 'Plusieurs sites réalisés pour des clients réels — dont un site professionnel de prévention santé au travail et un projet immobilier. Découverte concrète de la relation client, du cahier des charges et de la livraison.',
    description2: 'Chaque site m\'a confronté à la même leçon : la technique n\'est que la moitié du travail. L\'autre moitié, c\'est écouter, reformuler, livrer.',
    skills: ['Relation client', 'Développement web', 'Cahier des charges', 'Livraison'],
    results: ['Sites livrés et utilisés par des clients', 'Premières expériences de gestion de commande'],
    status: 'publié',
    media: {
      src: `${import.meta.env.BASE_URL}media/websites/peps.png`,
      alt: 'Site web PEPS réalisé par Alistair',
      caption: 'PEPS — prévention des risques professionnels. Un client réel.',
      ratio: '16 / 10',
    },
    media2: {
      src: `${import.meta.env.BASE_URL}media/websites/oneclickhome.png`,
      alt: 'Site web OneClickHome réalisé par Alistair — page d\'accueil immobilier',
      caption: 'OneClickHome — projet immobilier. « La nouvelle façon intelligente de trouver votre bien. »',
      ratio: '16 / 10',
    },
  },
  {
    id: 'premiere-app',
    name: 'Première application mobile',
    category: 'Produit · Application mobile',
    year: 'Lycée',
    role: 'Concepteur, développeur, marketing',
    description: 'Mon premier produit complet, de l\'idée à la publication sur Google Play. J\'y ai investi du temps et un budget publicitaire réel. Le produit n\'a pas atteint ses objectifs commerciaux — c\'est une de mes expériences les plus formantes.',
    description2: 'C\'est cette application qui m\'a appris la différence entre publier un produit et le faire vivre : acquisition, rétention, coût par installation. Les chiffres sont là, et ils racontent une leçon.',
    skills: ['Développement mobile', 'Design produit', 'Acquisition payante', 'Analyse d\'échec'],
    results: [
      'Produit conçu, développé et publié seul',
      'Budget publicitaire investi et mesuré',
      'Analyse complète des raisons de l\'échec commercial',
    ],
    status: 'clôturé',
    media: {
      src: `${import.meta.env.BASE_URL}media/ads/google-ads.png`,
      alt: 'Campagne Google Ads — 14 installations, 930 impressions, 0,99 € dépensés, 0,07 € par conversion',
      caption: 'La campagne d\'acquisition, mesurée : 14 installations pour 0,99 € — soit 0,07 € par installation.',
      ratio: '16 / 9',
    },
  },
  {
    id: 'haillo',
    name: 'Haillo — Maîtrise l\'IA en jouant',
    category: 'Application · Éducation à l\'IA',
    year: 'Projet actuel',
    role: 'Développeur et éditeur',
    description: 'Une application mobile pour apprendre les bases de l\'intelligence artificielle en jouant. Publiée sur Google Play sous mon compte développeur, elle dépasse aujourd\'hui les deux cents installations.',
    description2: 'Ce qui compte ici n\'est pas le volume : c\'est le cycle complet — concevoir, publier, mesurer, observer une audience réelle qui installe, joue et revient.',
    skills: ['Développement mobile', 'Design éducatif', 'Publication store', 'Analyse d\'audience'],
    results: [
      '216 installations cumulées',
      '102 appareils actifs',
      'Croissance d\'audience mesurée : +4 360 %',
    ],
    stats: [
      { value: '216', label: 'installations' },
      { value: '102', label: 'appareils actifs' },
      { value: '+131', label: 'nouvelles installations' },
    ],
    status: 'publié',
    media: {
      src: `${import.meta.env.BASE_URL}media/applications/haillo/play-store.png`,
      alt: 'Haillo sur Google Play — Maîtrise l\'IA en jouant, par pccode',
      caption: 'Haillo sur Google Play — apprendre l\'IA en jouant.',
      ratio: '16 / 9',
    },
    media2: {
      src: `${import.meta.env.BASE_URL}media/applications/haillo/play-console.png`,
      alt: 'Google Play Console — statistiques Haillo : 216 installations, 102 appareils actifs',
      caption: 'Les chiffres réels depuis la Play Console : 216 installations, 102 appareils actifs.',
      ratio: '16 / 9',
    },
  },
  {
    id: 'ia-ada',
    name: 'ADA — mon modèle d\'intelligence artificielle',
    category: 'Recherche · Intelligence artificielle',
    year: 'Aujourd\'hui',
    role: 'Chercheur et développeur',
    description: 'ADA est mon propre modèle de langage, entraîné en local sur mon Mac. Son ambition : traiter des contextes très longs avec une mémoire 28 fois plus légère qu\'une architecture classique. Les résultats sont mesurés, comparés à un modèle de référence, et présentés avec leurs limites.',
    description2: 'Cette recherche est détaillée dans la section « L\'intelligence artificielle » — avec les benchmarks complets, les forces et les faiblesses mesurées.',
    skills: ['Architecture de modèles', 'Entraînement', 'Benchmarks', 'Rigueur scientifique'],
    results: [
      'Perplexité améliorée de 53 à 19,7 sur le jeu d\'évaluation',
      'Mémoire 28 × plus légère à 1 million de jetons (1,1 Go contre 30,5 Go)',
      'Rapport de résultats complet et honnête, daté du 3 novembre 2026',
    ],
    status: 'en cours',
    media: {
      src: `${import.meta.env.BASE_URL}media/ai/ada13-resultats.pdf`,
      alt: 'Rapport de résultats ADA 1.3 — benchmarks du 3 novembre 2026',
      caption: 'Le rapport complet d\'ADA 1.3 — perplexité, mémoire, tests de rappel, comparaisons avec Ornith.',
      ratio: '3 / 4',
    },
  },
  {
    id: 'publicite',
    name: 'Expériences publicitaires',
    category: 'Acquisition · Marketing payant',
    year: 'Aujourd\'hui',
    role: 'Investisseur et analyste',
    description: 'Des campagnes d\'acquisition payante menées de bout en bout : investir un budget, mesurer chaque euro, comprendre ce qui convertit. Côté dépenses comme côté revenus, tout est mesuré.',
    description2: 'Les chiffres sont modestes — c\'est justement ce qui les rend réels : 0,99 € investis, 14 installations, 0,07 € par conversion, et 13,63 $ de revenus publicitaires cumulés. Chaque euro m\'a plus appris qu\'un cours théorique.',
    skills: ['Acquisition', 'Coût d\'acquisition', 'Analyse de campagne', 'Monétisation'],
    results: [
      '14 installations pour 0,99 € investis (0,07 € / installation)',
      '930 impressions générées',
      '13,63 $ de revenus publicitaires mesurés',
    ],
    stats: [
      { value: '0,07 €', label: 'coût par installation' },
      { value: '13,63 $', label: 'revenus publicitaires' },
      { value: '930', label: 'impressions' },
    ],
    status: 'en cours',
    media: {
      src: `${import.meta.env.BASE_URL}media/ads/google-ads.png`,
      alt: 'Tableau de bord Google Ads — synthèse des performances',
      caption: 'Google Ads : chaque euro investi, mesuré.',
      ratio: '16 / 9',
    },
    media2: {
      src: `${import.meta.env.BASE_URL}media/ads/adsense-revenus.png`,
      alt: 'Graphique AdSense — revenus estimés, total 13,63 $ US',
      caption: 'AdSense : 13,63 $ de revenus cumulés. Un premier signal, pas encore un modèle économique.',
      ratio: '16 / 10',
    },
  },
  {
    id: 'block-thud',
    name: 'Block THUD',
    category: 'Jeu mobile · Puzzle',
    year: 'Projet actuel',
    role: 'Développeur et game designer',
    description: 'Un jeu de blocs au design soigné : combos, scores, couronnes de victoire. Conçu, développé et publié sur Google Play.',
    skills: ['Game design', 'Développement mobile', 'Direction artistique'],
    results: ['Publié sur Google Play'],
    status: 'publié',
    media: {
      src: `${import.meta.env.BASE_URL}media/games/block-thud/promo.png`,
      alt: 'Block THUD — visuel promotionnel du jeu de blocs',
      caption: 'Block THUD — combos, stratégies, et la couronne au sommet.',
      ratio: '2 / 1',
    },
  },
  {
    id: 'cold-impact',
    name: 'Cold Impact',
    category: 'Ju mobile · Action 3D',
    year: 'Projet actuel',
    role: 'Développeur et game designer',
    description: 'Un jeu d\'action 3D en style low-poly : préparer un tir, gérer la trajectoire, observer le résultat. Le projet où j\'apprends la 3D en conditions réelles.',
    skills: ['Game design', 'Développement 3D', 'Direction artistique'],
    results: ['En développement'],
    status: 'en cours',
    media: {
      src: `${import.meta.env.BASE_URL}media/games/cold-impact/gameplay.png`,
      alt: 'Cold Impact — capture de gameplay 3D avec missile sur sa rampe de lancement',
      caption: 'Cold Impact — mon premier jeu 3D, en développement.',
      ratio: '9 / 14',
    },
  },
  {
    id: 'qurono',
    name: 'QURONO — Tower Drive',
    category: 'Jeu mobile · Stratégie',
    year: 'Projet actuel',
    role: 'Développeur et game designer',
    description: 'Un jeu de défense stratégique : gestion de ressources, protocoles de simulation, montée en puissance. Une interface complète avec monnaies, missions et progression.',
    skills: ['Game design', 'Développement mobile', 'Design d\'interface'],
    results: ['En développement'],
    status: 'en cours',
    media: {
      src: `${import.meta.env.BASE_URL}media/games/qurono/tower-drive.png`,
      alt: 'Tower Drive / QURONO — interface du jeu de défense holographique',
      caption: 'Tower Drive — défense holographique : ressources, protocoles, progression.',
      ratio: '9 / 14',
    },
  },
];
