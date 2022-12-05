"use strict"
console.log('========================= Завдання 1  ================================');
let num_1 = 0;
let numOne = 0;
//let numOne = -1;
let numTwo = 0;

while (num_1 <= 5) {
   console.log(num_1);
   ++num_1;
}
console.log('===== while короткий запис =====');
while (numOne < 6) console.log(numOne++);
//while(numOne < 5) console.log(++numOne);
console.log('===== do while =====');
do {
   console.log(numTwo);
   ++numTwo;
} while (numTwo <= 5);
console.log('===== for =====');
for (let r = 0; r < 6; ++r) {
   console.log(r);
}
console.log('========================= Завдання 2 ================================');
let i = 8;
while (i) {
   //Последний результат 0, верно?
   console.log(i);
   i--;
}
console.log(`Задача 2 – ні не вірно "0" це false одже цикл зупинться, а якщо зупиниться то в консоль не виведеться, 
   залишиться останнє число яке було записано в console.log при виконанні останньої інтерації це "1". Але за межами циклу буде - ${i}`);
console.log('===== for ==================== Завдання 3 Переписати на із for на while ================================');
for (let num = 0; num < 3; num++) {
   console.log(`Число: ${num}`);
}
console.log('===== while =====');
let numThree = 0;
//while (numThree < 3) console.log(`Число: ${numThree++}`);
while (numThree < 3) {
   console.log(`Число: ${numThree}`);
   ++numThree;
}
console.log('========================= Завдання 4 ================================');
//Задача №4. Прекратить работу цикла №1 когда size равна 1
//Цикл №1
cycleStop: for (let num = 0; num < 2; num++) {
   //Цикл №2
   for (let size = 0; size < 3; size++) {
      if (size == 1) {
         break cycleStop;
      }
      console.log(`size равна 1. Індекс циклу: ${size}`);
   }
}
console.log('========================= Відео 4 ========= Завдання: 1 =======================');
/*
 Задача №1. Получить верное значение округления
let numOne = Math.round(1.005 * 100) / 100;
console.log(numOne); // Выведет 1 что не верно
*/
let numOne_01 = 1.005 + Number.EPSILON;
let getNum = Math.round(numOne_01 * 100) / 100;
console.log(getNum);
console.log('================================== Завдання: 2 =======================');
// Задача №2. Получить число 135.58 из строки
let value = "135.58px";
console.log(parseFloat(value));
console.log('================================== Завдання: 3 =======================');
// Задача №3. Посттроить верное условное ветвление
let value_01 = 58 + "Фрилансер";
if (value_01 !== NaN) {
   console.log('Результат выражения NaN');
};
console.log('================================== Завдання: 4 =======================');
// Найти максимальное число из 10,58,39,-150,0
let numberMax = Math.max(10, 58, 39, -150, 0);
console.log(`Максимальне число: ${numberMax}`);
let minMath = Math.min(10, 58, 39, -150, 0);
console.log(`Мінімальне число: ${minMath}`);
let minMathAbs = Math.abs(minMath);
console.log(`Модуль мінімального числа: ${minMathAbs}`);
//console.log(Math.abs(minMath));
console.log('================================== Завдання: 5 =======================');
// Округлить число 58.858 до числа 58
console.log(Math.floor(58.858));
console.log('========================= Відео 5 ========= Завдання: 2 =======================');
// Задача №2. Получить символ "н" строки:
let text = 'фрилансер';
console.log(text[5])
console.log('================================== Завдання: 4 =======================');
// Задача №4. Получить строку в верхнем регистре
let text_01 = 'фрилансер';
console.log(text_01.toLocaleUpperCase());
console.log('================================== Завдання: 5 =======================');
// Задача №5. Получить подстроку "лан" из:
let text_02 = 'фрилансер';
// let textSliceString = text_02.slice(3, 6);
// console.log(textSliceString);
//console.log(text_02.slice(3, 6));
console.log(text_02.slice(3, 6));

console.log('=========================================================');
let num_01 = 120;
let num_2 = 320;
let num_3 = 100;
/*function calcSum(a, b, c) {
   return a * b / c;
}
function showMessage(sum) {
   console.log(sum);
}
const sumResult = calcSum(num_01, num_2, num_3);
showMessage(sumResult);
*/
function adaptivWidth(a, b, c) {
   showSum(a * b / c);
}
function showSum(sum) {
   console.log(sum);
}
adaptivWidth(num_01, num_2, num_3);
let text_03 = 'фрилансер';
console.log(text_03.includes('лан', 3));
/*console.log('========================= Тренеровка ================================');
let userNum = "22",
   userNum_2 = "35";
console.log(+userNum_2 + -userNum);
console.log(- "35" + - "22");
console.log(+ "35" + - "22");
//let nameUser;
//let nameUser = '';
let nameUser = 0;
console.log(typeof nameUser);
console.log(nameUser ?? "Без имени");

if (0) {
   console.log('Це нуль');
} else if (' ') {
   console.log('Це пустий рядок');
}

let message = (92 > '11' && 58 < 100) ?  console.log('Це істина') : console.log('Це не стина');

console.log('========================= Length ================================');
let userValue = `Привіт. Це javaScript!`;
console.log(userValue.length);

console.log('========================= Знайти у масиві [] ================================');
console.log(userValue[11]);

console.log('========================= toUpper toLower-Cases ================================');
console.log(userValue.toLocaleUpperCase());
console.log(userValue.toLocaleLowerCase());
console.log(userValue);

console.log('========================= Includes ================================');
let userValue_2;
userValue_2 = userValue.toLowerCase();
console.log(userValue_2.includes('це java'));
let userValue_3;
userValue_3 = userValue_2.toUpperCase();
console.log(userValue_3.includes('це java') + ' ' + `${userValue_3}`);
console.log(userValue_3.includes('ЦЕ JAVA'));

console.log('========================= Slice ================================');
let userValueSlice;
let userValueSlice_2;
let userValueSlice_3;
let userValueSlice_4;

userValueSlice = userValue.slice(15, 21);
userValueSlice_2 = userValue.slice(11, 15);
userValueSlice_3 = userValue.slice(21, 22);
userValueSlice_4 = userValue_3.slice(8, 10);
console.log(userValue);
console.log(userValueSlice, userValueSlice_2, userValueSlice_4, userValueSlice_3);

console.log('========================= Replace ================================');
let someVariableReplace;
someVariableReplace = userValue.replace('javaScript', 'Заміна - replace');
console.log(userValue);
console.log(someVariableReplace);

console.log('========================= Parse-Int/Float ================================');
let userWidth = '320px',
   userHeight = '520px',
   userPercent = '100%',
   someNumber = '52.87rem';
let widthNum = parseFloat(userWidth),
   heightNum = parseFloat(userHeight),
   percentNum = parseFloat(userPercent),
   someNumParce = parseInt(someNumber);
let numResult = (heightNum / widthNum) * percentNum + '%';
console.log(`${numResult} - парсфлоат`);
console.log(`${someNumParce + 'rem'} - парсінт`);
*/
