# TP3 : Exercice sur JavaScript

## Exercice 1 : une page web à envoyer à quelqu'un que vous n'aimez pas

Vous disposez d'un fichier HTML `ennemi.html` qui contient un bouton qui appelle une fonction `bouger()` quand on clique dessus.

Vous devez créer un fichier `ennemi.js` où vous définirez une fonction `bouger` qui ne prend aucun argument, et qui modifie aléatoirement la position du bouton.

Pour obtenir une valeur aléatoire, vous devrez utilisez :
```js
var t = Math.ceil(Math.random()*(taille_max));
```
sachant qu'on peut récupérer la largeur d'une page avec `window.innerWidth`, et sa hauteur avec `window.innerHeight`.

## Exercice 2 : une table de 2

Vous disposez du fichier HTML `table-de-2.html` dans lequel il y a une `div` et un bouton. Lors du chargement de la page, la fonction `creer_table()` est appelée, et quand on clique sur le bouton, la fonction `donner_style()` est appelée.

Créez un fichier `table-de-2.js`.

1) Écrivez la fonction `creer_table` qui ne prend aucun argument et qui écrit la table de 2 dans la `<div>` dont l'`id` est "contenu". Pour ce faire, inspirez-vous de l'exemple du cours : [[3-basics-javascript#Changer le contenu d'un élément]].
2) Écrivez la fonction `donner_style` qui ne prend aucun argument, et qui récupère tous les éléments dont la balise est `<td>` pour modifier leur style (pour que le tableau ait des bordures par exemple.)

## Exercice bonus : économiser du temps

Reprenons le tableau de l'exercice 5 du TP1 :
![[table-calendrier.png]]
Vous vous souvenez sûrement d'à quel point c'était pénible d'écrire tous les `<tr>`, `<td>`  et `<th>`, et sûrement vous vous êtes dit qu'on pourrait automatiser tout ça au lieu de faire des copier/coller...

Le but de cet exercice est donc de réfléchir à la façon la plus optimisée de refaire ce tableau, en utilisant les méthodes qu'on a vu dans le cours et l'exercice précédent.

Fichiers à créer : `tableau-auto.js` et `tableau-auto.html`.

