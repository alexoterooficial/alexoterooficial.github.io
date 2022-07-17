const btnSwitch = document.querySelector('#switch');
const btnSwitchNoMobile = document.querySelector('#switch-no_mobile');

const menu_icon = document.getElementById('menu_icon');
const menu = document.getElementById('menu');
const copyright = document.querySelector('.copyright');

const tip = document.querySelector('#tip'),
	tip_button = document.querySelector('#tip_button');

const irArriba = document.querySelector('.ir-arriba');

if (btnSwitch) {

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
}


function menu_f(){
	menu.classList.toggle('active_menu');
	menu_icon.classList.toggle('cross');
}

if (menu_icon) {	
	menu_icon.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			menu_f();
		}
	});
}


copyright.innerHTML = 'Alex Otero - ' + new Date().getFullYear() + ' Copyright &copy;. Todos los derechos reservados';

if (tip) {
	tip_button.addEventListener('click', (e) =>{
		tip.classList.toggle('active');
	});
}


if (irArriba){
	$(document).ready(function(){

		$('.ir-arriba').click(function(){
			$('body, html').animate({
				scrollTop: '0px'
			},300 );
		});

		$(window).scroll(function(){
			if ($(this).scrollTop() > 0){
				$('.ir-arriba').slideDown(300);
			} else {
				$('.ir-arriba').slideUp(300);
			};
		});
		
	});
}