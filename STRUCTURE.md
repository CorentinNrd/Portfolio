# Structure du Projet Portfolio

## Architecture des dossiers

```
src/
├── components/          # Composants React réutilisables
│   ├── common/         # Composants communs (Header, Footer, Button, etc.)
│   └── index.js        # Export de tous les composants
├── pages/              # Pages principales de l'application
│   └── index.js        # Export de toutes les pages
├── styles/             # Fichiers CSS et variables
│   ├── variables.css   # Variables CSS globales
│   ├── index.css       # Styles globaux et reset
│   └── App.css         # Styles du composant App
├── hooks/              # Hooks React personnalisés
├── utils/              # Fonctions utilitaires
├── data/               # Données statiques (projets, informations personnelles)
├── assets/             # Images, icônes, et autres ressources
├── App.jsx             # Composant principal
└── main.jsx            # Point d'entrée de l'application
```

## Démarrage

```bash
# Installation des dépendances
pnpm install

# Lancement en mode développement
pnpm dev

# Build pour la production
pnpm build
```

## Variables CSS

Le projet utilise des variables CSS centralisées dans `src/styles/variables.css` pour :
- Couleurs (primaire, secondaire, accent)
- Espacement (xs, sm, md, lg, xl)
- Tailles de police
- Bordures et ombres
- Transitions

## Prochaines étapes

1. Créer les composants dans `src/components/common/`
2. Développer les pages dans `src/pages/`
3. Ajouter vos données personnelles dans `src/data/`
4. Personnaliser les styles dans `src/styles/`
