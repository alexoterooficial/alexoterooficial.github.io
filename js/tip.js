const tip = document.querySelector('#tip'),
	tip_button = document.querySelector('#tip_button');

tip_button.addEventListener('click', (e) =>{
	tip.classList.toggle('active');
});