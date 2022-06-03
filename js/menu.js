let menuBtn = document.querySelector('.menu-burger__header');
let menu = document.querySelector('nav');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('open-menu');
	menu.classList.toggle('open-menu');
})