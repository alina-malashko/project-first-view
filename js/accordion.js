var acc = document.querySelectorAll(".accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Переключение между добавлением и удалением класса active */
        this.classList.toggle("active");

        /* Скрытие и отображение активной панели */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/*Медленное раскрытие панели с ответом*/
for (i = 0; i < acc.length; i++) {
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