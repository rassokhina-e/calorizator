export class ProductsList {
  constructor (products, onProductAdd) {
    let self = this;
    this.products = products;
    let ul = document.createElement('ul');
    let secondform = document.createElement("form");
    this.div = document.querySelector('.js-commonForm');
    this.div.appendChild(secondform);
    secondform.classList.add('js-secondformStyle');

    function setAttributes(el, options) {
      Object.keys(options).forEach(function(attr) {
        el.setAttribute(attr, options[attr]);
      })
    }
    function getRandomColor () {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    this.getTitle = () => {
      this.products.forEach((item) => {
        let li = document.createElement('li');
        let button = document.createElement('button');
        setAttributes(button, {
          'data-id': item.id,
          type: "button",
        });
        button.innerHTML = item.title.toUpperCase() + '-' + 'ккал 100гр:' + item.cal + '/' + 'Б:' + item.bel + '/' + 'Ж:' + item.jir + '/' + 'У:' + item.ugl + '  ' + '+';
        button.addEventListener('click', onclick);
        button.style.backgroundColor = getRandomColor();
        button.classList.add('btnProduct-style');
        li.appendChild(button);
        ul.appendChild(li);
        secondform.appendChild(ul);
      })
    }
    this.getTitle();

    function onclick () {
      let index = this.getAttribute('data-id');
      let product = self.getProduct(index);
      onProductAdd(product);
    }
    this.getProduct = (id) => {
      let product = this.products.find((item) => {
        return id === item.id;
      })
      return product;
    }
  }
};
