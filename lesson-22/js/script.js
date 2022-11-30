"use strict"


let user;
console.log(typeof user);
let userName = 'Вася',
   colorEyes = 'green';
   user = userName;
console.log(colorEyes);
console.log(user);
console.log(typeof user);

console.log('=============================================');


let someNumber = 23;
console.log(someNumber);
console.log(typeof someNumber);
console.log('=============================================');
function block() {
   let someItem = 'Деякий текст',
      color = '#fff',
      someNumber = 31,
      secondNumber = 360;
   console.log(someNumber);
      someNumber = secondNumber
   console.log(someItem);
   console.log(someNumber);
   console.log(color);
}
//block();
console.log(someNumber);

const body = {
   hair: 'Синє',
   eyes: 'Карі',
   height: 172
}
console.log(body);
   body.hair = 'Червоні';
console.log(body);

let doYouLikeIt;
doYouLikeIt = prompt('Ви хочете продовжити?');
if (doYouLikeIt) {
   alert('Дякую');
   console.log(`:) Ви ввели: ${doYouLikeIt}`);
} else {
   alert('Хм');
   console.log(`:( Ви ввели: ${doYouLikeIt}`);
}
let testBlock_1 = null;
console.log(testBlock_1);
console.log(typeof testBlock_1);

let userAge = 31;
let userInfo = `Мені — ${userAge} рік`;
console.log(userInfo);
