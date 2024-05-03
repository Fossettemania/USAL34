
# TP1

Comme on l'a discuté plus tôt, une page HTML est simplement un fichier texte dont l'extension est `.html`. Vous êtes donc libres de choisir l'éditeur de texte de votre choix. Il est conseillé néanmoins que votre éditeur de texte ait bien la coloration syntaxique (ou *syntax highlighting* en anglais) pour la plupart des langages. Si vous n'avez pas d'éditeur préféré, n'hésitez pas à demander !

Pour chaque sujet de TP, créez un répertoire qui s'appelle `TPx` où vous remplacerez `x` par le numéro de TP actuel. Il faudra m'envoyer par mail à la fin de chaque TP, soit votre travail directement, ou un lien vers le git où vous gardez votre travail.

Pour afficher la page HTML, vous avez besoin d'utiliser n'importe quel navigateur. Normalement, pour faire proprement, on lance un serveur HTTP local sur notre machine et on fait une requête au serveur pour qu'il affiche la page. Néanmoins, pour l'UE actuelle on n'a pas besoin de s'embêter avec ça, on en reparlera pendant l'UE de PHP.

Pour visualiser le rendu du HTML, on utilise donc le pseudo-protocole `file`, vous avez deux choix :
- dans le navigateur, tapez : `file:///chemin/absolu/vers/ma/page.html`
- ou bien, faites un clic droit sur le fichier dans l'explorateur de fichier, et faites "ouvrir avec" -> votre navigateur.



## Exercice 1 : rappels
Quelques questions pour tester votre mémoire avant de commencer à écrire du HTML : 
1) Quelles sont les balises qui sont indispensables pour une page HTML ?
2) Quel genre de données retrouve-t-on dans la balise `head`? Et dans la balise `body`?
3) On a parlé de la balise `title`, où est-ce qu'on retrouvera ce titre dans le rendu de la page HTML dans le navigateur ?
4) Donner le nom des quatre parties de cet extrait HTML :
![[html-elem.excalidraw]]
5) Quels sont les deux types de listes qu'on peut écrire en HTML ?
6) Quelle est la particularité de la ligne suivante ?
```html
<img src="mon-image.png" alt="Mon image préférée" />
```

Fichier à créer : `ex1.txt`

## Exercice 2 : votre première page HTML
On va commencer par commencer une sorte de page d'accueil que vous pourrez personnaliser à votre guise. Vous pouvez créer cette page à partir du fichier `annexe.html`et le compléter, ou du moins vous en inspirer pour ne rien oublier.

Votre page présentera, dans l'ordre :
- la balise `h1` avec le titre "Index HTML de *votre nom*" ;
- une image de votre choix ;
- une division dans laquelle on listera (liste numérotée) les liens utiles suivant :
	- le lien du git de ce cours, avec comme contenu "Supports de cours" ;
	- le lien du site du cnam, avec comme contenu "CNAM" ;
	- le lien vers votre propre git, avec comme contenu le lien de votre git ;
	- le lien vers la documentation HTML https://developer.mozilla.org/fr/docs/Web/HTML/Reference, avec comme contenu "Documentation HTML" ;
- une autre division où vous listerez tous les fichiers HTML que vous allez créer, sous forme de liste non-numérotée.

Fichier à créer : `index.html`

## Exercice 3 : visualiser votre page sous forme d'arbre
Le langage HTML est un langage structuré et hiérarchique, ce qui signifie qu'on peut le visualiser de manière abstraite sous forme d'arbre.

Sur papier, ou sur https://excalidraw.com/ (facile à prendre en main), dessinez la structure de votre page créée à l'exercice précédent. Ne représentez que les balises, pas les contenus ni les attributs.

Pour vous donner un peu d'inspiration, l'arbre devrait ressembler en partie à ceci :
![[html-arbre.excalidraw]]

## Exercice 4 : rendre votre page jolie (ou pas)
Il est possible de modifier le style de votre page directement dans le HTML. Il est préférable normalement d'avoir un fichier CSS à part pour définir le style d'une page, mais on verra cela dans le cours suivant.

Il existe donc un attribut global `style`, c'est-à-dire un attribut qui existe pour toutes les balises HTML (`id` et `class` sont des attributs globaux par exemple).

Cherchez dans la documentation comme faire pour ajouter (au moins) les styles suivant dans votre page `index.html` :
- mettez une image ou une couleur de fond sur toute la page ;
- une division (de votre choix) a des bords (de la couleur de votre choix) ;
- le titre a une couleur (de votre choix) ;
- un des liens a une couleur différente des autres

> [!note]
> Ne confondez pas l'attribut style avec la balise style !!


## Exercice 5 : un tableau simple
 Reproduisez le tableau ci-dessous :
 ![[table-calendrier.png]]

### Question 1
Dans un premier temps, faites un schéma de cette table sous forme d'arbre (pas besoin de tout représenter, vous pouvez omettre les choses qui se répètent).

### Question 2
Reproduisez le tableau vous-même.

Pour le style, faites tout en utilisant l'attribut  `style` dans les balises que vous souhaitez customiser. Pour vous économiser des répétitions pénibles, vous pouvez néanmoins ajouter le code suivant dans le `head` de votre page HTML :
```html
    <style>
      th, td {
        width: 10%;
        border: 1px solid black;
        border-collapse: collapse;
      }
    </style>
```

Remarques :
- quand le texte est en gras c'est qu'il a été déclaré comme un titre ;
- vous pouvez régler l'opacité pour faire des couleurs plus douces ;
- vous êtes libres du choix de couleurs.

Fichier à créer : `calendrier.html`

## Exercice 6 : un tableau imbriqué
Soit le tableau suivant :
![[tableau-imbrique.png]]

### Question 1
Faites le schéma de ce tableau sous forme d'arbre.

### Question 2
Reproduisez la table ci-dessus en HTML.

Fichier à créer : `calendrier-imbrique.html`

## Exercice 7 : un multi-select

On a vu dans le cours la balise `<select>`pour créer des menus déroulant. Dans certains cas, néanmoins, on veut pouvoir grouper les éléments dans des sous-groupes.

Pour cela, on utilise la balise `<optgroup label="Titre du sous-groupe">` qui entourera toutes les options du sous-groupe.

Soit le select suivant :
![[select-destinations.png]]
### Question 1
Faites le schéma de ce select sous forme d'arbre.

### Question 2
Reproduisez le select ci-dessus, sans regarder la doc.

### Question 3 
Dans la doc, cherchez :
- comment faire pour que ce soit possible de sélectionner plusieurs valeurs ?

Fichier à créer : `select-destination.html`

## Exercice 8 : un formulaire de contact
### Question 1
Créez un formulaire de contact qui contient : 
- deux `input` dont le type est `radio`, et qui permettent de choisir entre "M." ou "Mme" ;
- de quoi entrer le nom ;
- de quoi entrer le prénom ;
- de quoi entrer une adresse mail ;
- un `select`qui permet de choisir un pays ;
- de quoi entrer un message de texte ;
- un bouton "Envoyer".

### Question 2
À quoi sert la balise `fieldset`?
Reprenez votre formulaire créé à la question 1 et ajoutez des `fieldset`. Libre à vous de choisir comment l'utiliser.

Fichier à créer : `formulaire-contact.html`

## Premiers pas dans le projet : un portfolio pour présenter vos travaux

Vous avez maintenant les outils en main pour structurer une page web comme vous le souhaitez.


Le but du projet pendant cette UE est de créer votre propre site web, que vous améliorerez au fur et à mesure des cours, et des choses qu'on étudiera. Ce projet n'a donc pas pour but de ne faire que du code, mais bien de réfléchir à ce que vous souhaitez mettre dans votre page, et comment vous voulez l'organiser.

Dans ce premier TP, l'objectif est de construire le squelette de votre site. Il n'y a pas de sujet à proprement parler, vous êtes responsables des choix que vous faites. Ces choix vous devrez les expliquer et les argumenter dans un fichier qui s'appelle `README.md` écrit en Markdown.

Dans cette partie du projet vous devez, au minimum :
1) Utiliser un maximum d'éléments qu'on a vu en cours et dans les exercices ;
2) Faire un schéma d'à quoi vous voulez que ressemble votre page ;
3) Dessiner votre future page sous forme d'arbre (en omettant les détails) ;
4) Écrire votre page (ou vos pages) HTML avec quelques éléments de style.