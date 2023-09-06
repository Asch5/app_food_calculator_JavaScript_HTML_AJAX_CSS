//Timer///////////////////////////////////////////////////////////////////

const timer = function (date, days, hours, minutes, seconds, descr) {
  const elDays = document.getElementById(days),
    elHours = document.getElementById(hours),
    elMinutes = document.getElementById(minutes),
    elSeconds = document.getElementById(seconds),
    promotionDescr = document.querySelector(descr);

  const localData = new Date(),
    deviationFromUts = localData.getTimezoneOffset() * 6000,
    utsData = new Date(localData.getTime() + deviationFromUts),
    endAction = new Date(date);

  let longTime = endAction - utsData;

  const arr = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  promotionDescr.innerHTML = `Мы ценим каждого клиента и предлагаем вам стать одним из них на
    очень выгодных условиях. Каждому, кто закажет доставку питание на
    неделю, будет предоставлена скидка в размере <span>20%!</span>
    <br /><br />
    Акция закончится ${endAction.getDate()} ${arr[
    endAction.getMonth()
  ].toLocaleLowerCase()} в 00:00 по времени UTS`;

  const dataAct = {
    daysAct: 0,
    hoursAct: 0,
    minutesAct: 0,
    secondsAct: 0,
  };

  const sInt = 1000,
    mInt = 60 * 1000,
    hInt = 24 * 60 * 1000,
    dInt = 24 * 60 * 60 * 1000;

  const transform = function (long) {
    dataAct.daysAct = Math.floor(long / dInt);
    dataAct.hoursAct = Math.floor((long / hInt) % 24);
    dataAct.minutesAct = Math.floor((long / mInt) % 60);
    dataAct.secondsAct = Math.floor((long / sInt) % 60);

    for (let k in dataAct) {
      if (String(dataAct[k]).length < 2) {
        dataAct[k] = "0" + dataAct[k];
      }
    }
  };

  const isCoint = function () {
    let settime = setTimeout(function log() {
      if (longTime >= 0) {
        longTime -= 1000;

        transform(longTime);

        elDays.textContent = `${dataAct.daysAct}`;
        elHours.textContent = `${dataAct.hoursAct}`;
        elMinutes.textContent = `${dataAct.minutesAct}`;
        elSeconds.textContent = `${dataAct.secondsAct}`;

        settime = setTimeout(log, 1000);
      } else {
        clearTimeout(settime);
      }
    }, 1);
  };
  isCoint();
};

//Timer//////////////////////////////////////////////////////////////////

export default timer;
