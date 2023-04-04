# Shopping_Cart


Le but de reddux ici est de gérer l'état en donnant à nos composants l'état dont il a besoin via un store central.


Redux stocke tout l'état de notre application dans une arborescence d'objets immuable.


Je vais utiliser cette particularité pour simuler un site de vente de jeux video,


ou on pourra ajouter supprimer des products au magasin.



Step 1:



Générer un nouveau projet react avec un template TypeScript avec : "npx create-react-app shopping-cart --template typescript"



il faut ensuite installer les paquets manquant, je veux gérer la state avec reddux donc j'installe reddux avec : "npm install @reduxjs/toolkit" ainsi que : "npm install react-redux @types/react-redux"



Step 2:



Créer un component ProductsList ou on mettra une array avec tous les jeux a vendre. J'ai ensuite fait un form pour ajouter des jeux dans l'array.


Après cela, il fallait les relier avec un "store" avec reddux qui a besoin d'un réducteur comme argument,


Un réducteur, c'est une fonction pure qui reçoit l'ancien état de la state et une action comme argument, il va donc falloir faire notre réducteur et notre store



Step 3:



Ensuite, j'ai dû faire un reduc slice pour remplacer le form, pour ensuite connecter react avec le reddux store avec useselector


Il fallait ensuite faire le traitement du form (pour qu'il marche que ce ne soit pas juste envoyer dans l'url),


Puis faire le gestionnaire d'envoi de formulaire, pour qu'ils mettent à jour l'état du state


Nous avons donc un formulaire avec reddux pour ajouter et modifier dans la state, ainsi je peux ajouter des nouveaux jeux sur l'array en react



Step 4:



Maintenant, que je peux ajouter, je devrais aussi supprimer pour ce faire.


On faire a peux près la même chose que pour add, mais on utilise l'id pour le payload pour savoir lequel supprimé.




Conclusion :



Lors de cette expérience, j'ai appris à utiliser reddux pour créer un store une sorte d'arbre de state qui fonctionne grâce a un réducteur pour gérer les actions de add et remove


Sans que ça n'atteigne le store puisque le store est changé par le réducteur.
