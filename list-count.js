export class CountList {
  constructor (onGrammAdd) {
    let ul = document.createElement('ul');
    let countform = document.createElement("form");
    this.div = document.querySelector('.js-commonForm');
    this.div.appendChild(countform);
    countform.classList.add('js-secondformStyle');

    this.addLi = (product) => {

      if ( document.querySelector('li[data-item="' + product.id + '"]') ){
        return; //когда нажимаю повторно нужно проверить наличие такого data-attribute
      };
      let li = document.createElement('li');
      li.classList.add('li-count');
      li.innerHTML = product.title + ' ' + ', кол-во гр:';
      li.setAttribute('data-item', product.id);
      ul.appendChild(li);
      countform.appendChild(ul);

      let input = document.createElement('input');
      input.setAttribute('type', 'number');
      input.setAttribute('value', '100');
      ul.appendChild(input);
      input.addEventListener('change', function () {
        let value = this.value;
        onGrammAdd(product, value);
      });
    }
  }
}
