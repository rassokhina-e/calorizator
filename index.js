import { ProductsList } from "./list-products.js";
import { CountList } from "./list-count.js";
import { SumList } from "./list-sum.js";

// Initialize Firebase
let config = {
  apiKey: "AIzaSyCfWcqGcCS7aS0JZ5Z8Eiof6wQ0n6kl9lg",
  authDomain: "calorie-calculator-f0eff.firebaseapp.com",
  databaseURL: "https://calorie-calculator-f0eff.firebaseio.com",
  projectId: "calorie-calculator-f0eff",
  storageBucket: "",
  messagingSenderId: "122595430589"
};
let app = firebase.initializeApp(config);
let db = firebase.database(app);

let productsList, countlist, sumlist;

function onProductAdd (product) {
  console.log('onProductAdd', product);
  countlist.addLi(product);
}
function onGrammAdd (product, value) {
  console.log('onGrammAdd', product, value);
  sumlist.addSum(product, value);
}

db.ref('/products')
  .once('value')
  .then(function(snapshot) {
    let productsObj = snapshot.toJSON();
    let products = [];
    for (let key in productsObj) {
      products.push(productsObj[key]);
    }

    console.log('products', products);
    productsList = new ProductsList(products, onProductAdd);
    countlist = new CountList(onGrammAdd);
    sumlist = new SumList();
});


