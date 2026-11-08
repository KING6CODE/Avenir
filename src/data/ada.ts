// ============================================================
// ADA — projet d'intelligence artificielle d'Alistair.
// Toutes les données proviennent du rapport ADA 1.3 du 3 nov. 2026.
// Aucun chiffre inventé : perplexités, mémoires, scores mesurés.
// Ornith-1.5-9B = modèle de référence pour la comparaison.
// ============================================================

export const ADA = {
  version: 'ADA 1.3',
  reportDate: '3 novembre 2026',
  hardware: 'Mac (entraînement local, ~20 jetons/s)',

  // L'histoire
  pitch: 'Un modèle de langage entraîné seul, sur un Mac, avec une idée : rendre les très longs contextes possibles en divisant la mémoire par 28.',

  problem: {
    title: 'Le problème : la mémoire des longs contextes',
    body: 'Les grands modèles de langage lisent le texte à travers une « fenêtre de contexte ». Plus cette fenêtre est grande, plus le modèle peut lire de texte d\'un coup — un livre, un dossier, un corpus. Le problème : la mémoire nécessaire explose avec la longueur. À 1 million de jetons, le cache d\'un modèle classique de 9 milliards de paramètres dépasse 30 Go. Aucun Mac ne peut le contenir.',
    body2: 'C\'est ce problème que j\'attaque avec ADA : une architecture où 16 couches lisent un seul espace latent partagé, au lieu de chacune garder sa copie de la mémoire.',
  },

  approach: {
    title: 'L\'approche : un cache latent partagé',
    body: 'ADA (version 1.3, 16 couches croisées) remplace la mémoire redondante des architectures classiques par un latent unique de 512 + 64 valeurs, lu par toutes les couches. Résultat calculé : à 1 million de jetons, le cache d\'ADA pèse 1,1 Go — là où le modèle de référence en exigerait 30,5. Vingt-huit fois moins.',
    body2: 'La contrepartie est honnête : cette mémoire légère ne sert encore à rien si le modèle n\'apprend pas à s\'en servir. C\'est exactement ce que les benchmarks ci-dessous mesurent — et c\'est là que se trouve le travail restant.',
  },

  // Résultats mesurés — perplexité
  perplexity: {
    title: 'Qualité de prédiction (perplexité)',
    explanation: 'Plus la perplexité est basse, mieux le modèle prédit le texte. Mesuré sur des textes jamais utilisés pour l\'entraînement (code Python, JS, C++, anglais, français).',
    rows: [
      { game: 'EVAL', adaStart: 53, adaNow: 19.7, ornith: 5.8, agreement: '54 %', texts: 12 },
      { game: 'EVAL2', adaStart: null, adaNow: 18.4, ornith: 5.3, agreement: '52 %', texts: 12 },
      { game: 'VAL (plus dur)', adaStart: 140.6, adaNow: 31.6, ornith: 5.4, agreement: '45 %', texts: 36 },
    ],
    note: 'ADA a fait un grand chemin depuis son départ (perplexité 53 → 19,7) mais reste derrière Ornith (5,8). L\'accord de prédiction avec Ornith atteint 54 % — ADA commence à « penser » comme le modèle de référence, sans l\'égaler.',
  },

  // L'avantage clé — mémoire
  memory: {
    title: 'L\'avantage clé : la mémoire',
    explanation: 'Mémoire de cache par jeton, calculée en bf16. À 1 million de jetons, Ornith ne tient pas dans un Mac de 16 Go — ADA tiendrait dans 1,1 Go.',
    rows: [
      { context: '32 000 jetons', ornith: '0,98 Go', ada: '0,03 Go' },
      { context: '262 000 jetons', ornith: '8,0 Go', ada: '0,3 Go' },
      { context: '1 million de jetons', ornith: '30,5 Go', ada: '1,1 Go' },
    ],
    factor: '28 ×',
    factorLabel: 'moins de mémoire qu\'une architecture classique',
    note: 'Limite honnête : 1 million de jetons n\'a pas été exécuté ici — le code d\'entraînement relirait toute la séquence et la mémoire du Mac ne suffirait pas. C\'est un calcul d\'architecture, pas une mesure d\'exécution.',
  },

  // Points faibles — rappel de contexte long
  longContext: {
    title: 'Le point faible, assumé : le rappel de contexte long',
    explanation: 'Test « aiguille dans une botte de foin » : une liste clé-valeur est lue, puis on redemande les valeurs. Ornith retrouve tout (gain ~78-81). ADA, aujourd\'hui, ne retrouve presque rien.',
    rows: [
      { length: '512 jetons', ada: 6.5, ornith: 77.6 },
      { length: '1 024 jetons', ada: 2.7, ornith: 77.0 },
      { length: '2 048 jetons', ada: 2.9, ornith: 81.3 },
      { length: '4 096 jetons', ada: 0.6, ornith: 80.3 },
    ],
    note: 'La raison est identifiée : l\'entraînement n\'a vu que des fenêtres de 512 jetons. ADA n\'a jamais appris à chercher loin. Le plan en 9 étapes prévoit de l\'entraîner sur des séquences de 2 000 puis 8 000 jetons, mêlées à des tâches de rappel.',
  },

  // Code
  code: {
    title: 'Mini-banc de code',
    explanation: '12 fonctions courtes écrites pour l\'occasion, vérifiées par test automatique. Ce n\'est pas HumanEval : un point de repère, pas un classement.',
    adaScore: 5,
    ornithScore: 12,
    total: 12,
    note: 'ADA réussit 5 fonctions sur 12 (addition, carré, dernier élément, valeur absolue, somme…). Ornith en réussit 12. L\'hypothèse de travail : passer à 8-10/12 si la perplexité atteint 12-15.',
  },

  // Prévisions
  forecast: {
    title: 'Prévisions jusqu\'à fin 2026',
    explanation: 'Extrapolations honnêtes, selon le calcul disponible. Trois pentes : prudente, centrale, optimiste.',
    rows: [
      { scenario: 'Mac seul (≈ 100 M jetons)', eval: '9,6 à 15,3', central: '≈ 12,4' },
      { scenario: 'GPU loué, ×50 (≈ 5 Md jetons)', eval: '6,9 à 12,3', central: '≈ 8,9' },
      { scenario: 'GPU loué, ×500 (≈ 50 Md jetons)', eval: '6,4 à 11,0', central: '≈ 7,8' },
    ],
    note: 'Ces chiffres supposent que le rythme se maintient, ce qui n\'est pas garanti. Le but n\'est pas de promettre — c\'est de savoir où on va.',
  },

  nextSteps: [
    'Entraîner ADA sur des séquences de 2 000 puis 8 000 jetons (étapes 4 et 5 du plan en 9 étapes)',
    'Mêler des tâches de rappel (copie, aiguille) à l\'entraînement',
    'Tester la projection du cache partagé apprise (test en cours)',
    'Entraîner l\'indexeur de passages (étape 6)',
    'Mesurer, publier, recommencer',
  ],

  honestNote: 'Ce rapport est un instantané d\'un travail en cours, pas une victoire. ADA est derrière les modèles de référence sur presque tout — sauf la mémoire, où son avance est architecturale. La question qui compte : est-ce qu\'un lycéen peut apprendre, mesurer et progresser sur un problème réel ? Le rapport répond oui. La suite dépend du travail.',
};
