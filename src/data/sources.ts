// ============================================================
// Registre des sources — chaque affirmation importante est reliée
// à une source officielle consultée.
// ============================================================

export type Source = {
  id: string;
  label: string;
  url: string;
  publisher: string;
  consulted: string; // ISO date
};

export const SOURCES: Source[] = [
  // Écoles
  { id: 'epitech-pge', label: 'Programme Grande École Epitech — formation d\'expert en informatique en 5 ans', url: 'https://www.epitech.eu/admission-post-bac-ecole-informatique', publisher: 'Epitech', consulted: '2026-11-08' },
  { id: 'epitech-rncp7', label: 'Diplôme visé par l\'État, titre RNCP niveau 7 (Bac+5)', url: 'https://www.epitech.eu/', publisher: 'Epitech', consulted: '2026-11-08' },
  { id: 'albert-bachelor', label: 'Bachelor in Business, Data & AI — partenariat Mines Paris – PSL', url: 'https://www.albertschool.com/en/programs/bachelor-business-data', publisher: 'Albert School', consulted: '2026-11-08' },
  { id: 'albert-msc', label: 'MSc Data & AI for Business en alternance — diplôme conjoint Mines Paris – PSL', url: 'https://www.albertschool.com/en/programs/msc-data-for-business', publisher: 'Albert School', consulted: '2026-11-08' },
  { id: 'albert-grade-master', label: 'Grade de master accordé au MSc Data & AI for Business par arrêté ministériel', url: 'https://www.albertschool.com/', publisher: 'Albert School / Mines Paris – PSL', consulted: '2026-11-08' },
  { id: 'ecole42', label: 'École 42 — pédagogie pair-à-pair, gratuite, sans conditions de diplôme', url: 'https://42.fr/', publisher: 'École 42', consulted: '2026-11-08' },
  { id: '42-rncp', label: 'Titres RNCP de niveau 6 et 7 enregistrés pour les parcours 42', url: 'https://www.francecompetences.fr/', publisher: 'France Compétences / RNCP', consulted: '2026-11-08' },

  // HEC & incubateurs
  { id: 'hec-launchpad', label: 'HEC Paris Startup Launchpad — accélérateur de startups étudiantes (11 semaines)', url: 'https://www.hec.edu/fr/hec-institute/centre-incubation-et-acceleration/hec-paris-startup-launchpad', publisher: 'HEC Paris', consulted: '2026-11-08' },
  { id: 'hec-launchpad-chiffres', label: 'Chiffres clés Startup Launchpad : 1000+ entrepreneurs, 500+ projets, 40 secteurs', url: 'https://www.hec.edu/fr/institut-entrepreneuriat-innovation/actualites/hec-paris-startup-launchpad-temps-forts-du-programme', publisher: 'HEC Paris', consulted: '2026-11-08' },
  { id: 'hec-incubateur', label: 'Incubateur HEC Paris — 900+ entreprises accompagnées, programme à Station F', url: 'https://www.hec.edu/fr/hec-institute/centre-incubation-et-acceleration', publisher: 'HEC Paris', consulted: '2026-11-08' },
  { id: 'hec-activity', label: 'HEC Entrepreneurship & Innovation — rapport d\'activité 2024 (599 startups accompagnées)', url: 'https://www.hec.edu/', publisher: 'HEC Paris', consulted: '2026-11-08' },
  { id: 'stationf', label: 'Station F — plus grand campus de startups au monde, 1,5 Md€ levés en 2025', url: 'https://stationf.co/', publisher: 'Station F', consulted: '2026-11-08' },
  { id: 'stationf-chiffres', label: 'Station F : 1 Md€+ levés chaque année, 9000+ startups accompagnées', url: 'https://stationf.co/', publisher: 'Station F', consulted: '2026-11-08' },
  { id: 'xup', label: 'X-UP — incubateur deeptech de l\'École polytechnique, 230+ startups, > 80% de survie à 5 ans', url: 'https://www.polytechnique.edu/novationcenter/incubateur', publisher: 'École polytechnique — Drahi X Novation Center', consulted: '2026-11-08' },
  { id: 'agoranov', label: 'Agoranov — incubateur deeptech, 500+ startups, 5 licornes (Doctolib, Dataiku, Criteo, Alan, Shift)', url: 'https://www.agoranov.com/', publisher: 'Agoranov', consulted: '2026-11-08' },
  { id: 'snee', label: 'Statut National Étudiant-Entrepreneur (SNEE) — conditions et avantages', url: 'https://www.enseignementsup-recherche.gouv.fr/fr/statut-national-etudiant-entrepreneur-46412', publisher: 'Ministère de l\'Enseignement supérieur et de la Recherche', consulted: '2026-11-08' },
  { id: 'pepite', label: 'Réseau Pépite — candidature au SNEE et accompagnement des étudiants entrepreneurs', url: 'https://www.enseignementsup-recherche.gouv.fr/fr/statut-national-etudiant-entrepreneur-46412', publisher: 'Service-Public.fr / Pépite', consulted: '2026-11-08' },

  // Entrepreneurs
  { id: 'prot-hec', label: 'Alexandre Prot (H.06), cofondateur de Qonto — Prix HEC de l\'Année 2024', url: 'https://www.hec.edu/', publisher: 'HEC Paris', consulted: '2026-11-08' },
  { id: 'qonto', label: 'Qonto — néobanque pour PME, levée de 486 M€ en 2022, valorisation 4,4 Mds€', url: 'https://www.hec.edu/', publisher: 'HEC Paris / Qonto', consulted: '2026-11-08' },
  { id: 'nussenbaum-hec', label: 'Adrien Nussenbaum (H.01), cofondateur de Mirakl — discours de remise des diplômes HEC 2024', url: 'https://www.hec.edu/en/school/news/adrien-nussenbaum-h01-deliver-keynote-address-hec-paris-2024-graduation-ceremony', publisher: 'HEC Paris', consulted: '2026-11-08' },
  { id: 'mirakl', label: 'Mirakl — plateforme de marketplace pour grandes entreprises', url: 'https://www.hec.edu/', publisher: 'HEC Paris', consulted: '2026-11-08' },
  { id: 'niox-chateau-wiki', label: 'Stanislas Niox-Château — cofondateur et PDG de Doctolib, Master HEC Entrepreneurs', url: 'https://fr.wikipedia.org/wiki/Stanislas_Niox-Chateau', publisher: 'Wikipedia (sources Challenges, Les Échos)', consulted: '2026-11-08' },
  { id: 'doctolib-licorne', label: 'Doctolib — devenu licorne en 2019 après une levée de 150 M$', url: 'https://fr.wikipedia.org/wiki/Stanislas_Niox-Chateau', publisher: 'Wikipedia', consulted: '2026-11-08' },

  // Insertion
  { id: 'cge-2025', label: 'Enquête Insertion 2025 de la CGE — salaire moyen ingénieurs 39 129€, managers 41 103€', url: 'https://www.cge.asso.fr/wp-content/uploads/2025/06/CP-CGE-Enque%CC%82te-Insertion-2025.pdf', publisher: 'Conférence des Grandes Écoles', consulted: '2026-11-08' },
  { id: 'onisep-insertion', label: 'Onisep — place des stages et de l\'alternance dans l\'insertion des ingénieurs', url: 'https://www.onisep.fr/', publisher: 'Onisep', consulted: '2026-11-08' },
];

export function source(id: string): Source | undefined {
  return SOURCES.find(s => s.id === id);
}

export function sourceRef(id: string): string {
  const s = source(id);
  return s ? s.label : '';
}
