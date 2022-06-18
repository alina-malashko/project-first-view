    function openModalWindow() {
      var shadow = document.querySelector("#shadow");
      var modal = document.querySelector("#modal");
        /*Добавление тени и появление модального окна*/
      shadow.classList.add("shadow_open");
      modal.classList.add("modal_open");
    }

    function closeModalWindow() {
      var shadow = document.querySelector("#shadow");
      var modal = document.querySelector("#modal");

      shadow.classList.remove("shadow_open");
      modal.classList.remove("modal_open");
    }