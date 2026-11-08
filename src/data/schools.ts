// ============================================================
// Écoles — comparaison documentée d'Epitech, Albert School et 42.
// Chaque fiche distingue : diplôme exact, reconnaissance officielle,
// pédagogie, admission, débouchés et possibilités entrepreneuriales.
// Aucune certification n'est présentée comme un diplôme d'ingénieur.
// ============================================================

export type School = {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  diploma: string;
  recognition: string;
  pedagogy: string;
  admission: string;
  tuition: string;
  entrepreneurship: string;
  outcomes: string;
  strengths: string[];
  limits: string[];
  bestFor: string;
  website: string;
  parcoursup?: string;
  sourceIds: string[];
  visual: {
    label: string;
    desc: string;
    src?: string;
    alt?: string;
    caption?: string;
    sourceLabel?: string;
  };
};

export const SCHOOLS: School[] = [
  {
    id: 'epitech',
    name: 'Epitech',
    tagline: 'L\'école de l\'expertise technique par les projets.',
    duration: '5 ans après le bac (Programme Grande École)',
    diploma: 'Diplôme d\'Expert(e) en Technologies de l\'Information — Bac+5, visé par l\'État.',
    recognition: 'Titre RNCP de niveau 7 (équivalent Bac+5). Diplôme visé par le ministère de l\'Enseignement supérieur. À distinguer d\'un titre d\'ingénieur : ce n\'est pas un diplôme d\'ingénieur au sens de la Commission des Titres d\'Ingénieur.',
    pedagogy: 'Pédagogie par projets, en autonomie et en équipes. Apprentissage actif : on code dès le premier jour, on apprend en construisant. Compétences couvertes : développement logiciel, intelligence artificielle, cybersécurité, cloud, data.',
    admission: 'Le Programme Grande École post-bac se recrute via Parcoursup. Epitech indique accorder une place importante à la personnalité dans son processus de sélection ; cela ne signifie pas que les résultats scolaires sont ignorés.',
    tuition: 'Environ 9 180 € à 10 760 € par an (données publiques 2025-2026). À vérifier sur le site officiel pour l\'année concernée.',
    entrepreneurship: 'La pédagogie par projets est compatible avec le développement de projets personnels en parallèle. Le Statut National Étudiant-Entrepreneur (SNEE) est accessible aux étudiants inscrits dans un cursus supérieur éligible.',
    outcomes: 'Débouchés en développement logiciel, architecture technique, IA appliquée, cybersécurité, conseil technique. Réseau d\'anciens dans la tech française.',
    strengths: [
      'Pédagogie concrète : on code tôt et souvent',
      'Diplôme visé par l\'État, niveau RNCP 7',
      'Réseau tech établi en France',
      'Compatible avec la construction de projets personnels en parallèle',
    ],
    limits: [
      'Diplôme d\'expert en technologies de l\'information, et non titre d\'ingénieur CTI',
      'Frais de scolarité élevés à anticiper (alternance possible)',
      'La part du business et de l\'entrepreneuriat est moins centrale que la technique',
    ],
    bestFor: 'Le profil technique qui veut construire une expertise logicielle solide et garder la liberté de développer des projets en parallèle.',
    website: 'https://www.epitech.eu/',
    parcoursup: 'https://www.epitech.eu/admission-post-bac-ecole-informatique',
    sourceIds: ['epitech-pge', 'epitech-rncp7'],
    visual: {
      label: 'Campus Epitech',
      desc: 'Photo officielle du campus Epitech (Paris ou autre). Source : site officiel Epitech.',
      src: `${import.meta.env.BASE_URL}media/schools/epitech.jpg`,
      alt: 'Visuel Epitech — école d\'informatique',
      caption: 'Epitech — école d\'expertise informatique',
      sourceLabel: 'Image : image-search',
    },
  },
  {
    id: 'albert-school',
    name: 'Albert School',
    tagline: 'Business, data et IA — la formation hybride.',
    duration: 'Bachelor 3 ans · MSc 2 ans (soit 5 ans au total)',
    diploma: 'Bachelor en Business, Data & AI (Bac+3, grade de licence) et MSc Data & AI for Business (Bac+5, grade de master) — diplômes conjoints avec Mines Paris – PSL.',
    recognition: 'Le Bachelor bénéficie du grade de licence. Le MSc Data & AI for Business bénéficie du grade de master, accordé par arrêté ministériel. Partenariat académique avec Mines Paris – PSL, école membre de l\'Institut Polytechnique de Paris.',
    pedagogy: 'Formation mêlant business, data science et intelligence artificielle. Apprentissage en alternance (paid apprenticeship) pour le MSc. Cours en anglais. Approche orientée produits et décisions data.',
    admission: 'Candidature directe. Le parcours est ouvert aux profils motivés par le croisement business / data / IA. Dossier, entretien et évaluation du projet personnel.',
    tuition: 'Frais de scolarité à consulter sur le site officiel. Alternance rémunérée possible pour le MSc, ce qui peut couvrir une partie significative des coûts.',
    entrepreneurship: 'La dimension business du cursus est centrale : stratégie, modèle économique, acquisition, produit. Le SNEE est accessible. La combinaison technique + business correspond directement à un projet entrepreneurial.',
    outcomes: 'Débouchés en data science appliquée, produit data, business analytics, création d\'entreprise, conseil en transformation data. Le grade de master ouvre les mêmes droits qu\'un master universitaire pour la poursuite d\'études.',
    strengths: [
      'Combinaison rare : technique (data/IA) + business',
      'Grade de licence et grade de master reconnus',
      'Partenariat avec Mines Paris – PSL',
      'Alternance rémunérée possible au MSc',
      'Correspond directement à un projet de créateur de produit tech',
    ],
    limits: [
      'École récente — le réseau d\'anciens est en construction',
      'Le diplôme n\'est pas un titre d\'ingénieur CTI',
      'Moins de profondeur en développement logiciel pur qu\'Epitech ou 42',
    ],
    bestFor: 'Le profil qui veut comprendre à la fois la technologie et le business, et qui vise la création de produits ou d\'entreprises.',
    website: 'https://www.albertschool.com/',
    sourceIds: ['albert-bachelor', 'albert-msc', 'albert-grade-master'],
    visual: {
      label: 'Albert School × Mines Paris – PSL',
      desc: 'Photo officielle d\'Albert School ou du partenariat Mines Paris – PSL. Source : site officiel.',
      src: `${import.meta.env.BASE_URL}media/schools/albert.jpg`,
      alt: 'Étudiants en formation data et business',
      caption: 'Albert School — business, data & IA',
      sourceLabel: 'Image : image-search',
    },
  },
  {
    id: 'ecole-42',
    name: 'École 42',
    tagline: 'Apprendre par les pairs, sans cours ni frais.',
    duration: 'Curriculum ouvert, rythme personnalisé (souvent 3 à 5 ans)',
    diploma: 'Titres professionnels enregistrés au RNCP, de niveau 6 (Bac+3/4) et de niveau 7 (Bac+5) selon le parcours et le campus.',
    recognition: 'Certifications professionnelles RNCP. Ces titres ne constituent pas automatiquement un diplôme d\'ingénieur ni un diplôme national de master. Ils attestent de compétences professionnelles reconnues par l\'État.',
    pedagogy: 'Apprentissage 100 % par projets, en pair-à-pair. Aucun cours, aucun professeur au sens classique. On apprend en résolvant des problèmes, en évaluant ses pairs et en étant évalué par eux. Développement logiciel, algorithmique, systèmes, sécurité.',
    admission: 'Aucun diplôme requis. Il faut avoir 18 ans. La sélection se fait par la « Piscine » : une immersion intensive de plusieurs semaines. Aucun dossier scolaire demandé.',
    tuition: 'Gratuite. Entièrement financée par des entreprises partenaires et des mécènes. 42 est une organisation à but non lucratif.',
    entrepreneurship: 'Pédagogie qui valorise l\'autonomie, la résolution de problèmes et l\'apprentissage rapide — des compétences directement utiles à un créateur. 42 Paris est par ailleurs citée parmi les établissements partenaires du HEC Startup Launchpad (sous réserve d\'éligibilité et de sélection). Le SNEE est accessible aux étudiants 42 inscrits dans un cursus éligible.',
    outcomes: 'Débouchés en développement logiciel, devops, sécurité, architecture technique. Forte employabilité dans la tech, notamment à l\'international via le réseau 42 (plus de 30 campus dans le monde).',
    strengths: [
      'Gratuite et accessible sans condition de diplôme',
      'Pédagogie qui forme l\'autonomie et la résilience',
      'Réseau international 42',
      'Passerelle documentée avec le HEC Startup Launchpad (sous conditions)',
    ],
    limits: [
      'Pas un diplôme d\'ingénieur ni un master national',
      'Aucun cadre classique : exige une grande autonomie',
      'Le rythme non structuré peut déstabiliser certains profils',
      'Moins de structuration business / entrepreneuriat dans le cursus',
    ],
    bestFor: 'Le profil autonome, capable de progresser sans cadre, et qui veut une formation technique exigeante et gratuite.',
    website: 'https://42.fr/',
    sourceIds: ['ecole42', '42-rncp'],
    visual: {
      label: 'École 42 Paris',
      desc: 'Photo officielle du campus 42 Paris. Source : site officiel 42.',
      src: `${import.meta.env.BASE_URL}media/schools/42.jpg`,
      alt: 'Salle informatique du campus 42 Paris avec iMacs',
      caption: 'École 42 Paris — pédagogie pair-à-pair',
      sourceLabel: 'Image : image-search',
    },
  },
];

// Comparaison synthétique pour la table de comparaison
export type ComparisonRow = {
  label: string;
  epitech: string;
  albert: string;
  quaranteDeux: string;
};

export const COMPARISON: ComparisonRow[] = [
  { label: 'Durée', epitech: '5 ans', albert: '3 ans (Bachelor) + 2 ans (MSc)', quaranteDeux: 'Personnalisée (3 à 5 ans)' },
  { label: 'Diplôme', epitech: 'Diplôme d\'Expert IT visé par l\'État', albert: 'Bachelor grade de licence + MSc grade de master', quaranteDeux: 'Titres RNCP niveau 6 et 7' },
  { label: 'Reconnaissance', epitech: 'Visé par le ministère, RNCP 7', albert: 'Grade de licence et de master, partenariat Mines Paris – PSL', quaranteDeux: 'Certifications professionnelles RNCP' },
  { label: 'Est-ce un diplôme d\'ingénieur ?', epitech: 'Non — c\'est un titre d\'expert IT', albert: 'Non — c\'est un grade de master', quaranteDeux: 'Non — ce sont des titres RNCP' },
  { label: 'Pédagogie', epitech: 'Projets, équipes, autonomie', albert: 'Business + data + IA, alternance au MSc', quaranteDeux: 'Pair-à-pair, 100 % projets' },
  { label: 'Admission', epitech: 'Parcoursup (post-bac)', albert: 'Candidature directe', quaranteDeux: 'Piscine, dès 18 ans, sans diplôme' },
  { label: 'Coût', epitech: '≈ 9 180 – 10 760 € / an', albert: 'À consulter (alternance rémunérée au MSc)', quaranteDeux: 'Gratuite' },
  { label: 'Place du business', epitech: 'Secondaire', albert: 'Centrale', quaranteDeux: 'Absente du cursus' },
  { label: 'Place de l\'IA', epitech: 'Présente', albert: 'Centrale (data + IA)', quaranteDeux: 'À travers les projets' },
  { label: 'Entrepreneuriat', epitech: 'Possible en parallèle, SNEE', albert: 'Central, SNEE', quaranteDeux: 'Possible en parallèle, SNEE, passerelle HEC Launchpad (sous conditions)' },
];
