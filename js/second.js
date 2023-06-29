const menu_icon = document.getElementById('menu_icon');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu-link');

const copyright = document.querySelector('.copyright');
const close_menu = document.getElementById('close_menu');
const header_logo = document.querySelector('.header_logo');

const blurDivs = document.querySelectorAll('.blur-load');

blurDivs.forEach(blur_div => {
	const img = blur_div.querySelector('img');

	function loaded() {
		blur_div.classList.add('loaded');
	}

	if (img.complete) {
		loaded();
	} 
	else {
		img.addEventListener('load', loaded);
	}
});

const cargarElem = (entradas, observador) => {
	entradas.forEach((entrada, index) => {
	  if (entrada.isIntersecting) {
		setTimeout(() => {
			entrada.target.classList.add('inside');
		}, index * 200); // Cada burbuja aparecerá 200 milisegundos después de la anterior
	  }
	});
}

const observador = new IntersectionObserver(cargarElem, {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0.2
});

let elemCounter = 0;
while (elemCounter <= 10) {
  var elemName = 'obv_element_' + elemCounter;
  var elemNameid = document.getElementById(elemName);
  if (elemNameid) {
    observador.observe(elemNameid);
  }
  elemCounter++;
}

// Obtenemos todos los enlaces del header
const links = document.querySelectorAll('.header-link');
const bubbles = document.querySelectorAll('.bubble');

// Removemos el foco y el efecto hover al hacer clic en un enlace
links.forEach(link => {
  link.addEventListener('click', () => {
	link.blur(); // Removemos el foco
  });
});

// Removemos el foco y el efecto hover al hacer clic en un enlace
bubbles.forEach(bubble => {
	bubble.addEventListener('click', () => {
	  bubble.blur(); // Removemos el foco
	});
});

menuLinks.forEach(link => {
	link.addEventListener('click', () => {
	  	menu.classList.remove('active_menu');
	  	menu_icon.classList.remove('cross');
		close_menu.classList.remove('active');
	});
});

// Obtén todos los enlaces de desplazamiento suave en tu página
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

// Agrega un evento de clic a cada enlace
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento de desplazamiento predeterminado

    const targetId = link.getAttribute('href'); // Obtiene el valor del atributo href del enlace
    const targetElement = document.querySelector(targetId); // Obtiene el elemento al que se desea desplazar

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave hacia el elemento
    }
  });
});

function menu_icon_pressed() {
	menu.classList.toggle('active_menu');
	menu_icon.classList.toggle('cross');
	close_menu.classList.toggle('active');
}

menu_icon.addEventListener("keyup", function(event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		menu_icon_pressed();
	}
});

menu_icon.addEventListener('click', () => {
	menu_icon_pressed();
});

close_menu.addEventListener('click', () => {
	menu_icon_pressed();
});

header_logo.addEventListener('click', () => {
	if (menu.classList.contains('active_menu')){
		menu_icon_pressed();
	}
});

copyright.innerHTML = 'Alex Otero - ' + new Date().getFullYear() + ' Copyright &copy;. Todos los derechos reservados';

// Almacena la posición del desplazamiento al recargar la página
window.addEventListener('beforeunload', function() {
	localStorage.setItem('scrollPosition', window.scrollY);
});

// Restaura la posición del desplazamiento al cargar la página
window.addEventListener('load', function() {
	var scrollPosition = localStorage.getItem('scrollPosition');
	if (scrollPosition !== null) {
		window.scrollTo(0, parseInt(scrollPosition, 10));
		localStorage.removeItem('scrollPosition');
	}
});