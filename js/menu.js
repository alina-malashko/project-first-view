let menuBtn = document.querySelector('.menu-burger__header'); /*Иконка гамбургера*/
let menu = document.querySelector('nav'); /*Меню*/
menuBtn.addEventListener('click', function(){ /*Добавление класса open-menu при клике на гамбургер*/
	menuBtn.classList.toggle('open-menu'); /*При клике иконка превращается в крестик*/
	menu.classList.toggle('open-menu'); /*Меню появляется и исчезает при клике на гамбургер*/
})