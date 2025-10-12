# ENICART - Site Vitrine React

Site web vitrine pour le club artistique ENICART de l'École Nationale d'Ingénieurs de Carthage.

## 🎨 Fonctionnalités

- **Navbar fixe** avec z-index 1000 et menu responsive
- **Section Hero** avec animations et design attractif
- **Pôles artistiques** : Théâtre, Peinture & Bricolage, Musique
- **Section équipe** avec 5 membres
- **Galerie** d'images
- **Formulaire de contact**
- **Design responsive** pour tous les écrans

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

## 📦 Technologies utilisées

- React 18
- Vite
- React Icons
- CSS3 avec animations

## 🎯 Structure du projet

```
enicart-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Poles.jsx
│   │   ├── Team.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Personnalisation

Pour personnaliser le site :

1. **Couleurs** : Modifiez les variables CSS dans `index.css`
2. **Contenu** : Éditez les textes dans les composants
3. **Images** : Remplacez les placeholders par vos vraies images
4. **Membres** : Mettez à jour le tableau `teamMembers` dans `Team.jsx`

## 📝 Licence

© 2025 ENICART - Tous droits réservés
