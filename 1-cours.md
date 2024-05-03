lydia.rodriguez-de-la-nava@lecnam.net 

https://github.com/Lydiaronava/USAL34/


## C'est quoi le HTML ?

> [!definition] HTML = *HyperText Markup Language*
> - langage structuré et hiérarchique ;
> - *markup* = balise $\to$ c'est un langage __balisé__ ;
> - utiliser pour définir la structure d'une page web


D'autres exemples de langages balisés et hiérarchiques :
- *SVG* : pour faire des dessins ;
- *MusicXML* : pour faire une partition de musique ;
- vous pouvez même créer votre propre langage XML !

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

```XML
<contact>
	<ami>
		<nom>Dupont</nom>
		<prénom>Jean</prénom>
		<adresse>
			<rue>17 allée du Soleil</rue>
			<ville>Paris</ville>
			<code-postal>75000</code-postal>
		</adresse>
	</ami>
	<ami>
		<nom>Pontdu</nom>
		<prénom>Naej</prénom>
	</ami>
</contact>
```


On peut représenter les langages hiérarchiques sous forme d'arbre :


![[xml-schema.excalidraw|{width=100%}]]



<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

## Syntaxe du HTML

### Anatomie d'une balise

> [!definition]
> Un élément HTML est composé de :
> - une balise ouvrante ;
> - une balise fermante ;
> - du contenu ;
> - optionnellement, des attributs.

Par exemple :
```html
<h1 id="titre1">Mon gros titre</h1>
```
- `<h1>`: la balise ouvrante ;
- `id="titre1"`: un attribut ;
- "Mon gros titre" : le contenu ;
- `</h1>`: la balise fermante.

### Cas particulier : la balise auto-fermante

Parfois, une balise n'a jamais besoin d'avoir de contenu.

Dans ce cas, pour alléger la notation, la balise n'a pas de balise fermante correspondante.

On la note : `<balise />`

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

## Structure du document HTML

Un fichier HTML commence toujours par une balise `<html>` et finit toujours par une balise `</html>`.

À l'intérieur, on doit toujours retrouver deux éléments :

- l'élément `<head>` : cette partie contient l'information à propos de la page,  des __métadonnées__, c'est-à-dire des données qui servent à la page mais qu'on ne voit pas sur la page. Par exemple :
	- l'élément `<title>`: le titre de la page n'est pas affiché sur la page. C'est néanmoins le titre qui est affiché sur l'onglet sur votre navigateur ou sur le moteur de recherche par exemple ;
	- l'élément `<meta>`: par exemple cet extrait précise que c'est une page avec du texte HTML encodée en UTF-8 :
```html 
<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
```

 
- l'élément `<body>`: le corps de la page, c'est là qu'on définit la structure de ce qu'on voit sur le navigateur


Une page HTML doit au moins ressembler à quelque chose comme ça :
```html
<html>
	<head>
		<title>Le titre de ma page</title>
		<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	</head>
	<body>
		Ce que j'écris ici s'affiche sur le navigateur !
	</body>
</html>
```

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

## Les éléments classiques

### La division

> [!definition] La balise `<div>`
> C'est un conteneur générique d'un fichier HTML. On l'utilise pour grouper les éléments qu'on estime font partie d'un tout.



### Les titres et sous-titres

On définit un titre avec la balise `<h1>`, c'est le titre de plus haut niveau en HTML.

Pour les sous-titres, on utilise les éléments `<h2>`, `<h3>`, `<h4>`, `<h5>`, et `<h6>`.

Par exemple :

```html
<h1> I) Mon premier titre de haut niveau </h1>
<h2> I.1) Mon premier sous-titre </h2>
<h3> I.1 a) Mon premier sous-sous-titre </h3>
<h3> I.1 b) Mon deuxième sous-sous-titre </h3>
<h2> I.2) Mon deuxième sous-titre </h2>
<h1> II) Mon deuxième titre de haut niveau </h1>
```

rend

![[titres.png|{width=100%}]]



### Les paragraphes

```html
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut neque ut mauris facilisis sollicitudin. Curabitur turpis velit, interdum eu vehicula eu, tincidunt et risus. Suspendisse eget mattis nunc.</p>

<p> Nunc molestie neque id purus accumsan, in fermentum sapien ultrices. Vestibulum ante orci, faucibus vitae libero in, bibendum maximus eros. Phasellus viverra nisl ut libero volutpat sodales. Aliquam volutpat, lacus id suscipit imperdiet, velit eros accumsan eros, et rhoncus metus massa a dui. </p>
```

rend

![[paragraphes.png]]


### Inclure une image

> [!important]
> - l'attribut `src`: il faut absolument que cet attribut soit présent ! Il contient le chemin de votre image sur votre ordinateur, ou l'adresse de l'image ;
> - l'attribut `alt`: cet attribut est facultatif, il contient le descriptif de l'image pour les personnes malvoyantes. Ce texte est aussi affiché quand le navigateur n'arrive pas à charger l'image;
> - c'est une balise auto-fermante !


Par exemple
```html
<h1>Regardez ce chien ! </h1>
<img src="./images/chiens.jpeg" alt="Un chien blanc, assis dans un jardin, regarde la caméra" />
```

rend 

![[chien-rendu.png]]

> [!tip] Remarque
> On parlera plus en détail d'accessibilité au prochain cours !



### Les liens

> [!definition] Liens cliquables `<a>`
> - il faut obligatoirement définir l'attribut `href`qui contient le lien ;
> - le contenu de l'élément définit le texte cliquable qui sera affiché ;
> - par défaut, le lien s'affiche en texte bleu souligné.

```html
<a href="lecnam.net/">lecnam.net</a>
```
![[lien2.png]]
ou

![[lien1.png]]
```html
<a href="lecnam.net/">Cliquez ici pour aller sur le site du CNAM.</a>
```

### Les listes

#### La liste non-ordonnée : `<ul>`

> [!definition] `<ul>`: unordered list
> Crée une liste non-numérotée.

Ça ressemble à quelque chose comme ça :
![[ul.png]]
#### La liste ordonnée : `<ol>`

> [!definition] `<ol>`: ordered list
> Crée une liste numérotée.

Ça ressemble à quelque chose comme ça :
![[ol.png]]

#### Les éléments d'une liste : `<li>`

> [!definition] `<li>`= list item
> Cette balise définit le contenu d'une liste, qu'elle soit ordonnée ou pas.

Exemples :
La liste ordonnée :
```html
<ol>
  <li>premier item</li>
  <li>deuxième item</li>
  <li>troisième item</li>
</ol>
```

La liste non-ordonnée :
```html
<ul>
  <li>premier item</li>
  <li>deuxième item</li>
  <li>troisième item</li>
</ul>
```

#### Les listes imbriquées
On peut mettre une liste dans une liste (cf. le TP).

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

## Les tables

> [!definition] On crée un tableau avec la balise `<table>`
> - `<caption>`: la légende du tableau ;
> - `<thead>`(*table head*) : dedans on liste le titre des colonnes ;
> - `<tbody>`(*table body*) : contient le reste du tableau ;
> - `<th>`(*table header*) : définit le nom d'une colonne ou d'une ligne ;
> - `<tr>`(*table row*) : contient les cases d'une ligne ;
> - `<td>`(*table data*) : le contenu d'une case ;
> - `<tfoot>`(*table foot*) : si on veut mettre à part le bas du tableau on peut utiliser cette balise.

```html
<table>
  <caption>
    Types de curcubitacées
  </caption>
  <thead>
    <tr>
      <th>Nom de la courge</th>
      <th>Couleur</th>
      <th>Saison</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Courgette</td>
      <td>Vert ou jaune</td>
      <td>Été</td>
    </tr>
    <tr>
      <td>Citrouille</td>
      <td>Orange</td>
      <td>Automne</td>
    </tr>
    <tr>
      <td>Concombre</td>
      <td>Vert</td>
      <td>Printemps/Été</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th colspan="3">le bas du tableau</th>
    </tr>
  </tfoot>
</table>
```

rend 

![[table-cours.png]]

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

### Les tableaux imbriquées
Un peu comme les listes, une case d'un tableau peut être un tableau (cf. TP).

### Les formulaires

> [!definition]
> Un formulaire est une partie d'un document dans lequel l'utilisateur peut entrer des informations, ou choisir parmi un choix d'options.
> Elle est créée avec la balise `<form>`, et (au moins) les attributs suivants :
> - l'attribut `action`: contient un lien vers lequel on sera redirigé quand on aura envoyé le formulaire. Si l'attribut est vide (ie `action=""`), on reste sur la même page ;
> - l'attribut `method`: contient la méthode par laquelle les données du formulaire sont envoyées au serveur (*get* ou *post*) (on en reparlera pour de vrai dans la partie PHP du cours).

#### La balise `<input>`
Voir https://developer.mozilla.org/fr/docs/Web/HTML/Element/input

#### La balise `<select>`
> [!definition] Choisir une option
> La balise `<select>`crée un menu déroulant dans lequel on peut sélectionner une (ou plusieurs) options.

```html
<select>
  <option value="">--Choisissez votre légume préféré--</option>
  <option value="carotte">Carotte</option>
  <option value="chou">Chou</option>
  <option value="navet">Navet</option>
  <option value="epinard">Épinard</option>
  <option value="asperge">Asperge</option>
  <option value="radis">Radis</option>
</select>

```

