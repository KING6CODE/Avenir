// ============================================================
// Entrepreneurs — portraits de fondateurs réels.
// Distinction claire : ancien élève d'une école ≠ personne
// incubée. Aucun lien n'est inventé entre une personne et un
// dispositif.
// ============================================================

export type Founder = {
  id: string;
  name: string;
  birth?: string;
  company: string;
  companyDesc: string;
  role: string;
  education: string;
  track: string; // parcours
  funding?: string;
  keyFact: string;
  quote?: string;
  sourceIds: string[];
  media: {
    placeholder: string;
    desc: string;
    src?: string;
    alt?: string;
    caption?: string;
    sourceLabel?: string;
    needsVerification?: boolean;
  };
};

export const FOUNDERS: Founder[] = [
  {
    id: 'alexandre-prot',
    name: 'Alexandre Prot',
    company: 'Qonto',
    companyDesc: 'Néobanque pour PME et indépendants, devenue une fintech européenne majeure.',
    role: 'Cofondateur et directeur général',
    education: 'HEC Paris (promotion H.06). A cofondé Qonto avec Steve Anavi.',
    track: 'Diplômé d\'HEC Paris. Cofonde Qonto en 2017 avec Steve Anavi. L\'entreprise devient une référence européenne de la banque pour entreprises. Prix HEC de l\'Année 2024.',
    funding: 'Levée de 486 M€ annoncée en 2022, valorisation de 4,4 Mds€ à cette période.',
    keyFact: 'Prix HEC de l\'Année 2024, décerné chaque année depuis 1986 à un ancien élève pour son parcours entrepreneurial.',
    quote: 'Le parcours entrepreneurial est un parcours d\'apprentissage continu — chaque levée, chaque produit, chaque recrute est une étape, pas une arrivée.',
    sourceIds: ['prot-hec', 'qonto'],
    media: {
      placeholder: 'Portrait officiel — Alexandre Prot',
      desc: 'Portrait officiel d\'Alexandre Prot (kit média HEC / Qonto). À vérifier — l\'image trouvée est une photo de groupe LinkedIn. Remplacer par portrait officiel si possible.',
      src: `${import.meta.env.BASE_URL}media/founders/prot.jpg`,
      alt: 'Alexandre Prot — cofondateur de Qonto',
      caption: 'Alexandre Prot — cofondateur et DG de Qonto',
      sourceLabel: '⚠ Image à vérifier — image-search',
      needsVerification: true,
    },
  },
  {
    id: 'adrien-nussenbaum',
    name: 'Adrien Nussenbaum',
    company: 'Mirakl',
    companyDesc: 'Plateforme logicielle de marketplace pour grandes entreprises — licorne française.',
    role: 'Cofondateur et U.S. CEO',
    education: 'HEC Paris (promotion H.01). A également étudié à NYU Stern.',
    track: 'Diplômé HEC Paris en 2001. Débute chez Paribas à Hong Kong. Fonde trois entreprises, dont Mirakl, devenue leader mondial des plateformes de marketplace B2B. A prononcé le discours de remise des diplômes HEC 2024.',
    keyFact: 'A fondé trois entreprises après HEC. Mirakl accompagne des groupes comme Carrefour, Macy\'s, Kodak Alaris dans leur transformation marketplace.',
    quote: 'L\'entrepreneuriat se construit sur la durée. Les premières entreprises ne sont pas toujours les bonnes — mais elles apprennent à créer les suivantes.',
    sourceIds: ['nussenbaum-hec', 'mirakl'],
    media: {
      placeholder: 'Portrait officiel — Adrien Nussenbaum',
      desc: 'Portrait officiel d\'Adrien Nussenbaum (page HEC / Mirakl). À vérifier — l\'image trouvée montre deux personnes. Remplacer par portrait officiel si possible.',
      src: `${import.meta.env.BASE_URL}media/founders/nussenbaum.jpg`,
      alt: 'Adrien Nussenbaum — cofondateur de Mirakl',
      caption: 'Adrien Nussenbaum — cofondateur et U.S. CEO de Mirakl',
      sourceLabel: '⚠ Image à vérifier — image-search',
      needsVerification: true,
    },
  },
  {
    id: 'stanislas-niox-chateau',
    name: 'Stanislas Niox-Château',
    company: 'Doctolib',
    companyDesc: 'Plateforme de prise de rendez-vous médicaux et de gestion de cabinets — licorne française de la e-santé.',
    role: 'Cofondateur et PDG',
    education: 'HEC Paris, Master Entrepreneurs. Ancien joueur de tennis (champion de Paris juniors).',
    track: 'Diplômé HEC, suit le Master HEC Entrepreneurs. Rejoint Otium Capital, participe au développement de LaFourchette (rachetée par TripAdvisor). Cofonde Doctolib en 2013. L\'entreprise devient licorne en 2019. Lance un assistant de consultation basé sur l\'IA en 2025.',
    funding: 'Levée de 150 M$ en 2019, faisant de Doctolib une licorne (valorisation > 1 Md$).',
    keyFact: 'Chevalier de l\'ordre national du Mérite (2021). A appelé en 2025 les ingénieurs européens en IA à rester en Europe pour bâtir des champions tech.',
    quote: 'L\'Europe a tout ce qu\'il faut pour être à la pointe de la révolution de l\'IA.',
    sourceIds: ['niox-chateau-wiki', 'doctolib-licorne'],
    media: {
      placeholder: 'Portrait officiel — Stanislas Niox-Château',
      desc: 'Portrait officiel de Stanislas Niox-Château (page HEC / Doctolib). À vérifier — l\'image trouvée semble être une photo d\'ambiance. Remplacer par portrait officiel si possible.',
      src: `${import.meta.env.BASE_URL}media/founders/niox.jpg`,
      alt: 'Stanislas Niox-Château — cofondateur de Doctolib',
      caption: 'Stanislas Niox-Château — cofondateur et PDG de Doctolib',
      sourceLabel: '⚠ Image à vérifier — image-search',
      needsVerification: true,
    },
  },
];
