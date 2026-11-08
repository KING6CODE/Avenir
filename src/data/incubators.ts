// ============================================================
// Incubateurs et dispositifs d'accompagnement français.
// Chaque fiche précise : ce que c'est, comment on y entre,
// ce que ça apporte concrètement.
// ============================================================

export type Incubator = {
  id: string;
  name: string;
  location: string;
  type: string;
  what: string;
  howToEnter: string;
  whatItBrings: string[];
  stats: { value: string; label: string }[];
  sourceIds: string[];
  visual?: {
    src: string;
    alt: string;
    caption: string;
    sourceLabel: string;
  };
};

export const INCUBATORS: Incubator[] = [
  {
    id: 'station-f',
    name: 'Station F',
    location: 'Paris 13e — ancien hall de la SNCF',
    type: 'Campus de startups (le plus grand du monde)',
    what: 'Station F est un campus réunissant des programmes d\'incubation, des startups en résidence et des partenaires (Microsoft, Naver, Zendesk, etc.). Ce n\'est pas un incubateur unique : c\'est un écosystème qui héberge plusieurs programmes.',
    howToEnter: 'Candidature directe à un programme accueilli par Station F, ou à un partenaire. La sélection dépend du programme visé. Les critères : maturité du projet, équipe, marché.',
    whatItBrings: [
      'Hébergement au sein du plus grand campus de startups au monde',
      'Accès à un réseau dense de fondateurs, investisseurs et partenaires',
      'Programmes thématiques (IA, fintech, impact, etc.)',
      'Visibilité auprès de la presse et des financeurs',
    ],
    stats: [
      { value: '1 000', label: 'startups hébergées simultanément' },
      { value: '1,5 Md€', label: 'levés par les startups en 2025 (année record)' },
      { value: '9 000+', label: 'startups accueillies depuis 2017' },
      { value: '65', label: 'nationalités présentes' },
    ],
    sourceIds: ['stationf', 'stationf-chiffres'],
    visual: {
      src: '/media/incubators/stationf.jpg',
      alt: 'Station F — campus de startups à Paris',
      caption: 'Station F — le plus grand campus de startups au monde',
      sourceLabel: 'Image : image-search',
    },
  },
  {
    id: 'hec-incubateur',
    name: 'Incubateur HEC Paris',
    location: 'Station F — programme HEC',
    type: 'Incubateur et accélérateur',
    what: 'L\'incubateur HEC Paris accompagne des startups créées ou portées par des entrepreneurs. Il ne faut pas le confondre avec le Startup Launchpad, qui est un accélérateur de création pour étudiants, ni avec HEC Paris lui-même, qui est l\'école.',
    howToEnter: 'Candidature au programme d\'incubation. Sélection sur dossier et entretien. Le Launchpad, distinct, s\'adresse à des étudiants en création (11 semaines), avec des conditions d\'éligibilité précises.',
    whatItBrings: [
      'Accompagnement stratégique sur la durée du programme',
      'Mentorat par des entrepreneurs et des experts',
      'Accès à un réseau d\'investisseurs',
      'Mise en relation commerciale et soutien à la levée de fonds',
      'Hébergement à Station F',
    ],
    stats: [
      { value: '900+', label: 'entreprises accompagnées depuis la création' },
      { value: '1 Md€+', label: 'fonds levés par les entreprises accompagnées' },
      { value: '1 000+', label: 'étudiants entrepreneurs au Launchpad' },
      { value: '500+', label: 'projets soutenus par le Launchpad' },
    ],
    sourceIds: ['hec-incubateur', 'hec-launchpad', 'hec-launchpad-chiffres', 'hec-activity'],
    visual: {
      src: '/media/schools/hec.jpg',
      alt: 'Campus HEC Paris — bâtiment Executive Education',
      caption: 'HEC Paris — incubateur et Startup Launchpad',
      sourceLabel: 'Image : image-search',
    },
  },
  {
    id: 'x-up',
    name: 'X-UP — École polytechnique',
    location: 'Drahi X Novation Center, Palaiseau',
    type: 'Incubateur deeptech',
    what: 'X-UP est l\'incubateur de l\'École polytechnique, spécialisé dans les startups technologiques à forte composante scientifique. Il accompagne des projets deeptech, où la recherche et la technologie sont au cœur de la valeur.',
    howToEnter: 'Candidature directe. Sélection sur la qualité scientifique du projet, la maturité technique, l\'équipe. Il existe un programme d\'accès (X-UP Access) pour l\'hébergement, et un programme de scale-up (X-UP Scale).',
    whatItBrings: [
      'Accès à l\'écosystème scientifique de l\'École polytechnique',
      'Mentorat par 250 experts et mentors',
      'Liens avec les laboratoires de recherche',
      'Prêts d\'honneur financés par la Fondation de l\'École polytechnique',
      'Accompagnement au passage à l\'échelle',
    ],
    stats: [
      { value: '230+', label: 'startups accompagnées en 10 ans' },
      { value: '> 80 %', label: 'de survie des startups à 5 ans' },
      { value: '650 M€+', label: 'levés par les startups incubées' },
      { value: '250', label: 'mentors et experts' },
    ],
    sourceIds: ['xup'],
    visual: {
      src: '/media/incubators/xup.jpg',
      alt: 'École polytechnique — bâtiment avec logo X',
      caption: 'X-UP — incubateur deeptech de l\'École polytechnique',
      sourceLabel: 'Image : image-search',
    },
  },
  {
    id: 'agoranov',
    name: 'Agoranov',
    location: 'Paris — incubateur public',
    type: 'Incubateur deeptech public',
    what: 'Agoranov est un incubateur à but non lucratif fondé en 2000 par quatre universités parisiennes. Il accompagne des projets innovants dans la santé, le numérique, l\'industrie et la deeptech. C\'est un acteur majeur de l\'écosystème deeptech français.',
    howToEnter: 'Candidature par dépôt de dossier. Sélection sur l\'innovation technologique, la pertinence du projet et l\'équipe. 200 à 250 dossiers examinés chaque année.',
    whatItBrings: [
      'Accompagnement par une équipe dédiée sur la durée du programme',
      'Mise en relation avec investisseurs et industriels',
      'Accès à un réseau d\'experts scientifiques et techniques',
      'Soutien à la structuration de la startup',
      'Liens avec les laboratoires publics',
    ],
    stats: [
      { value: '500+', label: 'startups incubées' },
      { value: '5', label: 'licornes : Doctolib, Dataiku, Criteo, Alan, Shift Technology' },
      { value: '25 000+', label: 'emplois créés (cumulés)' },
      { value: '6,6 Md€+', label: 'fonds levés par les entreprises incubées (cumulé)' },
    ],
    sourceIds: ['agoranov'],
    visual: {
      src: '/media/incubators/agoranov.jpg',
      alt: 'Écosystème deeptech parisien',
      caption: 'Agoranov — incubateur deeptech à Paris',
      sourceLabel: 'Image : image-search',
    },
  },
  {
    id: 'snee',
    name: 'Statut National Étudiant-Entrepreneur (SNEE)',
    location: 'France entière — via le réseau Pépite',
    type: 'Statut officiel et accompagnement',
    what: 'Le SNEE est un statut officiel français qui permet à un étudiant ou à un jeune diplômé de développer un projet entrepreneurial tout en poursuivant ses études. Il ne s\'obtient pas automatiquement : il est attribué après examen du dossier par un comité Pépite.',
    howToEnter: 'Candidature sur la plateforme nationale, transmise au Pépite de rattachement. Conditions : être titulaire du bac et inscrit dans un cursus supérieur éligible, ou être jeune diplômé. Le projet doit être jugé sérieux par le comité.',
    whatItBrings: [
      'Accompagnement par des tuteurs',
      'Mentorat par un entrepreneur',
      'Accès à des espaces de coworking',
      'Aménagements d\'emploi du temps',
      'Possibilité, sous conditions, de remplacer un stage obligatoire par son projet entrepreneurial',
      'Inscription possible au Diplôme d\'Étudiant-Entrepreneur (D2E)',
    ],
    stats: [
      { value: 'Pépite', label: 'réseau national d\'accompagnement' },
      { value: 'Bac +', label: 'éligibilité dès l\'entrée dans le supérieur' },
      { value: 'D2E', label: 'diplôme d\'étudiant-entrepreneur possible' },
      { value: 'Public', label: 'dispositif porté par le ministère' },
    ],
    sourceIds: ['snee', 'pepite'],
  },
];
