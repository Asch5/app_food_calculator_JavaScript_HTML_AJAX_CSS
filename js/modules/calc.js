function calc() {
  const calculatingField = document.querySelector(".calculating__field");
  const gender = calculatingField.querySelector("#gender");
  const levelActivity = calculatingField.querySelector('[data-set="activity"]');
  const constitution = calculatingField.querySelector(
    '[data-set="constitution"]'
  );
  const calculatingResult = calculatingField.querySelector(
    ".calculating__result > span"
  );

  const recordlocalStorage = () => {
    const param = {
      genderProp: genderProp,
      activeProp: activeProp,
      height: height,
      weight: weight,
      age: age,
      actionIndexFallow: actionIndexFallow,
    };
    localStorage.setItem("param", JSON.stringify(param));
    paramLS = JSON.parse(localStorage.getItem("param"));
  };
  /////
  const removeActionSlass = (elemParent) => {
    let arr = [];
    elemParent.childNodes.forEach((el, i) => {
      if (el.nodeName !== "#text") {
        arr.push(el);
      }
    });
    arr.forEach((el) => {
      el.classList.remove("calculating__choose-item_active");
    });
    return arr;
  };
  //////
  const addActionSlass = (elemTarget) => {
    elemTarget.target.classList.add("calculating__choose-item_active");
  };
  /////
  let paramLS = JSON.parse(localStorage.getItem("param"));

  let genderProp = paramLS.genderProp;
  let activeProp = paramLS.activeProp;
  let height = paramLS.height;
  let weight = paramLS.weight;
  let age = paramLS.age;
  let actionIndexFallow = paramLS.actionIndexFallow;

  const actionIndex = [1.2, 1.375, 1.55, 1.725];

  const calcum = () => {
    //console.log(paramLS);
    let length = calculatingField.querySelectorAll(
      ".calculating__choose-item_active"
    ).length;
    if (length !== 5) {
      calculatingResult.innerText = "----  ";
      return;
    }

    let bmr;

    if (paramLS.genderProp === "Мужчина") {
      bmr = Math.floor(
        paramLS.actionIndexFallow *
          (88.36 +
            13.4 * paramLS.weight +
            4.8 * paramLS.height -
            5.7 * paramLS.age)
      );
    }

    if (paramLS.genderProp === "Женщина") {
      bmr = Math.floor(
        paramLS.actionIndexFallow *
          (447.6 +
            9.2 * paramLS.weight +
            3.1 * paramLS.height -
            4.3 * paramLS.age)
      );
    }

    calculatingResult.innerText = bmr;
  };

  //////Starting output of the parameters numbers ................
  removeActionSlass(constitution).forEach((el) => {
    if (el.id === "height") {
      el.value = paramLS.height;
    }
    if (el.id === "weight") {
      el.value = paramLS.weight;
    }
    if (el.id === "age") {
      el.value = paramLS.age;
    }
    if (el.value) {
      el.classList.add("calculating__choose-item_active");
    }
  });

  removeActionSlass(gender).forEach((el) => {
    if (el.innerText === paramLS.genderProp) {
      el.classList.add("calculating__choose-item_active");
    }
  });

  removeActionSlass(levelActivity).forEach((el, i) => {
    el.setAttribute("data-about", actionIndex[i]);
    if (el.innerText === paramLS.activeProp) {
      el.classList.add("calculating__choose-item_active");
    }
  });
  ////// sending data to localStorage

  calcum();

  gender.addEventListener("click", (e) => {
    if (e.target.classList.contains("calculating__choose-item")) {
      removeActionSlass(gender);
      addActionSlass(e);

      genderProp = e.target.innerText;
    }
    recordlocalStorage();
    calcum();
  });

  levelActivity.addEventListener("click", (e) => {
    if (e.target.classList.contains("calculating__choose-item")) {
      removeActionSlass(levelActivity);
      addActionSlass(e);

      activeProp = e.target.innerText;
      actionIndexFallow = e.target.dataset.about;
    }
    recordlocalStorage();
    calcum();
  });

  constitution.addEventListener("focusout", (e) => {
    if (e.target.classList.contains("calculating__choose-item")) {
      const arr = removeActionSlass(constitution);

      arr.forEach((el) => {
        el.value = el.value.replace(/\D/g, "");
        if (el.value) {
          el.classList.add("calculating__choose-item_active");
        }
        if (el.id === "height") {
          height = el.value;
        }
        if (el.id === "weight") {
          weight = el.value;
        }
        if (el.id === "age") {
          age = el.value;
        }
      });
    }
    recordlocalStorage();
    calcum();
  });
}

export default calc;
