'use strict';
function GetRsc (rsc, name, calculate, daily) {
  this.person = document.querySelector(name);
  let calc = document.querySelector(calculate);
  let dailyRsc = document.querySelector(daily);
  this.run = function () {
    calc.addEventListener('click', (event) => {
    dailyRsc.innerHTML = this.person.value + ', Ваша суточная норма РСК: 2000ккал';
  });
}
}
let getrsc = new GetRsc ('.rsc', '.firstname', '.calculate', '.daily-rsc');
getrsc.run();
