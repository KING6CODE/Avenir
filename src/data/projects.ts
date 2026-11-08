// ============================================================
// Projets — cartes de réalisations concrètes.
// Chaque projet indique le rôle d'Alistair, les compétences
// mobilisées et les résultats disponibles (sans inventer de
// chiffres).
// ============================================================

export type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  role: string;
  description: string;
  skills: string[];
  results?: string;
  status: 'publié' | 'en cours' | 'prototype' | 'clôturé';
  media?: {
    placeholder: string;
    desc: string;
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
    description: 'Une chaîne YouTube créée avec ma sœur. On y a publié notamment une musique, montée et mise en ligne ensemble. C\'est ma première expérience de publication publique et de première audience.',
    skills: ['Création de contenu', 'Montage', 'Publication', 'Travail en duo'],
    results: 'Premières vues et premières audiences. La vidéo musicale est à retrouver — son lien sera intégré dès récupération.',
    status: 'publié',
    media: {
      placeholder: 'PC Family — chaîne & vidéo musicale',
      desc: 'Capture de la chaîne + lien de la vidéo musicale. À fournir.',
      ratio: '16 / 9',
    },
  },
  {
    id: 'pc-code',
    name: 'PC Code',
    category: 'Chaîne YouTube · Tech & code',
    year: 'Collège',
    role: 'Créateur, monteur, présentateur',
    description: 'Une deuxième chaîne dédiée à l\'apprentissage par la production. J\'y expliquais ce que j\'apprenais : montage, algorithmes, problèmes techniques rencontrés.',
    skills: ['Pédagogie', 'Montage vidéo', 'Régularité', 'Vulgarisation'],
    results: 'Production régulière de contenu. Apprentissage par l\'explication.',
    status: 'publié',
    media: {
      placeholder: 'PC Code — chaîne & montages',
      desc: 'Capture de la chaîne, anciennes vidéos, ordinateur utilisé. À fournir.',
      ratio: '16 / 9',
    },
  },
  {
    id: 'sites-web',
    name: 'Sites web sur commande',
    category: 'Service · Développement web',
    year: 'Collège → lycée',
    role: 'Développeur et interlocuteur client',
    description: 'Plusieurs sites réalisés pour des clients réels, dont un pour mon oncle. Découverte concrète de la relation client, du cahier des charges et de la livraison.',
    skills: ['Relation client', 'Développement web', 'Cahier des charges', 'Livraison'],
    results: 'Sites livrés et utilisés. Premières expériences de gestion de commande.',
    status: 'publié',
    media: {
      placeholder: 'Sites web — réalisations',
      desc: 'Captures des sites réalisés (informations privées masquées). À fournir.',
      ratio: '16 / 10',
    },
  },
  {
    id: 'premiere-app',
    name: 'Première application mobile',
    category: 'Produit · Application mobile',
    year: 'Lycée',
    role: 'Concepteur, développeur, marketing',
    description: 'Mon premier produit complet, de l\'idée à la publication. J\'y ai investi du temps et un budget publicitaire. Le produit n\'a pas atteint ses objectifs commerciaux — c\'est une de mes expériences les plus formantes.',
    skills: ['Développement mobile', 'Design produit', 'Acquisition payante', 'Analyse d\'échec'],
    results: 'Investissement publicitaire mesuré. Analyse des raisons de l\'échec commercial. Apprentissage complet du cycle produit.',
    status: 'clôturé',
    media: {
      placeholder: 'Première application — écrans',
      desc: 'Écrans de l\'application, captures du développement, résultats publicitaires. À fournir.',
      ratio: '9 / 16',
    },
  },
  {
    id: 'ia-long-context',
    name: 'Projet IA — traitement de longs contextes',
    category: 'Recherche · Intelligence artificielle',
    year: 'Aujourd\'hui',
    role: 'Développeur et chercheur',
    description: 'Travail sur des méthodes de traitement de longs contextes. L\'objectif : traiter des volumes importants de données plus efficacement. Cette piste est en cours de développement. Elle doit être validée par des benchmarks reproductibles avant d\'être présentée comme une performance démontrée.',
    skills: ['IA', 'Traitement de contexte', 'Protocole de mesure', 'Benchmarks'],
    results: 'Piste technique en cours de développement. Résultats à valider par benchmarks reproductibles. Détail dans la section IA.',
    status: 'en cours',
    media: {
      placeholder: 'Projet IA — démonstrations',
      desc: 'Architecture, démonstrations, captures des tests de lecture de longs documents. À fournir.',
      ratio: '16 / 9',
    },
  },
  {
    id: 'publicite',
    name: 'Expériences publicitaires',
    category: 'Acquisition · Marketing payant',
    year: 'Aujourd\'hui',
    role: 'Investisseur et analyste',
    description: 'Expériences d\'acquisition payante : investir un budget, mesurer ce qu\'il rapporte, comprendre ce qui convertit. Premiers apprentissages sur le coût d\'acquisition et la rentabilité d\'une campagne.',
    skills: ['Acquisition', 'Coût d\'acquisition', 'Analyse de campagne', 'Rentabilité'],
    results: 'Premier signal mesuré (investissement et retour). À confirmer comme modèle économique — ce n\'est pas encore une preuve de rentabilité.',
    status: 'en cours',
    media: {
      placeholder: 'Campagnes publicitaires — résultats',
      desc: 'Captures des campagnes et de leurs résultats (coûts, conversions). À fournir.',
      ratio: '16 / 9',
    },
  },
  {
    id: 'haillo',
    name: 'Haillo',
    category: 'Application · Mascotte Hapi',
    year: 'Projet actuel',
    role: 'Développeur',
    description: 'Une application avec sa mascotte Hapi. Présence sur Google Play. Projet actuel, en développement continu.',
    skills: ['Développement mobile', 'Identité visuelle', 'Publication store'],
    status: 'en cours',
    media: {
      placeholder: 'Haillo — application & mascotte Hapi',
      desc: 'Écrans de l\'application, mascotte Hapi, capture Google Play. À fournir.',
      ratio: '9 / 16',
    },
  },
  {
    id: 'block-thud',
    name: 'Block THUD',
    category: 'Jeu · Gameplay & progression',
    year: 'Projet actuel',
    role: 'Développeur',
    description: 'Un jeu avec sa propre progression et son interface. Projet en développement.',
    skills: ['Game design', 'Développement', 'Progression de jeu'],
    status: 'en cours',
    media: {
      placeholder: 'Block THUD — gameplay',
      desc: 'Captures du gameplay, de la progression et de l\'interface. À fournir.',
      ratio: '16 / 9',
    },
  },
  {
    id: 'cold-impact',
    name: 'Cold Impact',
    category: 'Jeu · Direction artistique',
    year: 'Projet actuel',
    role: 'Développeur',
    description: 'Un jeu axé sur sa direction artistique. Projet en développement.',
    skills: ['Game design', 'Direction artistique', 'Développement'],
    status: 'en cours',
    media: {
      placeholder: 'Cold Impact — direction artistique',
      desc: 'Captures du gameplay et de la direction artistique. À fournir.',
      ratio: '16 / 9',
    },
  },
  {
    id: 'qurono',
    name: 'QURONO',
    category: 'Projet actuel',
    year: 'Projet actuel',
    role: 'Développeur',
    description: 'Un projet en cours de développement. Interface et fonctionnement à présenter une fois les captures disponibles.',
    skills: ['Développement', 'Interface'],
    status: 'en cours',
    media: {
      placeholder: 'QURONO — interface & fonctionnement',
      desc: 'Captures de l\'interface et du fonctionnement. À fournir.',
      ratio: '16 / 9',
    },
  },
];
