function slider({
  slider,
  duringNum,
  sum,
  itemSlide,
  sliderWrap,
  sliderRibbon,
  indicators,
  dots,
  buttPrev,
  buttNext,
}) {
  //const offerSliderPrev = offerSlider.querySelector(".offer__slider-prev");
  //const offerSliderNext = offerSlider.querySelector(".offer__slider-next");
  const offerSlider = document.querySelector(slider);
  const current = offerSlider.querySelector(duringNum);
  const total = offerSlider.querySelector(sum);
  const offerSlide = offerSlider.querySelectorAll(itemSlide);
  const sliderWrapper = offerSlider.querySelector(sliderWrap);
  const sliderInner = offerSlider.querySelector(sliderRibbon);

  const wight = window.getComputedStyle(sliderWrapper).width;
  //const wightNum = wight.match(/\d/g).join("");

  sliderInner.style.width = 100 * offerSlide.length + "%";
  sliderInner.style.display = "flex";
  sliderInner.style.transition = "0.5s all";
  sliderWrapper.style.overflow = "hidden";

  let currentSlide = 1;

  offerSlide.forEach((el) => {
    el.style.width = wight;
  });

  //console.log(wight);

  if (offerSlide.length < 10) {
    total.innerText = "0" + offerSlide.length;
  } else {
    total.innerText = offerSlide.length;
  }

  const actionSlide = (n) => {
    if (n < 10) {
      current.innerText = "0" + n;
    } else {
      current.innerText = n;
    }
    sliderInner.style.transform = `translateX(-${
      (n - 1) * wight.replace(/\D/g, "")
    }px)`;
  };

  const checkNum = (n) => {
    if (n < 1) {
      n = offerSlide.length;
    }
    if (n > offerSlide.length) {
      n = 1;
    }
    return n;
  };

  actionSlide(currentSlide);

  ////////////  точки карусели ////////////
  offerSlider.style.position = "relative";
  const pointsImgWrap = document.createElement("div");
  pointsImgWrap.innerHTML = `<ol class="${indicators.slice(1)}">
  </ol>`;
  offerSlider.append(pointsImgWrap);
  const carouselIndicators = offerSlider.querySelector(indicators);
  offerSlide.forEach((el, i) =>
    carouselIndicators.insertAdjacentHTML(
      "beforeend",
      `<li class="${dots.slice(1)}">
    </li>`
    )
  );
  const dot = carouselIndicators.querySelectorAll(dots);
  //console.log(dot);

  const colorEl = (n) => {
    dot.forEach((el, i) => {
      el.style.opacity = "0.5";
      if (n === i + 1) {
        el.style.opacity = "1";
      }
    });
  };
  colorEl(currentSlide);

  offerSlider.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains(dots.slice(1))) {
      dot.forEach((el, i) => {
        if (target === el) {
          currentSlide = i + 1;
          actionSlide(currentSlide);
        }
      });
    }

    if (target.className === buttPrev || target.alt === buttPrev.slice(-4)) {
      currentSlide -= 1;
      currentSlide = checkNum(currentSlide);
      actionSlide(currentSlide);
    }
    if (target.className === buttNext || target.alt === buttNext.slice(-4)) {
      currentSlide += 1;
      currentSlide = checkNum(currentSlide);
      actionSlide(currentSlide);
    }

    colorEl(currentSlide);
  });

  // if (offerSlide.length < 10) {
  //   total.innerText = "0" + offerSlide.length;
  // } else {
  //   total.innerText = offerSlide.length;
  // }

  // let currentSlide = 1;

  // const hideSlids = () => {
  //   offerSlide.forEach((el) => el.classList.add("hide"));
  // };

  // const actionSlide = (i) => {
  //   if (i < 10) {
  //     current.innerText = "0" + i;
  //   } else {
  //     current.innerText = i;
  //   }

  //   offerSlide[i - 1].classList.remove("hide");
  //   offerSlide[i - 1].classList.add("show");
  // };

  // const checkNum = () => {
  //   if (currentSlide < 1) {
  //     currentSlide = offerSlide.length;
  //   }
  //   if (currentSlide > offerSlide.length) {
  //     currentSlide = 1;
  //   }
  // };

  // const checkNum2 = (n) => {
  //   if (n < 1) {
  //     n = offerSlide.length;
  //   }

  //   if (n > offerSlide.length) {
  //     n = 1;
  //   }
  //   return n;
  // };

  // hideSlids();
  // actionSlide(currentSlide);

  // offerSlider.addEventListener("click", (e) => {
  //   e.preventDefault();

  //   if (
  //     target.className === "offer__slider-prev" ||
  //     target.alt === "prev"
  //   ) {
  //     currentSlide -= 1;
  //     currentSlide = checkNum2(currentSlide);
  //     hideSlids();
  //     console.log(`gate ${currentSlide}`);
  //     actionSlide(currentSlide);
  //   }
  //   if (
  //     target.className === "offer__slider-next" ||
  //     target.alt === "next"
  //   ) {
  //     currentSlide += 1;
  //     currentSlide = checkNum2(currentSlide);
  //     hideSlids();
  //     console.log(`gate ${currentSlide}`);
  //     actionSlide(currentSlide);
  //   }
  // });
  ////

  //console.dir(JSON.parse(localStorage.getItem("Anton")));
  //localStorage.clear();
}

export default slider;
