import { getData } from "/js/services/services";

function cards() {
  //////addCard///////////////////////////////

  //console.log(fitnesCard);

  // const fitnesCard = [
  //   {
  //     textImg: '"Должа быть картинка"',
  //     img: "img/tabs/vegy.jpg",
  //     subtitle: '"Фитнес"',
  //     descr: `Меню "Фитнес" - это новый подход к приготовлению блюд: больше
  //   свежих овощей и фруктов. Продукт активных и здоровых людей. Это
  //   абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
  //     price: 25,
  //     transfer: 36,
  //   },

  //   {
  //     textImg: '"Должа быть картинка"',
  //     img: "img/tabs/post.jpg",
  //     subtitle: '"Постное"',
  //     descr: `Меню “Постное” - это тщательный подбор ингредиентов: полное
  //   отсутствие продуктов животного происхождения, молоко из миндаля,
  //   овса, кокоса или гречки, правильное количество белков за счет тофу
  //   и импортных вегетарианских стейков.`,
  //     price: 50,
  //     transfer: 36,
  //   },

  //   {
  //     textImg: '"Должа быть картинка"',
  //     img: "img/tabs/elite.jpg",
  //     subtitle: '"Премиум"',
  //     descr: ` В меню “Премиум” мы используем не только красивый дизайн упаковки,
  //   но и качественное исполнение блюд. Красная рыба, морепродукты,
  //   фрукты - ресторанное меню без похода в ресторан!`,
  //     price: 70,
  //     transfer: 36,
  //   },
  // ];

  class Card {
    constructor(
      img,
      subtitle,
      descr,
      price,
      transfer,
      parentSelector,
      textImg,
      ...classes
    ) {
      this.textImg = textImg;
      this.img = img;
      this.subtitle = subtitle;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.classes = classes;
      this.convert = transfer;
    }
    #convertToGr;

    set convert(e) {
      this.#convertToGr = e * this.price;
    }
    get convert() {
      return this.#convertToGr;
    }

    render() {
      const elem = document.createElement("div");

      if (this.classes.length === 0) {
        this.classes = "menu__item";
        //elem.classList.add(this.classes);
      } else {
        this.classes.forEach((el) => elem.classList.add(el));
      }
      elem.innerHTML = ` <img src=${this.img} alt=${this.textImg} />
        <h3 class="menu__item-subtitle">${this.subtitle}</h3>
        <div class="menu__item-descr">
          ${this.descr}
        </div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.convert}</span> грн/день</div>
        </div>`;
      this.parent.append(elem);
    }
  }

  // fitnesCard.forEach((el) => {
  //   new Card(
  //     el.textImg,
  //     el.img,
  //     el.subtitle,
  //     el.descr,
  //     el.price,
  //     el.transfer,
  //     ".menu .container"
  //   ).render();
  // });

  //   {
  //     textImg: '"Должа быть картинка"',
  //     img: "img/tabs/elite.jpg",
  //     subtitle: '"Премиум"',
  //     descr: ` В меню “Премиум” мы используем не только красивый дизайн упаковки,
  //   но и качественное исполнение блюд. Красная рыба, морепродукты,
  //   фрукты - ресторанное меню без похода в ресторан!`,
  //     price: 70,
  //     transfer: 36,
  //   },

  ///function getting data from server/////
  // const getData = async (url) => {
  //   let res = await fetch(url);
  //   if (!res.ok) {
  //     throw new Error(`Could not fetch ${url}, status ${res.status}`);
  //   }

  //   return await res.json();
  // };

  getData("http://localhost:3000/menu").then((r) => {
    r.forEach(({ img, title, descr, price }) => {
      new Card(
        img,
        title,
        descr,
        price,
        36,
        ".menu .container",
        "IMG",
        "menu__item"
      ).render();
    });
  });

  ////Получение данных с сервера с помощью axios//////////////////////////
  // axios
  //   .get("http://localhost:3000/menu")
  //   .then(function (response) {
  //     response.data.forEach(({ img, title, descr, price }) => {
  //       let card = new Card(
  //         img,
  //         title,
  //         descr,
  //         price,
  //         36,
  //         ".menu .container",
  //         "IMG",
  //         "menu__item"
  //       );

  //       //card.convert = 2;
  //       card.render();
  //     });
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  ///// Быстрое создание Элемента////////////////////////////////////////////
  // getData("http://localhost:3000/menu").then((r) => {
  //   const parent = document.querySelector(".menu .container");
  //   r.forEach(({ img, title, descr, price }) => {
  //     const el = document.createElement("div");
  //     el.classList.add("menu__item");
  //     el.innerHTML = ` <img src=${img} alt=${this.textImg} />
  //       <h3 class="menu__item-subtitle">${title}</h3>
  //       <div class="menu__item-descr">
  //         ${descr}
  //       </div>
  //       <div class="menu__item-divider"></div>
  //       <div class="menu__item-price">
  //         <div class="menu__item-cost">Цена:</div>
  //         <div class="menu__item-total"><span>${price}</span> грн/день</div>
  //       </div>`;
  //     parent.append(el);
  //   });
  // });

  // getData("http://localhost:3000/menu").forEach((el) => {
  //   new Card(
  //     "Должа быть картинка",
  //     el.img,
  //     el.title,
  //     el.descr,
  //     el.price,
  //     36,
  //     ".menu .container"
  //   ).render();
  // });

  // fetch("http://localhost:3000/menu")
  //   .then((r) => r.json())
  //   .then((r) => {
  //     r.forEach((el) => fitnesCard.push(el));
  //   })
  //   .then(() => {
  //     fitnesCard.forEach((el) => {
  //       new Card(
  //         "Должа быть картинка",
  //         el.img,
  //         el.title,
  //         el.descr,
  //         el.price,
  //         36,
  //         ".menu .container"
  //       ).render();
  //     });
  //   })
  //   .catch((err) => console.log(err), console.log("Card. I am catch"))
  //   .finally(() => console.log("Card. Loading ready"));
  //////addCard///////////////////////////////
}

export default cards;
