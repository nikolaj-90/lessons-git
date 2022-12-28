'use strict'
console.log('============================================= Відео - 1 function() =============================================');
/*
if (2 > 1) {
   function showMessage() {
      console.log('Сообщение');
   }
}
showMessage(); // Error (showMessage is not defined)
// Не зрозумів задачі, все ж працює ???
*/
console.log(`=================================== Відео - 2 Массивы =====================================================`);
console.log(`================= Завдання 1 ==================`);
let arr = ['Ваня', 'Иштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
console.log(`================= Завдання 2 ==================`);
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/
let arrUsers = ["Ваня", "Иштван"];
console.log(arrUsers);
console.log(arrUsers.length);

arrUsers.push("Оля");
console.log(arrUsers);
console.log(arrUsers.length);

arrUsers.splice(1, 1, 'Петя');
console.log(arrUsers);
console.log(arrUsers.length);

let newArrUsers = arrUsers.splice(0, 1);
console.log(newArrUsers);

//arrUsers.unshift('Маша', 'Паша');
arrUsers.splice(0, 0, 'Маша', 'Паша');
console.log(arrUsers);
console.log(`================= Завдання 3 ==================`);
// Удалить элемент 'Иштван' и возвратить его в переменную
let arr_1 = ['Ваня', 'Иштван', 'Оля',];
console.log(arr_1);
let arrTwo_1 = arr_1.splice(1, 1);
console.log(arrTwo_1);
console.log(arr_1);
console.log(`================= Завдання 4 ==================`);
//Сделать из строки массив
let str = 'Ваня,Иштван,Оля';
console.log(str);
if (Array.isArray(str)) {
   console.log('Це масив');
} else { console.log('Це рядок'); }

let arrNew = str.split();
console.log(arrNew);
if (Array.isArray(arrNew)) {
   console.log('Це масив');
} else { console.log('Це рядок'); }

console.log(`================= Завдання 5 ==================`);
// Чему равен previousValue в начале работы метода?
/*let arr = [9, 2, 8,];
let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
   console.log(previousValue);
});*/
console.log('Викличе помилку так як невірно вказано змінну масиву із методом reduce (arrTwo.reduce).\nАле якщо було б arr тоді previousValue дорівнюваав би 9,\nтак як не задано початкового значення (відліку) в другому параметрі reduce.')

console.log('=================================== Відео - 3 DOM =====================================================');
/*
const getHtmlElements = document.documentElement;
console.log(getHtmlElements); 

const getBody = document.body;
console.log(getBody); 

const getHeade = document.head;
console.log(getHeade); 

const childNodes = getBody.childNodes;
console.log(childNodes); */

console.log(`================= ! ! !  Завдання 1 ==================`);
/*const getingTaskOne = document.querySelector('.task-one');
const getingElementAtribut = getingTaskOne.getAttribute('data-say-hi');
console.log(getingElementAtribut)*/
const getElemAtriboot = document.querySelector('.task-one');
console.log(getElemAtriboot.dataset.sayHi);


console.log(`================= Завдання 2 ==================`);
/*
const getingTaskTwo_01 = document.querySelectorAll('.task-two > ul > li');
console.log(getingTaskTwo_01[1]);
getingTaskTwo_01.forEach(getingTaskTwoItem => {
   console.log(getingTaskTwoItem);
   
})
*/
const getingTaskTwo = document.querySelectorAll('.task-two > ul > li')[1];
console.log(getingTaskTwo);
const getingTaskTwoText = getingTaskTwo.textContent;
console.log(getingTaskTwoText);


//const getingElementTaskTwo = getingTaskTwo.getElementsByTagName('li');
//console.log(getingElementTaskTwo)

console.log(`================= Завдання 3 ==================`);
//const getElements = document.querySelector('.task-three');
//const getColections = getElements.getElementsByClassName('like');
//console.log(getColections);

const getElements = document.querySelectorAll('.like');
console.log(getElements);
for (let getColection of getElements) {
   console.log(getColection);
}

console.log(`================= Завдання 4 ==================`);
const elementsTaskFour = document.querySelector('.task-four');
const getElem = document.querySelector('.task-four ul');
getElem.insertAdjacentHTML("beforeend",
   `<li>Текст</li>`);
console.log(elementsTaskFour);
console.log(getElem);

/*const newElem = document.createElement('li');
newElem.innerHTML= 'Це новий тег списку !';
//getElem.before(newElem);
//getElem.after(newElem);
getElem.prepend(newElem);
//getElem.append(newElem);*/

console.log('=================================== Відео - 4 Координати і скрол =====================================================');
const exerceseElement = document.documentElement;

const widthWorkWindow = exerceseElement.clientWidth;
const heighWorkWindow = exerceseElement.clientHeight;
console.log(widthWorkWindow);
console.log(heighWorkWindow);

const widthWindow = window.innerWidth;
const heightWindow = window.innerHeight;
console.log(widthWindow);
console.log(heightWindow);

const scrollLineWidth = widthWindow - widthWorkWindow;
console.log(`Смуга прокручування HTML-документу дорівнює: ${scrollLineWidth + 'px'}.`);
/*
function countScrollLineWidth(a, b) {
   showScrollLineWidth(a - b);
}
function showScrollLineWidth(num) {
   console.log(`Смуга прокручування HTML-документу дорівнює: ${num + 'px'}.`);
}
countScrollLineWidth(widthWindow, widthWorkWindow);
*/
const getNewWidth = window.pageXOffset;
const getNewHeight = window.pageYOffset;
console.log(`Ширина прокрутки: ${getNewWidth}`);
console.log(`Висота прокрутки: ${getNewHeight}`);
console.log('=======================================================');
/*
const blockLorem = document.querySelector('.block-lorem');
const positionBlockLorem = blockLorem.offsetParent;
console.log(positionBlockLorem);

const positionBlockLoremLeft = blockLorem.offsetLeft;
const positionBlockLoremTop = blockLorem.offsetTop;
console.log(`Відстань до об'єкта від лівого краю: ${positionBlockLoremLeft + 'px'}`);
console.log(`Відстань до об'єкта від верха: ${positionBlockLoremTop + 'px'}`);
console.log('===============');

const blockLoremWidth = blockLorem.offsetWidth;
const blockLoremHeight = blockLorem.offsetHeight;
console.log('Ширина об\'\єкта: ' + blockLoremWidth + 'px');
console.log('Висота об\'\єкта: ' + blockLoremHeight + 'px');
console.log('===============');

const insetBlockLoremLeft = blockLorem.clientLeft;
const insetBlockLoremTop = blockLorem.clientTop;
console.log(`Відступ від краю рамки до контенту зліва ${insetBlockLoremLeft}`);
console.log(`Відступ від краю рамки до контенту зверху ${insetBlockLoremTop}`);
console.log('===============');

const insetBlockLoremWidth = blockLorem.clientWidth;
const insetBlockLoremHeight = blockLorem.clientHeight;
console.log(`Внутрішній розмір об\'\єкта, ширина: ${insetBlockLoremWidth + 'px'}`);
console.log(`Внутрішній розмір об\'\єкта, висота: ${insetBlockLoremHeight + 'px'}`);
console.log('===============');

const scrollBlockLoremWidth = blockLorem.scrollWidth;
const scrollBlockLoremHeight = blockLorem.scrollHeight;
console.log(`Внутрішній повний розмір об\'\єкта, ширина: ${scrollBlockLoremWidth + 'px'}`);
console.log(`Внутрішній повний розмір об\'\єкта, висота: ${scrollBlockLoremHeight + 'px'}`);
console.log('===============');

const scrollBlockLoremLeft = blockLorem.scrollLeft;
const scrollBlockLoremTop = blockLorem.scrollTop;
//blockLorem.scrollTop = 150;
console.log(`Горизонтальний скрол : ${scrollBlockLoremLeft + 'px'}`);
console.log(`Вертикальнй скрол : ${scrollBlockLoremTop + 'px'}`);
console.log('============================= Координати =========================');
*/
const item = document.querySelector('.task-four');
console.log(item);

const getItemCordinates = item.getBoundingClientRect();
console.log(getItemCordinates);

const getItem = item.getBoundingClientRect().top;
console.log(getItem);

const getItemFullPage = getItem + window.pageYOffset;
console.log(getItemFullPage);
console.log('===============');

const mainDocum = document.querySelector('.main__container');
const findItem = document.elementFromPoint(700, 100);
console.log(findItem);


function scrollMainPage() {
   window.scrollTo({
      top: 600,
      left: 0,
      behavior: "smooth"
   });
}
setTimeout(scrollMainPage, 1000);

const windowBlock = document.querySelector('.block-lorem');
let count = 0;
let countNumber = 6;
function setScrollAutoElem(time) {
   count += time;
   windowBlock.scrollBy({
      top: 100,
      left: 0,
      behavior: "smooth"
   });
   if (count === countNumber) {
      clearInterval(limitCount);
   }
}
let limitCount = setInterval(setScrollAutoElem, 2500, 1);

console.log('=============== Завдання - 3. Отримання координат об\'\єктів ===============');
const title = document.querySelector('.title');
const blockList = document.querySelector('.task-two');
const blockLorem = document.querySelector('.block-lorem');

const getCoordinatTitle = title.getBoundingClientRect().top;
const getWindowCoordinatsTitle = getCoordinatTitle + window.pageYOffset;
console.log(title, `Висота від верха документа: ${getCoordinatTitle + 'px'}.`);
console.log(title, `Висота від верха браузера: ${getWindowCoordinatsTitle}px.`);

const getCoordinatBlockList = blockList.getBoundingClientRect().top;
const getWindowCoordinatsBloc = getCoordinatBlockList + window.pageYOffset;
console.log(blockList, `Висота від верха документа: ${getCoordinatBlockList + 'px'}`);
console.log(blockList, `Висота від верха браузера: ${getWindowCoordinatsBloc}px.`);

const getCoordinatBlockLorem = blockLorem.getBoundingClientRect().top;
const getWindowCoordinatsBlockLorem = getCoordinatBlockLorem + window.pageYOffset;
console.log(blockLorem, `Висота від верха браузера: ${getCoordinatBlockLorem}px.`);
console.log(blockLorem, `Висота від верха документа: ${getWindowCoordinatsBlockLorem}px.`);



/*
function showNum (num) {
   console.log(num);
   let timerId = setTimeout(showNum, 100, ++num);
   if (num === 15) {
      clearTimeout(timerId);
   }
}
setTimeout(showNum, 100, 1);
*/
/*
// let numCalc = function(one, two) {
//    console.log(one * two);
// }
// numCalc(5, 5);
function numCalc(one, two) {
   console.log(one * two);
}
let anotherValue = numCalc;
numCalc(5, 15);
anotherValue(7, 8);
*/
/*
// let fancNameResult = sumName('Олександр', 'Іванна');
// function sumName (nameOne, nameTwo) {
//    let countNames = nameOne + ', ' + nameTwo + '.';
//    return countNames;
// }
// console.log(fancNameResult);
let sumName = (nameOne, nameTwo) => nameOne + ', ' + nameTwo + '.';
console.log(sumName('Іра', 'Йося'));
*/
/*
let numberFunc = 50;
let countSum;
function culcSum(numOne, numTwo, more, less) {
      countSum = numOne + numTwo;
   if (countSum > numberFunc) {
      more()
   }else{
      less()
   }
}
function showMoreMessage() {
   console.log(`Сума ${countSum}: більша чим ${numberFunc}`)
}
function showlessMessage() {
   console.log(`Сума ${countSum}: менша чим ${numberFunc}`)
}
culcSum(42, 15, showMoreMessage, showlessMessage);
*/
/*
function sumWidth (a, b, c) {
   let showResult = a * b / c
   console.log(showResult + '%');
}
sumWidth(45, 16, 100);

function exwmpleFunc (one, two) {
   let sumExemple = one + two;
   return sumExemple;
}

let resultExemple = exwmpleFunc('Один ', 'Два');
console.log(resultExemple);
*/