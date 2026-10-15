# Asymétrie · Suivi d'entraînement — v2.1 (programme v6)

Application de suivi d'entraînement à domicile (kit de 2 barres de 2 kg, 4 disques de 2 kg,
8 disques de 1 kg, un banc), avec correction de l'asymétrie gauche / droite.
Programme v6, identique au PDF validé : 3 séances de 57 à 59 min, corps entier, hypertrophie.

Données 100 % locales : aucun serveur, aucun compte, aucun traçage.

---

## Mettre à jour le dépôt GitHub

Remplace ces fichiers à la racine du dépôt :

- `index.html`
- `sw.js` (version de cache `asym-v2.1.0` : c'est elle qui fait télécharger la nouvelle version au téléphone)
- `manifest.webmanifest`
- `README.md`

Les icônes ne changent pas. Sur le téléphone : Réglages › Rechercher une mise à jour.

**Ton historique est conservé.** Chaque ancienne séance est relue avec le programme de son époque
(v2, v3, v4 ou v5), car les identifiants des exercices avaient changé de sens d'une version à l'autre.
Les anciennes séances équivalentes (rowing, Romanian Deadlift, Bulgarian, élévations…) apparaissent
dans les courbes des exercices v6. Une séance en cours dans l'ancienne version est archivée dans
l'historique avec ses séries validées. L'inventaire par défaut des anciennes versions (8 × 2 kg) est
remplacé par ton vrai kit (4 × 2 kg + 8 × 1 kg).

---

## Le programme v6

| Séance | Contenu | Exercices · séries | Changements de disques | Durée | Express |
|---|---|---|---|---|---|
| 1 | Push + Quadriceps | 7 · 18 | 2 | ~57 min | 2 ex. · ~20 min |
| 2 | Pull + Ischio-jambiers + Avant-bras | 7 · 19 | 2 | ~58 min | 2 ex. · ~21 min |
| 3 | Jambes + Dos + Bras | 7 · 18 | 2 | ~59 min | 2 ex. · ~23 min |

Échauffement de 6 min avant de lancer la séance, non compté.

## Nouveautés de la v2.1

**Pendant un appel ou hors de l'application**
- Le repos continue en temps réel. Au retour, il affiche le temps qui reste, ou « Repos terminé depuis… ».
- Le chronomètre de séance se met en pause : seul le temps passé dans l'application compte.
- Si le téléphone ferme l'application, elle rouvre la séance toute seule, là où tu étais (repos compris),
  si tu reviens dans les 2 heures. Au-delà, l'accueil propose « Reprendre ».

**Son**
- Bips aigus et carrés, à volume maximal (4 fois l'amplitude d'avant), faits pour passer par-dessus la musique :
  3 bips avant la fin du repos, puis une double alarme et une vibration.
- Les bips sont programmés à l'avance dans le moteur audio, pour sonner à l'heure même si le navigateur
  ralentit la page.
- Réglages › Son : curseur de volume et bouton « Tester le son ».
- Limite : le son suit le volume multimédia du téléphone ; l'application ne peut pas le dépasser.

**Barre de repos**
- Nom complet de ce qui suit (plus de troncature), charge et cible, et l'annonce du changement de disques.
- La barre est placée au-dessus des boutons : « Exercice suivant » reste accessible pendant le repos.

**Bouton ⓘ** (en haut pendant la séance) : la liste des exercices de la séance, noms seulement,
dans l'ordre du PDF (1, 2, 3, A1, A2…). En mode express, uniquement les exercices express.

**Blocs enchaînés** : écran par tours (A1, A2, repos). Pas de repos entre A1 et A2 ; repos du bloc après A2 ;
le dernier tour ne contient que l'exercice restant. Bouton « Faire séparément » si besoin.

**Réglages**
- Séries par exercice (par exemple le curl pupitre de 2 à 3) : durées et volume recalculés.
- Durées recalées sur ton rythme réel après 2 séances (médiane des 6 dernières).
- Charges impaires (prise décalée) dans les configurations et le calculateur de disques.
- Leg curl à une jambe : proposé automatiquement à 15 répétitions sur toutes les séries.

## Progression

- **Deux haltères** (fourchette, ex. 8-12) : la charge monte quand le haut est atteint sur toutes les séries.
- **Unilatéral** (ex. 12 G / 10 D) : minimum 10 G / 8 D ; la charge monte quand gauche ET droite atteignent leur cible.
- **Haltère partagée** : on la monte quand tous ses exercices sont prêts.
- **Leg curl** : à 15 partout, passage à une jambe. **Crunch** : à 15 partout, pause de 2 s en haut.
- Après un changement de charge, l'application ne propose rien de nouveau tant qu'une séance n'a pas été faite à la nouvelle charge.

## Asymétrie

Toutes les 2 semaines, la 1re série de chaque exercice prioritaire devient une série test : même charge
des deux côtés, gauche d'abord, maximum de répétitions propres. Écart = (droite − gauche) / moyenne.

## Tes données

Stockées uniquement sur ton téléphone. Désinstaller l'application ou effacer les données de Chrome
supprime l'historique : exporte le JSON régulièrement (Réglages › Sauvegarde).
