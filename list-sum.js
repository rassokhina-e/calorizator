export class SumList {
  constructor () {
    let ul = document.createElement('ul');
    let div = document.createElement('div');
    let proteins = document.createElement('div');
    let fats = document.createElement('div');
    let carbohydrates = document.createElement('div');
    let sumform = document.createElement("form");
    this.div = document.querySelector('.js-commonForm');
    this.div.appendChild(sumform);
    sumform.classList.add('js-secondformStyle');
    let sumCal = 0;
    let sumProt = 0;
    let sumFats = 0;
    let sumCarboh = 0;

    this.addSum = (product, value) => {
      let li = document.createElement('li');
      let resultValue = ((product.cal * value)/100);
      console.log('resultValue', resultValue);
      li.innerHTML = product.title + '-' + 'ккал:' + ' ' + resultValue;
      li.classList.add('li-count');
      ul.appendChild(li);

      sumCal += resultValue;
      div.innerHTML = 'всего ккал:' + ' ' + sumCal.toFixed(2);

      sumProt += ((product.bel * value)/100);
      proteins.innerHTML = 'всего белков:' + ' ' + sumProt.toFixed(2);

      sumFats += ((product.jir * value)/100);
      fats.innerHTML = 'всего жиров:' + ' ' + sumFats.toFixed(2);

      sumCarboh += ((product.ugl * value)/100);
      carbohydrates.innerHTML = 'всего углеводов:' + ' ' + sumCarboh.toFixed(2);

      console.log('div.innerHTML', div.innerHTML);
      sumform.appendChild(div);
      div.classList.add('li-count');
      sumform.appendChild(proteins);
      proteins.classList.add('li-count');
      sumform.appendChild(fats);
      fats.classList.add('li-count');
      sumform.appendChild(carbohydrates);
      carbohydrates.classList.add('li-count');
      sumform.appendChild(ul);
    }
  }
}
