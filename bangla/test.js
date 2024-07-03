// console.log("ferhat");
// console.log("hitesh")
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });

console.log("ferhat");

const bigNumber = 4758675885899948n

// console.log(typeof bigNumber);

const hero = function () {
  console.log("hello world");
}

// hero()

let myName = "fmferhat"

let nkName = myName
nkName = "Apon"

// console.log(myName);


// console.log(`hello my name is ${myName} and my repo count`);

let myArr = ["batman", "superman", "spiderman", "antman", "fatman"]

// console.log(myArr[2]);

let marbelHero = ["thor", "ironman", "flash"]

// marbelHero.push(myArr)

// console.log(marbelHero);
// console.log(marbelHero[3][1]);

// let allHero = marbelHero.concat(myArr)
// console.log(allHero);

// sprade operator.........

const allHero = [...marbelHero, ...myArr]

// console.log(allHero);

// console.log(Array.isArray("ferhat"));
// console.log(Array.from("ferhat"));
// console.log(Array.from({name: "ferhat"}));




// object....................

const symble = Symbol("key1")

const JsUser = { 
  name: "ferhat",
  age: 18,
  [symble]: "mykey1",

}
// const symble = Symbol("key1")....hosting can't work

// console.log(JsUser.name);
// console.log(JsUser["age"]);
// console.log(JsUser[symble]);

JsUser.age = 30
// console.log(JsUser);

// object (+) concat................

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "d", 4: "c"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
      // {........target value={} , obj12.3.= source}

// const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const navbar = ({company}) => {

}

navbar(company = "ferhat")

// dstacturing.................



// function  myfunction (username){
//   if (username === undefined) {
//     console.log("pls enter username");
//     return
//   }
//   return `${username} just logged in`
// }

// // console.log (myfunction("ferhat"))
// console.log (myfunction())


// rest operator
function calcularCartPrice(...num1) {
  return num1
  
}


// console.log(calcularCartPrice(200, 300, 500));

const user3 = {
  username: "ferhat",
  price: 199
}

function hndleobjt(anyobjt) {
  console.log(`username is ${anyobjt.username} and price is ${anyobjt.price}`);
  
}

// hndleobjt(user3)


// iife..immediately invoked funtion(global polution theke safe korar jonno)

// (function chai() {
//   console.log(`bd connected`);
  
// })();

((name) => {
  console.log(`bd connected two ${name}`);
})("ferhat")