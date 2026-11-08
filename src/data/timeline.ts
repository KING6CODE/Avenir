// ============================================================
// Frise chronologique — 8 étapes, du premier contact avec le code
// aux projets actuels. Chaque étape relie un souvenir à une
// compétence acquise. Images réelles fournies par Alistair.
// ============================================================

export type TimelineStep = {
  id: string;
  age: string;
  period: string;
  title: string;
  lead: string;
  body: string;
  body2?: string;
  skill: string;
  stats?: { value: string; label: string }[];
  media?: {
    src: string;
    alt: string;
    caption: string;
    ratio?: string;
    big?: boolean;
  };
};

export const TIMELINE: TimelineStep[] = [
  {
    id: 'scratch',
    age: '10 ans',
    period: 'Vers 2019–2020',
    title: 'La première logique, avec papa.',
    lead: 'Avant d\'écrire du code, j\'ai appris à décomposer une idée en étapes.',
    body: 'Avec mon père, j\'ai ouvert Scratch. On déplaçait des blocs colorés pour faire nager un poisson dans une scène sous-marine. Ce jour-là, je ne savais pas que j\'écrivais mon premier programme : « quand le drapeau est cliqué, répéter : avancer de 10 pas, rebondir si je touche un bord ». Trois sprites de poissons, un décor de corail, et l\'impression que la machine m\'obéissait.',
    body2: 'Ce qui me semblait être un jeu m\'a appris quelque chose de plus profond : un programme, c\'est une suite d\'instructions que l\'on peut décomposer, tester, corriger. Cette première logique algorithmique ne m\'a jamais quitté. Aujourd\'hui encore, quand j\'aborde un problème technique — y compris l\'architecture de mon modèle IA — je commence par le découper en blocs. Exactement comme avec ces blocs Scratch.',
    skill: 'Pensée algorithmique',
    media: {
      src: '/media/childhood/scratch.jpg',
      alt: 'Éditeur Scratch avec le projet du poisson — le premier programme d\'Alistair, réalisé avec son père vers 10 ans',
      caption: 'Mon tout premier programme. Scratch, vers mes 10 ans — le poisson qui nageait, avec papa à mes côtés.',
      ratio: '16 / 9',
      big: true,
    },
  },
  {
    id: 'histoires',
    age: 'Enfance',
    period: 'Années d\'école primaire',
    title: 'Avant le code, les histoires.',
    lead: 'Maman me lisait des histoires le soir. Je ne savais pas encore ce que cela m\'apporterait.',
    body: 'J\'ai grandi avec des récits, des personnages, des motivations à comprendre. Une même situation peut être vécue différemment selon la personne qui la traverse : c\'est une chose que les histoires de mon enfance m\'ont apprise très tôt. Bien avant de savoir coder, j\'apprenais à écouter, à imaginer comment l\'autre ressent le monde, à construire une pensée et à la formuler.',
    body2: 'Aujourd\'hui, cette capacité me sert dans tout ce que je construis : comprendre un utilisateur, écrire une présentation, raconter un produit, donner envie. La technique seule ne suffit jamais. Il faut aussi savoir parler aux gens. C\'est cette double culture — technique et humaine — que je veux continuer à construire, et que je vous demande de ne jamais me laisser perdre.',
    skill: 'Compréhension humaine, culture littéraire, communication',
    media: {
      src: '/media/childhood/maman-et-moi.jpg',
      alt: 'Photo d\'enfance — Alistair et sa maman',
      caption: 'Avec maman. Bien avant le code, il y avait les histoires, les mots, et l\'art de comprendre les gens.',
      ratio: '4 / 5',
      big: true,
    },
  },
  {
    id: 'pc-family',
    age: 'Collège',
    period: 'Première chaîne YouTube',
    title: 'PC Family — publier pour la première fois.',
    lead: 'Avec ma sœur, on a créé une chaîne. On a fait une musique. On l\'a mise en ligne. Et des inconnus l\'ont écoutée.',
    body: 'PC Family, c\'est ma première vraie création publique. Avec ma sœur, on a enregistré une musique, on l\'a montée, on l\'a publiée. Puis on a recommencé : soixante-seize vidéos publiées, des freestyles, des défis, des moments de vie. On a appris à titrer, à créer des miniatures, à donner envie de cliquer. On a vu les vues et les abonnés arriver, un par un.',
    body2: 'Ce moment m\'a appris quelque chose de décisif : produire quelque chose, le mettre en ligne, et constater que des inconnus le regardent — c\'est une sensation qui ne ressemble à aucune autre. Publier est un acte, pas une étape technique. J\'ai compris ça à 12 ans, et ça a tout changé.',
    skill: 'Création de contenu, publication, premières audiences',
    stats: [
      { value: '1 210', label: 'abonnés sur la chaîne' },
      { value: '76', label: 'vidéos publiées' },
    ],
    media: {
      src: '/media/pc-family/channel.jpg',
      alt: 'Chaîne YouTube PC Family — 1 210 abonnés, 76 vidéos',
      caption: 'PC Family — la chaîne créée avec ma sœur. Chaque vidéo était un petit pari : oser publier.',
      ratio: '16 / 9',
      big: true,
    },
  },
  {
    id: 'pc-code',
    age: 'Collège',
    period: 'Deuxième chaîne',
    title: 'PC Code — apprendre en produisant.',
    lead: 'J\'ai voulu expliquer ce que j\'apprenais. Filmer un montage, c\'est se forcer à le maîtriser.',
    body: 'PC Code est devenu le laboratoire où j\'apprenais en expliquant. Présenter un algorithme, c\'est s\'assurer qu\'on le comprend vraiment. Cette chaîne m\'a confronté à des problèmes concrets : la qualité du son, la clarté d\'une explication, la longueur d\'une séquence, la régularité de publication. Chaque vidéo était un petit projet avec ses contraintes.',
    body2: 'C\'est aussi là que j\'ai compris que la persévérance comptait plus que le talent immédiat : une chaîne ne vit que si on la nourrit. Cette leçon, je l\'ai retrouvée plus tard dans chaque projet — et dans l\'entraînement de mon modèle IA, qui exige des centaines d\'heures de patience.',
    skill: 'Production numérique, montage, régularité, pédagogie',
  },
  {
    id: 'sites-web',
    age: 'Collège → lycée',
    period: 'Premières commandes',
    title: 'Les premiers sites — et les premiers clients.',
    lead: 'On m\'a demandé de faire un site. J\'ai découvert ce que veut dire un vrai besoin, un vrai budget, un vrai délai.',
    body: 'Mes premiers sites web ne sont pas des exercices d\'école. Ce sont des commandes réelles — dont un site pour un professionnel de la santé au travail, avec ses exigences, ses validations, sa mise en ligne. Et un client, ce n\'est pas un professeur : c\'est quelqu\'un qui a un besoin précis, des attentes, et qui attend un résultat concret.',
    body2: 'J\'ai appris à écouter une demande, à la reformuler, à proposer une solution, à gérer des allers-retours, à livrer. J\'ai compris que la technique ne représente qu\'une partie du travail — et souvent, la plus simple. La relation client, la clarification du besoin, la tenue des délais : voilà les compétences les plus difficiles. Ce sont celles que je veux continuer à développer.',
    skill: 'Relation client, gestion de projet, livraison',
    stats: [
      { value: '2+', label: 'sites livrés à des clients réels' },
    ],
    media: {
      src: '/media/websites/peps.png',
      alt: 'Site web PEPS réalisé par Alistair — page d\'accueil du site professionnel',
      caption: 'Un des sites livrés : PEPS, prévention des risques professionnels. Un vrai client, un vrai besoin, une vraie livraison.',
      ratio: '16 / 10',
      big: true,
    },
  },
  {
    id: 'jeanne-darc',
    age: 'Lycée',
    period: 'Changement de cadre',
    title: 'Trouver un cadre qui me correspond.',
    lead: 'J\'ai changé d\'environnement scolaire. J\'ai appris à mieux me connaître.',
    body: 'Le changement d\'établissement n\'est pas une fuite. C\'est une recherche : trouver un cadre dans lequel je peux travailler, progresser et rester moi-même. J\'ai appris à mieux comprendre ma façon de fonctionner — ce qui me motive, ce qui me bloque, ce qui me fatigue, ce qui me rend efficace.',
    body2: 'Cette connaissance de soi est une compétence à part entière. Elle conditionne tous les autres apprentissages. Je sais aujourd\'hui que j\'ai besoin de projets concrets, de liberté d\'expérimentation, et d\'un cadre exigeant. C\'est exactement ce que je cherche dans le choix de mes études supérieures — et c\'est pour cela que ce choix mérite d\'être discuté sérieusement, ensemble.',
    skill: 'Connaissance de soi, gestion de la différence, capacité d\'adaptation',
  },
  {
    id: 'application',
    age: 'Lycée',
    period: 'Premier produit complet',
    title: 'La première application — et l\'échec commercial.',
    lead: 'J\'ai conçu une application de A à Z. Elle n\'a pas atteint ses objectifs commerciaux. C\'est une de mes expériences les plus formantes.',
    body: 'Concevoir une application, c\'est affronter l\'ensemble du cycle : idée, design, développement, publication, publicité, suivi. J\'ai tout fait moi-même. J\'ai investi mon temps et mon argent dans la publicité. J\'ai rencontré des bugs, des limites, des déceptions. L\'application n\'a pas percé.',
    body2: 'Mais ce qu\'elle m\'a appris vaut plus qu\'un succès facile : gérer un budget publicitaire réel, mesurer un coût d\'acquisition, accepter qu\'un produit ne rencontre pas son public, comprendre pourquoi, et savoir quoi corriger. L\'échec commercial, quand on sait l\'analyser, est une des formations les plus rapides au raisonnement entrepreneurial.',
    skill: 'Gestion du risque, coût d\'acquisition, analyse d\'échec',
  },
  {
    id: 'ia-pub',
    age: 'Aujourd\'hui',
    period: 'Projets actuels',
    title: 'L\'IA, les jeux, la publicité — et les premières validations.',
    lead: 'Je développe mon propre modèle de langage, je publie des applications et des jeux, et je mesure tout.',
    body: 'Aujourd\'hui, je travaille sur ADA, mon propre modèle d\'intelligence artificielle — une architecture de traitement de longs contextes entraînée sur mon Mac. Je publie des applications et des jeux sur Google Play, qui comptent déjà des centaines d\'installations. Et je mène de vraies expériences publicitaires : investir, mesurer, comprendre ce qui convertit.',
    body2: 'Ces expériences me confrontent à la réalité économique d\'un produit : la technique ne vaut que si elle résout un problème que quelqu\'un accepte de payer. Ce que je cherche maintenant, c\'est un cadre d\'études qui me permette de pousser plus loin la technique, tout en continuant à construire et à mesurer. La suite du dossier présente ce cadre — et les preuves.',
    skill: 'Compétences entrepreneuriales, mesure, validation commerciale',
    stats: [
      { value: '216', label: 'installations cumulées de mes applications' },
      { value: '102', label: 'appareils actifs' },
      { value: '13,63 $', label: 'de revenus publicitaires mesérés' },
    ],
  },
];
