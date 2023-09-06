"use strict";
require("es6-promise").polyfill();
import "nodelist-foreach-polyfill";
import { tns } from "./node_modules/tiny-slider/src/tiny-slider";

import calc from "./modules/calc";
import cards from "./modules/cards";
import forms from "./modules/forms";
import modal from "./modules/modal";
import slider from "./modules/slider";
import tabs from "./modules/tabs";
import timer from "./modules/timer";
import test from "./modules/test";

window.addEventListener("DOMContentLoaded", () => {
  calc();
  cards();
  forms("form", ".modal", ".modal__title", "modal__close");
  modal("[data-open_modal]", ".modal", "modal__close");
  slider({
    duringNum: "#current",
    sum: "#total",
    itemSlide: ".offer__slide",
    sliderWrap: ".offer__slider-wrapper",
    sliderRibbon: ".offer__slider-inner",
    indicators: ".carousel-indicators",
    dots: ".dot",
    buttPrev: "offer__slider-prev",
    buttNext: "offer__slider-next",
    slider: ".offer__slider",
  });
  tabs(
    ".tabcontent",
    ".tabheader__items",
    ".tabheader__item",
    "tabheader__item_active"
  );
  timer(
    "2023-01-10",
    "days",
    "hours",
    "minutes",
    "seconds",
    ".promotion__descr"
  );
  test();
});
