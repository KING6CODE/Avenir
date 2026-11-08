# AVENIR — Alistair · Dossier familial

Site web éditorial premium destiné aux parents d'Alistair. Ce n'est pas un CV ni un portfolio classique : c'est un **dossier familial interactif** qui présente son parcours, ses réalisations, ses ambitions et son projet d'études et d'entrepreneuriat.

> « Je ne veux pas choisir entre étudier et entreprendre. Je veux choisir une formation qui me permette de développer les deux. »

---

## Démarrage rapide

### Prérequis
- Node.js 18+ (testé avec Node 24)
- npm 9+

### Installation et lancement

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:5173/`.

### Build de production

```bash
npm run build      # génère le dossier dist/
npm run preview    # sert la version de production sur localhost
```

---

## Architecture du projet

```
avenir-alistair/
├── index.html                  # Métadonnées, SEO, polices
├── package.json
├── vite.config.ts
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── media/                  # Emplacement pour les médias à fournir
└── src/
    ├── main.tsx                # Point d'entrée React
    ├── App.tsx                 # Assemblage des sections + nav + footer
    ├── index.css               # Système de design (tokens, composants)
    ├── components/
    │   ├── Nav.tsx             # Navigation fixe + menu mobile
    │   ├── Reveal.tsx          # Animation au scroll
    │   ├── SectionHeader.tsx   # En-tête de section
    │   ├── MediaPlaceholder.tsx# Emplacement média identifié
    │   └── SourceNote.tsx      # Note de source
    ├── sections/
    │   ├── Accueil.tsx         # 00 — Hero + thèse
    │   ├── Histoire.tsx        # 01 — Frise chronologique
    │   ├── Projets.tsx         # 02 — Réalisations
    │   ├── IA.tsx              # 03 — Recherche IA
    │   ├── Etudes.tsx          # 04 — Comparaison écoles
    │   ├── Entreprendre.tsx    # 05 — Incubateurs + fondateurs
    │   ├── Avenir.tsx          # 06 — Trajectoire
    │   └── Lettre.tsx          # 07 — Lettre aux parents
    └── data/
        ├── timeline.ts         # 8 étapes du parcours
        ├── projects.ts         # 10 projets
        ├── schools.ts          # Epitech, Albert School, 42 + comparatif
        ├── entrepreneurs.ts    # Prot, Nussenbaum, Niox-Château
        ├── incubators.ts       # Station F, HEC, X-UP, Agoranov, SNEE
        └── sources.ts          # Registre des sources officielles
```

---

## Comment modifier le site

### Modifier un texte
Les contenus sont centralisés dans `src/data/`. Chaque fichier exporte un tableau typé.
- Pour changer une étape de la frise : `src/data/timeline.ts`
- Pour ajouter un projet : `src/data/projects.ts`
- Pour mettre à jour une école : `src/data/schools.ts`

### Ajouter une image réelle
1. Placer le fichier dans `public/media/` (jamais dans `src/`).
2. Dans le fichier de données concerné, remplacer l'objet `media: { placeholder, desc }` par un chemin d'image :
   ```ts
   media: { src: '/media/pc-family-channel.png', alt: 'Chaîne PC Family' }
   ```
3. Adapter le composant pour afficher `<img>` au lieu de `<MediaPlaceholder>` si nécessaire.

### ⚠️ Médias personnels et dépôt public
Le dépôt GitHub `https://github.com/KING6CODE/Avenir` est **public**.
- Ne **jamais** pousser de photos privées, documents familiaux ou informations personnelles sans validation explicite.
- Les photos d'enfance, les coordonnées de clients, les visages de tiers non autorisés doivent rester en local.
- Pour les portraits de fondateurs : privilégier les kits média officiels et conserver le lien de la source.

Voir `MEDIA-A-FOURNIR.md` pour la liste complète des médias à intégrer.

---

## Stack technique

- **Vite 8** — build ultra-rapide
- **React 19** + **TypeScript 7** — typage strict
- **Framer Motion** — animations (utilisé avec parcimonie)
- **CSS natif** — système de design sans framework, tokens CSS personnalisés
- **Aucun backend** — site statique, déployable sur n'importe quel hébergeur

## Principes de design

- **Dark Premium Editorial** — inspiration Apple / magazines modernes
- Alternance de fonds sombres (`#0A0A0B`) et clairs (`#F7F7F5`)
- Accent or premium sobre (`#E8B339`)
- Typographie : Inter (sans), Instrument Serif (italiques éditoriales), JetBrains Mono (labels)
- Animations discrètes au scroll, respect de `prefers-reduced-motion`
- Responsive mobile / desktop, navigation fixe avec menu mobile

---

## Sources et vérification

Chaque affirmation importante est reliée à une source officielle. Le registre complet est dans `SOURCES.md` et dans `src/data/sources.ts`. Les notes de source apparaissent en bas des cartes concernées.

Sources consultées le **08/11/2026**.

---

## État du projet

- ✅ 8 sections fonctionnelles
- ✅ Contenu rédigé et sourcé
- ✅ Design premium responsive
- ✅ Build de production validé
- ⏳ Médias personnels à intégrer (voir `MEDIA-A-FOURNIR.md`)
- ⏳ Lien de la vidéo PC Family à récupérer
- ⏳ Captures des projets IA à valider par benchmarks reproductibles

---

## Déploiement

Le site est statique : le contenu de `dist/` après `npm run build` peut être déployé sur Vercel, Netlify, GitHub Pages, ou n'importe quel hébergeur statique.

```bash
npm run build
# déployer le dossier dist/
```

---

## Licence

Projet personnel — Alistair, 2026. Tous droits réservés sur le contenu éditorial. Les sources externes restent la propriété de leurs éditeurs respectifs.
