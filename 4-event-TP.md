## Exercice : Todo-list
Soit la page HTML suivante :
```html
<html>
	<head>
		<title>TODO LIST</title>
	</head>
	<body>
		<h1>Liste des choses à faire</h1>
		<label for="item">Entrez un élément pour la liste</label>
		<input type="text" id="item" name="item" />
		<button id="bouton">Ajouter</button>
	</body>
</html>
```
### 1. Au démarrage de la page
Au chargement de la page, on ajoute au DOM une liste non-ordonnée sans aucun élément.

### 2. Ajout d'un élément
Chaque fois qu'on clique sur le bouton, on récupère le texte qui a été entré et on le transforme en un élément de la liste.

### 3. Barrer un élément
Quand on clique sur un élément de la liste, son style est modifié pour que le texte apparaisse barré.

### 4. Supprimer un élément
Quand on double-clique sur un élément de la liste, l'élément est supprimé de la liste.

### 5. Vérifier le texte entré
Quand on clique sur le bouton, avant de l'ajouter dans la liste, on vérifie si ce n'est pas une chaîne de caractère vide.

Si c'est une chaîne vide, on notifie l'utilisateur dans une nouvelle `<div>` où on affichera le texte "Attention : vous avez entré du texte vide, il n'a pas été ajouté à la liste".

Dès que l'utilisateur rerentre un texte qui est correct, on enlève cette phrase.

### 6. Vider la liste
On va maintenant ajouter dans le HTML un nouveau bouton qui quand on clique dessus, tous les éléments de la liste sont supprimés.

### 7. Transformer la liste en liste numérotée
On décide maintenant qu'au chargement de la page, il y a une chance sur deux que la liste soit une liste numérotée.

### 8. Changer le style
Quand on survole un élément de la liste, sa couleur change.

### 9. Envelopper dans une div
On a finalement décider que l'on préfèrerait que l'input et le bouton soit enveloppé d'une liste, mais on n'a pas envie de modifier directement le HTML.

Ecrire en JS du code qui enveloppe ces éléments dans un nouveau noeud div.

### 10. Une deuxième liste pour les tâches faites
On dit maintenant que si on a double-cliqué sur un élément, cela veut dire que la tâche a été effectuée. Cependant, on veut quand même pouvoir jeter un oeil à ce qu'on a accompli.

Compléter le code pour que quand on double clique sur un élément il disparait de la liste initiale, mais apparaît dans une deuxième liste qui aura été créée au chargement de la page.

### 11. La liste poubelle
Une élément de la liste est envoyé à la poubelle quand on a cliqué une fois dessus. Pour pouvoir récupérer ces éléments supprimés, on va faire une troisième liste pour les récupérer.

Quand on clique sur un élément de la poubelle, elle réapparaît dans la liste initiale.