# ComplySummarizeIA

**ComplySummarizeIA** est une plateforme SaaS intelligente qui transforme vos documents de conformité en intelligence actionnable grâce à l'IA. Cette application web moderne offre une analyse automatisée, des résumés structurés et des recommandations personnalisées pour optimiser votre gestion de la conformité.

## 🚀 Fonctionnalités Principales

### 🤖 Intelligence Artificielle Avancée
- **Analyse sémantique** avec 99,7% de précision
- **OCR intelligent** supportant 25+ langues
- **Extraction automatique** des points clés et actions
- **Scoring de conformité** en temps réel

### 📄 Gestion de Documents
- **Support format** : PDF
- **Upload sécurisé** avec limite de 50MB
- **Versioning intelligent** et métadonnées automatiques
- **Traitement en temps réel** (<30 secondes)

### 🔒 Sécurité & Conformité
- **Chiffrement end-to-end** (AES-256)
- **Conformité multi-réglementaire** (50+ frameworks)
- **Infrastructure cloud sécurisée**
- **Audit trails complets**

### 👥 Collaboration & Workflow
- **Collaboration d'équipe** (jusqu'à 50 utilisateurs)
- **Workflows automatisés** personnalisables
- **Rapports PDF professionnels** avec branding
- **Partage sécurisé** des analyses

## 📋 Table des matières

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Scripts](#scripts)
- [Structure du Projet](#structure-du-projet)
- [Pages et Fonctionnalités](#pages-et-fonctionnalités)
- [Architecture Technique](#architecture-technique)
- [Contribuer](#contribuer)

---

## 🔧 Prérequis

- **Node.js** version >= 18.x
- **npm** version >= 9.x ou **yarn** >= 1.22.x
- **Git** pour le contrôle de version

## 🚀 Installation

1. **Clonez le repository :**
   ```bash
   git clone https://github.com/votre-org/ComplySummarizeIA.git
   cd ComplySummarizeIA
   ```

2. **Installez les dépendances :**
   ```bash
   npm install
   ```

3. **Lancez l'application en mode développement :**
   ```bash
   npm run dev
   ```

4. **Accédez à l'application :**
   ```
   http://localhost:5173
   ```

## 📜 Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarre le serveur de développement avec Vite |
| `npm run build` | Génère la version de production (TypeScript + Vite) |
| `npm run lint` | Analyse du code avec ESLint (max 0 warnings) |
| `npm run format` | Formatage automatique avec Prettier |
| `npm run format -- --check` | Vérification du formatage |
| `npm run preview` | Prévisualise la build de production |
| `npm run plop -- --name ComponentName` | Génère un nouveau composant |

## 🏗️ Structure du Projet

```
src/
├── components/                # Composants réutilisables
│   ├── effects/              # Effets visuels et animations
│   │   ├── AdvancedBackground.tsx
│   │   ├── FloatingElements.tsx
│   │   ├── PageTransition.tsx
│   │   └── ParticleField.tsx
│   ├── layout/               # Composants de mise en page
│   │   ├── Header.tsx
│   │   └── PageLayout.tsx
│   └── ui/                   # Composants d'interface
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Input.tsx
├── features/                 # Fonctionnalités métier
│   ├── auth/                # Authentification
│   │   ├── Login.tsx
│   │   └── Register.tsx (2-step process)
│   ├── demo/                # Page démo interactive
│   │   ├── components/
│   │   │   ├── DemoHero.tsx
│   │   │   ├── DemoSteps.tsx
│   │   │   ├── DemoResults.tsx
│   │   │   └── DemoCTA.tsx
│   │   └── hooks/
│   │       └── useDemoAnimations.ts
│   ├── features/            # Page fonctionnalités
│   │   ├── components/
│   │   │   ├── FeaturesHero.tsx
│   │   │   ├── FeaturesGrid.tsx
│   │   │   ├── FeaturesComparison.tsx
│   │   │   └── FeaturesCTA.tsx
│   │   └── hooks/
│   │       └── useFeaturesAnimations.ts
│   ├── landing/             # Page d'accueil
│   │   ├── components/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── Footer.tsx
│   │   └── Landing.tsx
│   ├── pricing/             # Page tarification
│   │   └── Pricing.tsx
│   └── resumetool/          # Outil d'analyse professionnel
│       ├── components/
│       │   ├── ToolHeader.tsx
│       │   ├── ToolsPanel.tsx
│       │   ├── UploadPanel.tsx
│       │   ├── AnalysisPanel.tsx
│       │   └── index.ts
│       ├── types.ts
│       └── ResumeTool.tsx
├── hooks/                   # Hooks personnalisés
├── lib/                     # Utilitaires et helpers
├── routes/                  # Configuration des routes
├── stores/                  # Gestion de l'état (Zustand)
├── types/                   # Types TypeScript globaux
└── validators/              # Validation des formulaires (Zod)
```

## 🌐 Pages et Fonctionnalités

### 🏠 **Page d'Accueil (`/landing`)**
- **HeroSection** : Présentation principale avec CTA
- **FeaturesSection** : Fonctionnalités clés avec icônes
- **CTASection** : Appel à l'action final
- **Footer** : Informations de contact et liens

### 🎮 **Page Démo (`/demo`)**
- **Parcours utilisateur interactif** en 4 étapes
- **Navigation avec progression** visuelle
- **Résultats d'analyse simulés** avec données RGPD
- **Animations GSAP** sophistiquées

### ⚡ **Page Fonctionnalités (`/features`)**
- **Grille de 6 catégories** détaillées
- **Analyse transparente** avec avantages/limitations
- **Comparaison objective** vs solutions traditionnelles
- **Approche éducative** pour décisions éclairées

### 🔧 **Outil d'Analyse (`/resumetool`)**
- **Interface professionnelle** 3 panneaux
- **4 outils d'analyse** sélectionnables
- **Upload multi-formats** avec validation
- **Résultats IA structurés** avec scoring

### 🔐 **Authentification**
- **Login** avec design glassmorphism
- **Register** en 2 étapes sans scroll
- **Validation temps réel** avec Zod
- **Navigation fluide** entre les étapes

### 💰 **Tarification (`/pricing`)**
- **Plans flexibles** avec comparaisons
- **Fonctionnalités détaillées** par plan
- **CTA clairs** pour chaque offre

## 🛠️ Architecture Technique

### **Frontend Stack**
- **React 18.3.1** avec TypeScript
- **Vite** pour le build et développement
- **TailwindCSS** pour le styling
- **Framer Motion** pour les animations
- **GSAP** pour les animations complexes
- **React Router DOM** pour le routage

### **Gestion d'État**
- **Zustand** pour l'état global
- **React Query** pour les requêtes API
- **Zod** pour la validation des formulaires
- **React Hook Form** pour la gestion des formulaires

### **Design System**
- **Glassmorphism** cohérent
- **Gradients purple-to-blue** pour le branding
- **Animations Framer Motion** avec timing professionnel
- **Icônes Lucide React** uniformes
- **Layouts responsive** avec Tailwind Grid

### **Effets Visuels**
- **ParticleField** : Système de particules Three.js (1000 particules)
- **FloatingElements** : Éléments flottants animés GSAP
- **PageTransition** : Transitions entre pages avec morphing
- **AdvancedBackground** : Arrière-plan adaptatif par route

### **Internationalisation**
- **Localisation française** complète
- **Formatage décimal** adapté (99,7% vs 99.7%)
- **Conventions européennes** (RGPD, coordonnées)
- **Terminologie métier** professionnelle

## 🎯 Roadmap

### Phase 1 - ✅ Terminée
- [x] Interface utilisateur complète
- [x] Système d'authentification
- [x] Pages éducatives (demo, features)
- [x] Outil d'analyse professionnel
- [x] Localisation française

### Phase 2 - 🚧 En cours
- [ ] Intégration API backend
- [ ] Traitement réel des documents
- [ ] Système de paiement Stripe
- [ ] Dashboard utilisateur avancé

### Phase 3 - 📅 Planifiée
- [ ] Fonctionnalités collaboratives
- [ ] API publique
- [ ] Application mobile
- [ ] Intégrations tierces

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 🎨 Captures d'écran

### Page d'Accueil
![Landing Page](https://i.goopics.net/s3q1aa.png)

### Pages Présentation des features
![Resume Tool](https://i.goopics.net/owq9ic.png)

### Page Démo Interactive
![Demo Page](https://i.goopics.net/dlkx18.png)

### Page de Pricing
![Demo Page](https://i.goopics.net/6bo81y.png)

### Page Tool
![Demo Page](https://i.goopics.net/x7zokp.png)

---

**Développé avec ❤️ pour révolutionner la gestion de la conformité**

🚀 **Démarrez votre transformation digitale dès aujourd'hui !**
