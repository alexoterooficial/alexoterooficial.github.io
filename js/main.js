const btnSwitch = document.querySelector('#switch');
const btnSwitchNoMobile = document.querySelector('#switch-no_mobile');

const menu_icon = document.getElementById('menu_icon');
const menu = document.getElementById('menu');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
	btnSwitchNoMobile.classList.toggle('active');

	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

btnSwitchNoMobile.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
	btnSwitchNoMobile.classList.toggle('active');

	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});


if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
	btnSwitchNoMobile.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
	btnSwitchNoMobile.classList.remove('active');
}

function menu_f(){
	menu.classList.toggle('active_menu');
	menu_icon.classList.toggle('cross');
}

menu_icon.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		menu_f();
	}
});