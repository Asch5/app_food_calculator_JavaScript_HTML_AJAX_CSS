import { closeModal, setEventListForClose } from "./modal";
import { postData } from "/js/services/services";

function forms(form, modalWindow, title, closeCross) {
  ///////form//////////////////////////

  const forms = document.querySelectorAll(form);
  const elModalWindow = document.querySelector(modalWindow);

  const message = {
    loading: "/img/form/spinner.svg",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  function post(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const img = document.createElement("div");
      img.innerHTML = `<img style="display:block; margin:0 auto" src=${message.loading} alt="Загрузка" />`;
      form.after(img);

      const footer = document.querySelector(".footer");
      const statusMessage = document.createElement("div");
      statusMessage.classList.add("modal", "show");
      statusMessage.innerHTML = `
       <div class="modal__dialog">
         <div class="modal__content">
           <form action="#">
             <div data-close_modal class="modal__close">&times;</div>
             <div class="modal__title" >
             </div>
           </form>
         </div>
       </div>`;

      const newModal = function (params) {
        footer.after(statusMessage);
        //setting listener for the new modal window
        setEventListForClose(
          statusMessage,
          function (x) {
            x.remove();
          },
          closeCross,
          modalWindow
        );
        const modalTitle = document.querySelector(title);
        modalTitle.textContent = params;
      };

      // const formData = new FormData(form);
      // const obj = {};
      // formData.forEach((el, i) => (obj[i] = el));

      const formData = Object.fromEntries(new FormData(form).entries());

      //postLocal(formData);

      postData("http://localhost:3000/requests", JSON.stringify(formData))
        .then((r) => {
          newModal(message.success);
        })
        .catch((err) => {
          console.log(err);
          newModal(message.failure);
        })
        .finally(() => {
          form.reset();
          img.remove();
          closeModal(elModalWindow);
        });
    });
  }

  //console.log(forms);

  forms.forEach((el) => post(el));

  // fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     body: "cupiditate quo est a modi nesciunt soluta\nipsat",
  //     title: "at nam consequatur ea labore ea harum",
  //     userId: 10,
  //   }),
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json))

  //   .then(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((json) => console.log(json));
  //   })

  //   .catch((err) => {
  //     console.log(err);
  //   });
}

export default forms;
