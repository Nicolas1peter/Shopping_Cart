# Shopping_Cart
Le but de reddux ici est de gerer l'état en donnant à nos composants l'état dont il a besoin via un store central.
Redux stocke tout l'état de notre application dans une arborescence d'objets immuable.
je vais utiliser cette particulariter pour simuler un site de vente de jeux video,
ou on pourra ajouter supprimer des products au magasin.

Step 1:

Generer nouveau projet react avec un template typescript avec: "npx create-react-app shopping-cart --template typescript"

il faut ensuite installer les paquets manquant, je veux gerer la state aved reddux donc j'install reddux avec: "npm install @reduxjs/toolkit" ainsi que: "npm install react-redux @types/react-redux"

Step 2:

créer un components ProductsList ou on mettra une array avec tous les jeux a vendre. j'ai ensuite fait un form pour ajouter des jeux dans l'array.
apres cela il fallait les relié avec un "store" avec reddux qui a besoin d'un reducteur comme argument,
un reducteur c'est une fonction pure qui recoit l'ancien état de la state et une action comme argument il va donc falloir faire notre reducteur et notre store

Step3:

ensuite j'ai du faire un reduc slice pour remplacer le form, pour ensuite connecter react avec le reddux store avec useselector
il fallait ensuite faire la traitement du form (pour qu'il marche que se soit pas just envoyer dans l'url),
puis faire le gestionnaire d'envoie de formulaire, pour qu'il mettent a jour l'état du state
nous avons donc un formulaire avec reddux pour ajouter et modifier dans la state, ainsi je peux ajouter des nouveau jeux sur l'array en react

Step4:

maintenant que je peux ajouter je devrais aussi supprimer pour se faire,
on faire a peux pres la meme chose que pour add mais on utilise l'id pour le payload pour savoir lequel supprimé.


Conclusion:

Lors de cet experience j'ai appris a utiliser reddux pour créer un store une sorte d'arbre de state qui fonctionne grace a un reducteur pour gerer les actions de add et remove
sans que ca n'atteigne le store puisque le store est changé par le reducteur.

