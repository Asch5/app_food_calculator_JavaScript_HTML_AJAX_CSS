"use strict";

const inputRub = document.querySelector("#rub");
const inputUSD = document.querySelector("#usd");

// console.log(inputRub);
// console.log(inputUSD);

inputRub.addEventListener("input", (e) => {
  const request = new XMLHttpRequest();

  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("load", (e) => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUSD.value = (inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUSD.value = "Что-то пошло не так";
    }
  });
});
