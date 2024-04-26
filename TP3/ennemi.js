function bouger() {
	console.log("Je bouge");
	let bouton = document.getElementById("bouton");
    var t = Math.ceil(Math.random()*(window.innerHeight-75));
    var l = Math.ceil(Math.random()*(window.innerWidth-75));
    bouton.style.top = t + "px";
    bouton.style.left= l + "px";
    bouton.style.opacity /= 2; 
}