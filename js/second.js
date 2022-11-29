const btnSwitch = document.querySelector('#switch');
const btnSwitchNoMobile = document.querySelector('#switch-no_mobile');

const menu_icon = document.getElementById('menu_icon');
const menu = document.getElementById('menu');
const copyright = document.querySelector('.copyright');

const tip = document.querySelector('#tip'),
	tip_button = document.querySelector('#tip_button');

const irArriba = document.querySelector('.ir-arriba');

const cnt = document.querySelector('.cnt');
const slides = Array.from(document.querySelectorAll('.slide'));
let isDragging = false,
	startPos = 0,
	currentTranslate = 0,
	prevTranslate = 0,
	animationID = 0,
	sectionIndex = 0,
	dotIndex = 0;
let slider = document.querySelector('.slider');
const dots = document.querySelector('.dots');

if (slider) {

	slides.forEach((slide, index) => {
		const slideImage = slide.querySelector('img');
		slideImage.addEventListener('dragstart', (e) => e.preventDefault());

		slide.addEventListener('touchstart', touchStart(index));
		slide.addEventListener('touchend', touchEnd);
		slide.addEventListener('touchmove', touchMove);

		slide.addEventListener('mousedown', touchStart(index));
		slide.addEventListener('mouseup', touchEnd);
		slide.addEventListener('mouseleave', touchEnd);
		slide.addEventListener('mousemove', touchMove);
	})

	cnt.oncontextmenu = function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
	}

	const longPress = (el, callback, duration) => {
		let timeout;
		const start = () => {
			timeout = window.setTimeout(callback, duration);
		}

		const end = () => {
			window.clearTimeout(timeout);
			cnt.classList.add('moving');
		}

		el.addEventListener('touchstart', start);
		el.addEventListener('touchend', end);
		el.addEventListener('mousedown', start);
		el.addEventListener('mouseup', end);
		el.addEventListener('mouseleave', end);
	}

	longPress(cnt, () => {
		cnt.classList.remove('moving');
	}, 150);

	function touchStart(index){
		return function(event) {
			slider.classList.add('grabbing');
			sectionIndex = index;
			dotIndex = index;
			startPos = getPositionX(event);
			isDragging = true;
			animationID = requestAnimationFrame(animation);
		}
	}

	function touchEnd() {
		isDragging = false;
		cancelAnimationFrame(animationID);
		const movedBy = currentTranslate - prevTranslate
		if (movedBy < -100 && sectionIndex < slides.length - 1) {
			sectionIndex += 1;
			dots.children[dotIndex].classList.remove('active');
			dotIndex += 1;
			dots.children[dotIndex].classList.add('active');
		}
		if (movedBy > 100 && sectionIndex > 0) {
			sectionIndex -= 1;
			dots.children[dotIndex].classList.remove('active');
			dotIndex -= 1;
			dots.children[dotIndex].classList.add('active');
		}
		setPositionByIndex();
		slider.classList.remove('grabbing');
	}

	function touchMove(event) {
		if (isDragging) {
			const currentPosition = getPositionX(event);
			currentTranslate = prevTranslate + currentPosition - startPos;	
			slider.classList.add('grabbing');
		}
	}

	function getPositionX(event) {
	  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
	}

	function animation() {
		setSliderPosition();
		if (isDragging) requestAnimationFrame(animation)
	}

	function setSliderPosition() {
		cnt.style.transform = `translateX(${currentTranslate}px)`;	
	}

	function setPositionByIndex() {
		currentTranslate = sectionIndex * -slider.offsetWidth;
		prevTranslate = currentTranslate;
		setSliderPosition();
	}

	const cnt_sections = cnt.children.length;
	setInterval(function(){
		if (cnt.classList.contains('moving')){
			sectionIndex = (sectionIndex < (cnt_sections - 1)) ? sectionIndex + 1 : 0;
			dots.children[dotIndex].classList.remove('active');
			dotIndex = (dotIndex < (cnt_sections - 1)) ? dotIndex + 1 : 0;
			dots.children[dotIndex].classList.add('active');
			cnt.style.transform = 'translateX(' + (sectionIndex) * (-100 / cnt_sections) + '%)';
		}
	}, 5000);
}

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