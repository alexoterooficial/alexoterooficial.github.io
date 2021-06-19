const iconoMenu = document.querySelector('#icono-menu'),
	menu = document.querySelector('#menu');

if (iconoMenu){
	iconoMenu.addEventListener('click', (e) => {
		menu.classList.toggle('active_menu');
		document.body.classList.toggle('opacity');
	});


}