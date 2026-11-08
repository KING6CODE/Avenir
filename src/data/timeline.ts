// ============================================================
// Frise chronologique — 8 étapes, du premier contact avec le code
// aux projets actuels. Chaque étape relie un souvenir à une
// compétence acquise.
// ============================================================

export type TimelineStep = {
  id: string;
  age: string;
  period: string;
  title: string;
  lead: string;
  body: string;
  skill: string;
  media?: {
    placeholder: string;
    desc: string;
    ratio?: string;
  };
};

export const TIMELINE: TimelineStep[] = [
  {
    id: 'scratch',
    age: '10 ans',
    period: 'Vers 2019–2020',
    title: 'La première logique, avec papa.',
    lead: 'Avant d\'écrire du code, j\'ai appris à décomposer une idée en étapes.',
    body: 'Avec mon père, j\'ai ouvert Scratch. On déplaçait des blocs colorés pour faire avancer un poisson à l\'écran. Ce qui me semblait être un jeu m\'a appris quelque chose de plus profond : un programme, c\'est une suite d\'instructions que l\'on peut décomposer, tester, corriger. Cette première logique algorithmique est restée. Aujourd\'hui encore, quand j\'aborde un problème technique, je commence par le découper en blocs — exactement comme avec ces blocs Scratch.',
    skill: 'Pensée algorithmique',
    media: {
      placeholder: 'Capture Scratch — projet du poisson',
      desc: 'Premier projet Scratch réalisé avec mon père. À fournir : capture d\'écran du projet ou ancienne photo de l\'ordinateur.',
      ratio: '4 / 3',
    },
  },
  {
    id: 'histoires',
    age: 'Enfance',
    period: 'Années d\'école primaire',
    title: 'Avant le code, les histoires.',
    lead: 'Maman me lisait des histoires le soir. Je ne savais pas encore ce que cela m\'apporterait.',
    body: 'J\'ai grandi avec des récits, des personnages, des motivations à comprendre. Une même situation peut être vécue différemment selon la personne qui la traverse : c\'est une chose que les histoires m\'ont apprise très tôt. Aujourd\'hui, cette capacité me sert dans mes projets : comprendre un utilisateur, écrire une présentation, raconter un produit, formuler une idée. La technique seule ne suffit pas. Il faut aussi savoir parler aux gens, et comprendre ce qu\'ils vivent. C\'est cette double culture — technique et humaine — que je veux continuer à construire.',
    skill: 'Compréhension humaine, culture littéraire, communication',
    media: {
      placeholder: 'Photo — lecture avec maman',
      desc: 'Photo d\'enfance liée à la lecture. À fournir (fichier privé, à ne pas publier sur le dépôt public).',
      ratio: '4 / 3',
    },
  },
  {
    id: 'pc-family',
    age: 'Collège',
    period: 'Première chaîne YouTube',
    title: 'PC Family — publier pour la première fois.',
    lead: 'Avec ma sœur, on a créé une chaîne. On a fait une musique. On l\'a mise en ligne.',
    body: 'PC Family, c\'est ma première vraie création publique. Avec ma sœur, on a enregistré une musique, on l\'a montée, on l\'a publiée. On a vu les premières vues arriver. Ce moment m\'a appris quelque chose de décisif : produire quelque chose, le mettre en ligne, et constater que des inconnus le regardent — c\'est une sensation qui ne ressemble à aucune autre. J\'ai compris que publier était un acte, pas seulement une étape technique. Et que chaque publication apprend quelque chose : comment titrer, comment présenter, comment donner envie. La vidéo musicale de PC Family est à retrouver — son lien sera intégré dès qu\'il sera récupéré.',
    skill: 'Création de contenu, publication, premières audiences',
    media: {
      placeholder: 'Capture — chaîne PC Family',
      desc: 'Capture de la chaîne PC Family (miniature, nombre de vues) et lien de la vidéo musicale. À fournir : URL de la vidéo + capture de la chaîne.',
      ratio: '16 / 9',
    },
  },
  {
    id: 'pc-code',
    age: 'Collège',
    period: 'Deuxième chaîne',
    title: 'PC Code — apprendre en produisant.',
    lead: 'J\'ai voulu expliquer ce que j\'apprenais. Le montage, les algorithmes, les problèmes techniques.',
    body: 'PC Code est devenu le laboratoire où j\'apprenais en expliquant. Filmer un montage, c\'est se forcer à le comprendre. Présenter un algorithme, c\'est s\'assurer qu\'on le maîtrise. Cette chaîne m\'a confronté à des problèmes concrets : la qualité du son, la clarté d\'une explication, la longueur d\'une séquence, la régularité de publication. Chaque vidéo était un petit projet, avec ses contraintes et ses apprentissages. C\'est aussi là que j\'ai compris que la persévérance comptait plus que le talent immédiat : une chaîne ne vit que si on la nourrit.',
    skill: 'Production numérique, montage, régularité, pédagogie',
    media: {
      placeholder: 'Capture — chaîne PC Code',
      desc: 'Capture de la chaîne PC Code (miniatures, anciennes vidéos, ordinateur utilisé). À fournir.',
      ratio: '16 / 9',
    },
  },
  {
    id: 'sites-web',
    age: 'Collège → lycée',
    period: 'Premières commandes',
    title: 'Les premiers sites — et les premiers clients.',
    lead: 'On m\'a demandé de faire un site. J\'ai découvert ce que veut dire un vrai besoin.',
    body: 'Mes premiers sites web ne sont pas des exercices. Ce sont des commandes, dont une pour mon oncle. Et un client, ce n\'est pas un exercice : c\'est quelqu\'un qui a un besoin précis, un budget, des attentes, un délai. J\'ai appris à écouter une demande, à la reformuler, à proposer une solution, à gérer des allers-retours. J\'ai compris que la technique ne représentait qu\'une partie du travail — et souvent, la plus simple. La relation client, la clarification du besoin, la livraison dans les temps : voilà les compétences les plus difficiles. Ce sont celles que je veux continuer à développer.',
    skill: 'Relation client, gestion de projet, livraison',
    media: {
      placeholder: 'Captures — sites réalisés',
      desc: 'Captures des sites réalisés (avec informations privées masquées). À fournir.',
      ratio: '16 / 10',
    },
  },
  {
    id: 'jeanne-darc',
    age: 'Lycée',
    period: 'Changement de cadre',
    title: 'Trouver un cadre qui me correspond.',
    lead: 'J\'ai changé d\'environnement scolaire. J\'ai appris à mieux me connaître.',
    body: 'Le changement d\'établissement n\'est pas une fuite. C\'est une recherche : trouver un cadre dans lequel je peux travailler, progresser et rester moi-même. J\'ai appris à mieux comprendre ma façon de fonctionner — ce qui me motive, ce qui me bloque, ce qui me fatigue, ce qui me rend efficace. Cette connaissance de soi est une compétence à part entière. Elle conditionne tous les autres apprentissages. Je sais aujourd\'hui que j\'ai besoin de projets concrets, de liberté d\'expérimentation, et d\'un cadre exigeant. C\'est exactement ce que je cherche dans le choix de mes études supérieures.',
    skill: 'Connaissance de soi, gestion de la différence, capacité d\'adaptation',
  },
  {
    id: 'application',
    age: 'Lycée',
    period: 'Premier produit complet',
    title: 'La première application — et l\'échec commercial.',
    lead: 'J\'ai conçu une application de A à Z. Elle n\'a pas marché commercialement. C\'est une de mes plus formantes.',
    body: 'Concevoir une application, c\'est affronter l\'ensemble du cycle : idée, design, développement, publication, communication, suivi. J\'ai tout fait moi-même. J\'ai investi dans la publicité. J\'ai rencontré des bugs, des limites, des déceptions. L\'application n\'a pas atteint ses objectifs commerciaux. Mais ce qu\'elle m\'a appris vaut plus qu\'un succès facile : gérer un budget, mesurer un coût d\'acquisition, accepter qu\'un produit ne rencontre pas son public, comprendre pourquoi, et savoir quoi corriger. L\'échec commercial, quand on sait l\'analyser, est une des formations les plus rapides au raisonnement entrepreneurial.',
    skill: 'Gestion du risque, coût d\'acquisition, analyse d\'échec',
    media: {
      placeholder: 'Captures — première application',
      desc: 'Écrans de l\'application, captures du développement, résultats publicitaires. À fournir.',
      ratio: '9 / 16',
    },
  },
  {
    id: 'ia-pub',
    age: 'Aujourd\'hui',
    period: 'Projets actuels',
    title: 'L\'IA et la publicité — les premières validations.',
    lead: 'Je travaille sur des projets d\'IA et j\'expérimente l\'acquisition payante.',
    body: 'Aujourd\'hui, je développe des projets d\'intelligence artificielle, notamment autour du traitement de longs contextes. Je m\'ène aussi des expériences publicitaires : investir un budget, mesurer ce qu\'il rapporte, comprendre ce qui convertit et ce qui ne convertit pas. Ces expériences me confrontent à la réalité économique d\'un produit : la technique ne vaut que si elle résout un problème que quelqu\'un accepte de payer. Ce que je cherche maintenant, c\'est un cadre d\'études qui me permette de pousser plus loin la technique, tout en continuant à construire et à mesurer. La suite du dossier présente ce cadre.',
    skill: 'Compétences entrepreneuriales, mesure, validation commerciale',
    media: {
      placeholder: 'Captures — projets IA et publicité',
      desc: 'Captures des projets IA, captures des campagnes publicitaires et de leurs résultats. À fournir.',
      ratio: '16 / 9',
    },
  },
];
