class Calorizator {
  constructor (rsc, calculate, daily){
    let calc = document.querySelector(calculate);
    let dailyRsc = document.querySelector(daily);

    this.getValue = () => {
      this.firstname = document.querySelector('.firstname').value;
      this.weight = document.querySelector('.weight').value;
      this.growth = document.querySelector('.growth').value;
      this.year = document.querySelector('.year').value;
    }

    this.bindEvents = () => {
      calc.addEventListener('click', (event) => {
        event.preventDefault();
        this.getValue();
        this.norma = (66.5 + (13.75 * this.weight) + (5.003 * this.growth) - (6.775 * this.year)) * 1.2;
        this.bel = this.weight * 1.2;
        this.jir = this.weight * 0.5;
        this.ugl = (this.norma - (this.bel * 4) - (this.jir * 9)) / 4;
        dailyRsc.innerHTML = this.firstname + ', Ваша суточная норма РСК: ' + this.norma + 'ккал';
        console.log(dailyRsc.innerHTML);
      });
    }

    this.bindEvents();

    this.getNorma = () => {
      return {
        cal: this.norma,
        bel: this.bel,
        jir: this.jir,
        ugl: this.ugl
      };
    }
  }
}
let calorizator = new Calorizator ('.rsc', '.calculate', '.daily-rsc');
