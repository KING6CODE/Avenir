# Connexion au dépôt GitHub

Le dépôt distant est : **https://github.com/KING6CODE/Avenir**

Il est actuellement vide — c'est normal, le site n'avait pas encore été créé.

## Étapes de connexion (à exécuter localement, pas sur le sandbox)

Le site n'a **pas** été poussé sur GitHub depuis cet environnement. Voici la procédure pour relier le dossier local au dépôt distant sans écraser de contenu.

```bash
# 1. Se placer dans le dossier du projet
cd avenir-alistair

# 2. Initialiser git (si ce n'est pas déjà fait)
git init
git branch -M main

# 3. Ajouter le remote
git remote add origin https://github.com/KING6CODE/Avenir.git
# ou, si le remote existe déjà :
# git remote set-url origin https://github.com/KING6CODE/Avenir.git

# 4. Premier commit
git add .
git commit -m "Première version du dossier familial AVENIR — Alistair"

# 5. Pousser vers le dépôt distant
git push -u origin main
```

## ⚠️ Avant de pousser

1. **Vérifier le `.gitignore`** : il exclut déjà `node_modules/`, `dist/` et `public/media/private/`.
2. **Ne jamais pousser** de photos privées ou de documents familiaux sans validation explicite.
3. Les fichiers suivants sont **sûrs à pousser** :
   - Tout le code source (`src/`, `index.html`, `package.json`, etc.)
   - `README.md`, `SOURCES.md`, `MEDIA-A-FOURNIR.md`
   - `public/favicon.svg`
   - Ce fichier `GITHUB.md`
4. Les fichiers suivants ne doivent **pas** être poussés :
   - Photos d'enfance, documents familiaux
   - Captures contenant des informations privées de clients
   - Informations personnelles non anonymisées

## Vérification après push

```bash
# Vérifier que le dépôt distant est bien relié
git remote -v

# Vérifier le statut
git status
```

Le site sera alors visible sur https://github.com/KING6CODE/Avenir.

Pour un déploiement en ligne (Vercel, Netlify, GitHub Pages), voir le `README.md`.
