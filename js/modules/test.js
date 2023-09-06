"use strict";
//import $ from "jquery";

function test() {
  // console.log("0");
  // const req = new Promise(function (resolv, reject) {
  //   setTimeout(() => {
  //     console.log("1");
  //     const product = {
  //       name: "TV",
  //       price: 2000,
  //     };
  //     resolv(product);
  //   }, 3000);
  // })
  //   .then((x) => {
  //     return new Promise((resolv, reject) => {
  //       setTimeout(() => {
  //         console.log("2");
  //         x.status = "order";
  //         console.log(x);
  //         resolv(x);
  //       }, 2000);
  //     });
  //   })
  //   .then((y) => {
  //     return new Promise((resolv, reject) => {
  //       setTimeout(() => {
  //         console.log("3");
  //         y.pay = "true";
  //         resolv(y);
  //       }, 2000);
  //     });
  //   })
  //   .then((z) => {
  //     console.log("4");
  //     console.log(z);
  //   })
  //   .catch(() => {
  //     console.error("MISTAKE");
  //   })
  //   .finally(() => {
  //     console.log("Finish");
  //   });
  // const test = (time) => {
  //   return new Promise((resolv, reject) => {
  //     setTimeout(() => {
  //       resolv();
  //     }, time);
  //   });
  // };
  // test(2000).then(() => {
  //   console.log("9");
  // });
  // Promise.all([test(2000), test(4000), test(6000), req]).then(() => {
  //   console.log("ready");
  // });
  // Promise.race([test(2000), test(4000), test(6000), req]).then(() => {
  //   console.log("race");
  // });
  // const names = {
  //   ivan: "persone",
  //   ann: "persone",
  //   dog: "animal",
  //   cat: "animal",
  // };
  // const arr = Object.entries(names)
  //   .filter((el) => el[1] === "persone")
  //   .map((el) => el[0]);
  // console.log(arr);
  // let y = 4;
  // const k = (u) => {
  //   y = u + 1;
  // };
  // k(y);
  // console.log(y);
  //////REG////////////////////////
  // const ans = "650px";
  // const reg = /\d/g;
  // const fun = (str) => {
  //   return str.replace(/\D/g, "");
  // };
  //console.log(ans.search(reg));
  //console.log(reg.test(ans));
  //console.log(ans.match(reg).join(""));
  //console.log(fun("650px"));
  //console.log("10" * "650");
  //////REG////////////////////////
  //console.log(Math.floor(88.36 * 13.4));
  // const names = {
  //   ivan: "man",
  //   ann: "woman",
  //   dog: "animal",
  //   age: 25,
  //   get userAge() {
  //     return this.age;
  //   },
  //   set userAge(num) {
  //     this.age = num + 3;
  //   },
  // };
  // console.log((names.userAge = 30));
  // console.log(names.userAge);
  // function User(name, age) {
  //   let lname = name;
  //   this.age = age;
  //   this.say = function () {
  //     console.log(`Имя пользователя: ${lname}`);
  //   };
  //   this.getLmane = function () {
  //     return lname;
  //   };
  //   this.setLmane = function (n) {
  //     lname = n;
  //   };
  // }
  // const obj = new User("Anton", 40);
  // obj.age = 50;
  // obj.name = "Dava";
  // console.log(obj);
  // obj.say();
  // console.log(obj.name);
  // console.log(obj.age);
  // console.log(obj.lname);
  // obj.setLmane('Roma');
  // console.log(obj.getLmane());
  // class User2 {
  //   constructor(name, age) {
  //     this._name = name;
  //     this.age = age;
  //   }
  //   #surname = "Petrechenko";
  //   get surname() {
  //     return this.#surname;
  //   }
  //   set surname(n) {
  //     this.#surname = n;
  //   }
  //   say() {
  //     console.log(`Имя пользователя: ${this._name} ${this.#surname}`);
  //   }
  // }
  // const obj = new User2("Anton", 40);
  // obj.say();
  // console.log(obj.surname);
  // obj.surname = "Petypop";
  // obj.say();
  // //onsole.log(obj.surname);
  // console.log(obj);
  // obj.say();
  //obj.name = "Pety";
  //console.log(obj.name);
  // console.log(obj.age);
  // console.log(obj.lname);
  //obj.setLmane("Roma");
  //console.log(obj);
  // console.log(obj.getLmane());
  // const num = 1;
  // (function () {
  //   const num = 2;
  //   console.log(num);
  //   console.log(num + 1);
  // })();
  // console.log(num);
  // const user = (function () {
  //   const privat = function () {
  //     console.log(1);
  //   };
  //   console.log("2");
  //   return {
  //     coint: privat,
  //   };
  // })();
  // user.coint();
  // function myModule() {
  //   this.hello = function () {
  //     console.log("hello");
  //   };
  //   this.goodbye = function () {
  //     console.log("bay");
  //   };
  // }
  // const myModule = require("./testModul");
  // const myModuleInstance = new myModule();
  // try {
  //   console.lo("Normal");
  // } catch (error) {
  //   console.dir(error);
  // }
  //console.log("test.js");
  /////////////////////////jquery////////////////////////////
  // const cur = $("#current");
  // const cur2 = $(".offer__slider-inner");
  // console.log(cur, cur2);
  ///////////////////////generator//////////////////////////
  // function* generator() {
  //   yield "S";
  //   yield "c";
  //   yield "r";
  //   yield "e";
  //   yield "p";
  //   yield "t";
  // }
  // const str = generator();
  // for (let i = 7; i > 0; i--) {
  //   console.log(str.next().value);
  // }
  // function* count(n) {
  //   for (let i = 0; i < n; i++) {
  //     yield i;
  //   }
  // }
  //const str = count(10);
  // for (let k of count(10)) {
  //   console.log(k);
  // }
  // console.log(str.next());
  ////////export///////
  //   export let one = 1;
  // let two = 2;
  // export { two };
  // export function sayHi() {
  //   console.log("Hello");
  // }
  ////////export///////
}

export default test;
//test();
