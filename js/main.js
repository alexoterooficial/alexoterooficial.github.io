window.addEventListener("scroll", function(){var header = document.querySelector("header"); header.classList.toggle("sticky", window.scrollY > 0);})

function inicio(){
	document.getElementById('inicio').scrollIntoView();
}

function conocimientos(){
	document.getElementById('conocimientos').scrollIntoView();
}

function proyectos(){
	document.getElementById('proyectos').scrollIntoView();
}

function contacto(){
	document.getElementById('contacto').scrollIntoView();
}