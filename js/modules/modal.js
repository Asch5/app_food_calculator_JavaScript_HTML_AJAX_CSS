//функция закрытия модального окна
const closeModal = function (el) {
  el.classList.remove("show");
  el.classList.add("hide");
  document.body.style.overflow = "";
};
//закрытие при нажатии на крестик
const setEventListForClose = function (el, fun, cross, field) {
  el.addEventListener("click", (e) => {
    if (
      e.target.classList.contains(field.slice(1)) ||
      e.target.classList.contains(cross)
    ) {
      fun(el);
    }
  });
  //закрытие при нажатии на ESC
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && el.classList.contains("show")) {
      fun(el);
    }
  });
};

function modal(allModal, el, closeCross) {
  const elOpenModal = document.querySelectorAll(allModal);
  const elModalWindow = document.querySelector(el);

  //функция открытия модального окна
  const openModal = function (el) {
    el.classList.add("show");
    el.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearTimeout(clearInt);
    document.removeEventListener("scroll", eventScrolOpenModal);
  };

  //открытие модального окна при нажатии на кнопку
  elOpenModal.forEach((el) => {
    el.addEventListener("click", () => {
      openModal(elModalWindow);
    });
  });

  setEventListForClose(elModalWindow, closeModal, closeCross, el);

  //открытие модального окна при скроле до конца страницы
  const eventScrolOpenModal = () => {
    const heightBody = document.documentElement.scrollHeight; // вся высота
    const contentUp = window.pageYOffset; // сколько сверху
    const heightWindow = document.documentElement.clientHeight; //высота окна
    if (heightBody <= heightWindow + contentUp + 1) {
      openModal(elModalWindow);
    }
  };
  document.addEventListener("scroll", eventScrolOpenModal);

  //открытие модального окна при интервале времени
  let clearInt;
  const timeIntervalOpen = function (time = 5000000) {
    clearInt = setTimeout(() => {
      openModal(elModalWindow);
    }, time);
  };
  timeIntervalOpen();
}

export default modal;
export { closeModal, setEventListForClose };
