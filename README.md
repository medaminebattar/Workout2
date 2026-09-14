# Asymétrie · Suivi d'entraînement

Application de suivi d'entraînement à domicile, conçue pour un kit de 20 kg
(2 barres + 16 kg de disques + banc) avec correction d'asymétrie gauche/droite.

Programme basé sur l'**ACSM Position Stand 2026** (Currier B.S. et al.,
*Med. Sci. Sports Exerc.*, 58(4), 851-872).

---

## Déploiement sur GitHub Pages

### 1. Créer le dépôt

Sur github.com → **New repository**

- Nom : `asymetrie` (ou ce que tu veux)
- Visibilité : **Public** (obligatoire pour GitHub Pages en compte gratuit)
- Ne coche pas « Add a README »

### 2. Envoyer les fichiers

**Option A — par l'interface web (la plus simple)**

1. Sur la page du dépôt → **uploading an existing file**
2. Glisse `index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll` et le dossier `icons/`
3. **Commit changes**

**Option B — en ligne de commande**

```bash
git init
git add .
git commit -m "Application de suivi d'entraînement"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/asymetrie.git
git push -u origin main
```

### 3. Activer Pages

Dépôt → **Settings** → **Pages** (menu de gauche)

- **Source** : `Deploy from a branch`
- **Branch** : `main` · dossier `/ (root)`
- **Save**

Attends 1 à 2 minutes. L'adresse s'affiche en haut de la page :

```
https://TON-PSEUDO.github.io/asymetrie/
```

### 4. Installer sur Android

1. Ouvre cette adresse dans **Chrome** sur ton téléphone
2. Menu **⋮** → **Ajouter à l'écran d'accueil** (ou **Installer l'application**)
3. L'icône apparaît sur ton écran d'accueil

L'application s'ouvre alors en plein écran, sans barre de navigateur,
et fonctionne **entièrement hors ligne** une fois le premier chargement effectué.

---

## Vérifier que tout fonctionne

Dans l'app → **Réglages** → carte **Application** :

| Indicateur | Signification |
|---|---|
| `✓ Installée` | Lancée depuis l'écran d'accueil |
| `Hors ligne : actif ✓` | Le service worker est en place, l'app marche sans réseau |

Test réel : active le mode avion et relance l'application. Elle doit se lancer normalement.

---

## Mettre à jour l'application

1. Modifie `index.html` dans le dépôt
2. **Incrémente `CACHE_VERSION` dans `sw.js`** (ex. `asym-v1.0.0` → `asym-v1.0.1`)

   Cette étape est indispensable, sinon les téléphones garderont l'ancienne version en cache.
3. Dans l'app : **Réglages** → **Rechercher une mise à jour**

---

## Tes données

- Stockées **uniquement** sur ton téléphone (`localStorage` du domaine GitHub Pages)
- Jamais envoyées sur un serveur, aucun compte, aucun traçage
- Le dépôt public ne contient que le code de l'app, **pas tes séances**

**Sauvegarde :** Réglages → **Exporter (.json)**. Fais-le régulièrement.
Le fichier est lisible et réimportable à tout moment.

⚠️ Désinstaller l'app ou effacer les données de Chrome supprime l'historique.
L'export est ta seule sauvegarde.

---

## Contenu du dépôt

```
index.html                  Application complète (HTML + CSS + JS, sans dépendance)
manifest.webmanifest        Métadonnées PWA (nom, icônes, raccourcis)
sw.js                       Service worker — cache hors ligne
.nojekyll                   Désactive le traitement Jekyll de GitHub Pages
icon-192.png                Icône Android
icon-512.png                Icône haute résolution
icon-maskable-512.png       Icône adaptative (formes Android)
apple-touch-icon.png        Icône iOS
favicon-32.png              Favicon navigateur
```

Tous les fichiers sont à la **racine** du dépôt — aucun sous-dossier à créer.

Aucune bibliothèque externe, aucun CDN, aucune connexion réseau requise après installation.

---

## Fonctionnalités

**Pendant la séance**
- Configuration de disques affichée avant chaque exercice, avec alerte au changement
- Combinaison exacte de disques calculée à partir de ton inventaire réel
- Saisie séparée gauche / droite sur les exercices unilatéraux
- Chronomètre de repos automatique (vibration + bip)
- Minuteur intégré pour les tenues : gainage, Farmer Hold, Superman
- Écran maintenu allumé pendant l'entraînement
- Reprise automatique si la séance est interrompue
- Mode express : première configuration uniquement, ~12 min
- Alerte record personnel

**Suivi**
- Écart gauche / droite par exercice, avec courbe d'évolution et conseil automatique
- Tonnage, charge record et progression par exercice
- Volume hebdomadaire réalisé vs cible ACSM par groupe musculaire
- Historique filtrable par séance
- Suggestion de progression automatique (double progression)

**Outils**
- Calculateur de disques : charge visée → combinaison à monter
- Inventaire de disques et poids de barre configurables
- Export JSON (sauvegarde) et CSV (tableur)

---

## Le programme

| Séance | Contenu | Exercices | Configurations | Durée |
|---|---|---|---|---|
| 1 | Push + Quadriceps | 6 | 3 (4 → 10 → 6 kg) | ~41 min |
| 2 | Pull + Chaîne postérieure + Grip | 7 | 3 | ~42 min |
| 3 | Jambes + Dos + Bras | 7 | 2 | ~45 min |

À faire dans l'ordre, avec au moins 48 h entre deux séances.
Aucun jour fixe imposé.

**Principes appliqués :** exercice prioritaire gauche en début de séance,
excentrique 4 s côté gauche, 9 séries hebdomadaires pour les groupes majeurs,
pas d'entraînement à l'échec, regroupement des exercices par charge identique
(4 changements de disques pour toute la semaine).

**Aucun superset.** Chaque exercice se fait en entier avant de passer au suivant.
Repos de 90 s sur les mouvements lourds, 60 s partout ailleurs.

**Progression (double progression).** L'application affiche à chaque exercice l'une de
quatre consignes, calculée sur ta dernière séance : *Garder la charge*, *Continuer*,
*Progresser* ou *Kit saturé*. Sur les exercices unilatéraux, c'est le côté gauche qui
décide — la charge ne monte jamais tant qu'il n'a pas atteint sa cible.
