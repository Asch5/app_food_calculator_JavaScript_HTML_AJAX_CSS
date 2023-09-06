function tabs(content, selector, selectorItem, classActive) {
  //tabs
  const tabcontent = document.body.querySelectorAll(content);
  const tabheaderItems = document.body.querySelector(selector);
  const tabheaderItem = document.body.querySelectorAll(selectorItem);

  function hiddenTabcontentUndActiveClass() {
    tabcontent.forEach((tab) => {
      tab.classList.add("hide");
      tab.classList.remove("show", "fade");
    });

    tabheaderItem.forEach((elem) => elem.classList.remove(classActive));
  }

  function showOneTabcontentAndOneActiveClass(number = 0) {
    tabcontent[number].classList.add("show", "fade");
    tabcontent[number].classList.remove("hide");
    tabheaderItem[number].classList.add(classActive);
  }

  hiddenTabcontentUndActiveClass();
  showOneTabcontentAndOneActiveClass();

  tabheaderItems.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    if (!target && !target.classList.contains(selectorItem.replace(/./g, ""))) {
      return;
    }
    tabheaderItem.forEach((el, i) => {
      if (el == target) {
        hiddenTabcontentUndActiveClass();
        showOneTabcontentAndOneActiveClass(i);
      }
    });
  });
  //tabs
  // console.dir(localData);
  // console.log(`localData ${localData}`);
  // console.log(`deviationFromUts ${deviationFromUts}`);
  // console.log(`utsData ${utsData}`);
  // console.log(`endAction ${endAction}`);
  // console.log(`longTime ${longTime}`);
  // console.log(`longTimeSec ${longTimeSec}`);
}

export default tabs;
