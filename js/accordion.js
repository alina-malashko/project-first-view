var acc = document.querySelectorAll(".accordion");
/*i позволяет перебрать все элементы массива*/
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* При клике на div с классом accordion происходит переключение между добавлением и удалением класса active */
        this.classList.toggle("active");

        /* Скрытие и отображение панели с ответом (сестринский элемент для div.accordion) */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/*Медленное раскрытие панели с ответом*/
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active_open-slowly");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; /*max height для панели с ответом становится равной высоте прокрутки*/
    }
  });
}