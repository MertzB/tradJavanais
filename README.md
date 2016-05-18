# tradJavanais
## Utilisation
tradJavanais accepte deux argument, la langue de destination: -fr ou -jv et la phrase à traduire.

Exemple d'utilisation : 
```
node index.js -fr "bonjour"
node index.js -jv "bavonjavour" 
node index.js --test //réalise un test avec un dictionnaire intégré de 378989 mots
```
## Test unitaires
Les tests sont réalisés avec mocha & chai, de manière à lancer les tests veuillez saisir la commande 
```
npm test
```
à la racine du projet
## Doc 
La commande
```
npm doc
```
réalise la documentation associée au projet dans le dossier 'doc'.