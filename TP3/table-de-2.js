
function creer_table() {
	let div = document.getElementById("contenu");
	let str = "<table id='t2'><caption>La table de deux</caption>";

	for (let i=1; i <= 10; i++) {
		str += "<tr><td>" + i + "</td><td>" + i*2 + "</td></tr>";
	}
	str += "</table>";

	div.innerHTML = str;
}


function donner_style() {
	let bouton = document.getElementById("bouton");
	let elements = document.getElementsByTagName("td"); 

	for (let i=0; i < elements.length; i++)
	{
		elements[i].style.color = "red";
		elements[i].style.border = "solid 1px";
	}
}