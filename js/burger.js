const iconoMenu = document.querySelector('#icono-menu'),
	menu = document.querySelector('#menu');

if (iconoMenu){
	iconoMenu.addEventListener('click', (e) => {
		menu.classList.toggle('active_menu');
		document.body.classList.toggle('opacity');

		const rutaActual = e.target.getAttribute('src');

		if(localStorage.getItem('dark-mode') === 'true'){
			e.target.setAttribute('src', 'imágenes/open-menu2.png');
		}
		else {
			e.target.setAttribute('src', 'imágenes/open-menu.png');
		}

		// if (rutaActual == 'imágenes/open-menu2.png'){
		// 	e.target.setAttribute('src', 'imágenes/open-menu2.png');
		// }

		// else {
		// 	e.target.setAttribute('src', 'imágenes/open-menu2.png');
		// }
	});


}