'use strict'
console.log('========================== Робота над помилками 24 уроку ==========================');
console.log('======== Із відео - 1 function() ========');
/*
if (2 > 1) {
   function showMessage() {
      console.log('Сообщение');
   }
}
showMessage();
*/
let showMessage;
if (2 > 1) {
   showMessage = function () {
      console.log('Сообщение');
   }
}
showMessage();
console.log('======== Із відео - 3 DOM — Завдання 1  ========');
/*const getingTaskOne = document.querySelector('.task-one');
const getingElementAtribut = getingTaskOne.getAttribute('data-say-hi');
console.log(getingElementAtribut)*/
const getElemAtriboot = document.querySelector('.task-one');
console.log(getElemAtriboot.dataset.sayHi);

console.log('======== Із відео - Array — Завдання 2  ========');
// Задача №2.
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/
let users = ["Ваня", "Иштван"];
users.push("Оля");
//console.log(users);
let deleteUser = users.splice(0, 1);
console.log(deleteUser);
//console.log(users);
let pastUser = "Петя"; // Любе ім'я яке замінеться з "Иштван"
users.find(function (item, index) {
   if (item === "Иштван") {
      let userIndex = index;
      users.splice(userIndex, 1, pastUser);
   }
});
users.unshift("Маша", "Паша");
console.log(users);

console.log('=========================================================');
const button = document.querySelector('.botton');
const options = {
   "capture": false,
   "once": true,
   "passive": false,
};
/*
function buttonClick () {
   console.log('Це був клік!');
   button.removeEventListener("click", buttonClick);
   }*/
/*
button.addEventListener("click", function(){
   console.log('Це був клік!');
   
}, options);
button.addEventListener("click", function(){
   console.log('Це був клак!');
   
});
//   button.addEventListener("click", buttonClick);
*/
/*
function showConsole(event) {
   console.log(event.type);
   console.log(event.target);
   console.log(event.currentTarget);
   console.log(event.clientX);
   console.log(event.clientY);
   console.log(event);
}
button.addEventListener("click", showConsole, options);
//button.addEventListener("mouseenter", showConsole, options);
*/
/*const buttonsBlock = document.querySelector('.workout__botton-block');
function showMwssageConsole() {
   console.log('Ти клікнув на кнопку!');
}
buttonsBlock.addEventListener("click", function (event) {
   if (event.target.closest('.botton')) {
      showMwssageConsole()
   }
});*/
// * ===============================================================================
/*
const menuContainer = document.querySelector('.menu');
document.addEventListener("click", buttonFunc);
function buttonFunc(event) {
   if (event.target.closest('.menu__button')) {
      menuContainer.classList.toggle('active');
   }
   if (!event.target.closest('.menu')) {
      menuContainer.classList.remove('active');
   }
}
document.addEventListener('keyup', function (event) {
   if (event.code == 'Escape') {
      menuContainer.classList.remove('active');
   };
})*/
// * ===============================================================================
/*
const link = document.querySelector('.menu__link');
link.addEventListener("click", function (event) {
   console.log('Дії при клікі');
   event.preventDefault();
}, { 'passive': true })
link.onclick = function(){
   console.log('Дії при клікі');
   return false;
};*/

// * =================================================================================
/*
const buttonTwo = document.querySelector('.button-test');
buttonTwo.addEventListener("mousedown", function (event) {
   console.log(`Нажата кнопка миші ${event.which}`);
});
buttonTwo.addEventListener("click", function (event) {
   console.log(`Нажата основна кнопка миші`);
});
buttonTwo.addEventListener("contextmenu", function (event) {
   console.log(`Визвано контекстне меню`);

});*/
// * ==================================================================================
/*const mousePoligon = document.querySelector('.poligon__for-mouse');
mousePoligon.addEventListener("mousemove", function (event) {
   mousePoligon.innerHTML = `Горизонталь: ${event.clientX}px <br> Вертикаль: ${event.clientY}px`
});
const mousePoligon_02 = document.querySelector('.poligon__for-mouse-over');
mousePoligon_02.addEventListener("mouseover", function (event) {
   // mousePoligon_02.innerHTML = `Курсор над об'єктом`;
   // console.log(event.target);
   // console.log(event.relatedTarget);
   console.log(`Курсор над об'єктом`); // спливання

});
mousePoligon_02.addEventListener("mouseout", function (event) {
   // mousePoligon_02.innerHTML = `Курсор поза об'єктом`;
   // console.log(event.target);
   // console.log(event.relatedTarget);
   console.log(`Курсор поза об'єктом`); // спливання
});
const mousePoligon_03 = document.querySelector('.poligon__for-mouse-enter');
mousePoligon_03.addEventListener("mouseenter", function (event) {
   console.log(`Курсор над об'єктом`); // немає спливання
})
mousePoligon_03.addEventListener("mouseleave", function (event) {
   console.log(`Курсор поза об'єктом`);  // немає спливання
});

const blockNumb = document.querySelector('.poligon__for-mouse-numbers');
blockNumb.addEventListener("mouseover", function (event) {
   let target = event.target.closest('span');
   if (!target) return;
   target.style.cssText = `
   background-color: rgba(255, 0, 85, 0.623);
   color: #fff;`;
   //target.classList.toggle('decor');
   target.classList.add('decor');
});
blockNumb.addEventListener("mouseout", function (event) {
   let target = event.target.closest('span');
   if (!target) return;
   /*target.style.cssText = ``;
   target.classList.remove('decor');
});*/
// * =================================================
/*
document.addEventListener("keydown", function(event) {
   console.log(`Нажата кнопка ${event.code} — (${event.key})`);
   //console.log(event.repeat);
});
document.addEventListener("keyup", function(event) {
   console.log(`Віджата кнопка ${event.code} — (${event.key})`);
});
*/
// * =================================================
/*document.addEventListener("keydown", function (event) {
   if (event.code == "KeyZ" && (event.ctrlKey || event.metaKey)) {
      console.log(`Відміна дії`);
   };
   if (event.code == "Escape") {
      console.log(`Вихід`);

   };
});*/
// * =================================================
/*const textAreaItem = document.querySelector(".textarea__item");
const maxLenghtLimit = textAreaItem.getAttribute("maxlength");
const counterSpan = document.querySelector(".textarea__counter span");
counterSpan.innerHTML = maxLenghtLimit;

textAreaItem.addEventListener("keyup", funcSetCount),
   textAreaItem.addEventListener("keydown", function (event) {
      if (event.repeat) funcSetCount();
   });

function funcSetCount() {
   const textAreaCount = maxLenghtLimit - textAreaItem.value.length;
   counterSpan.innerHTML = textAreaCount;
};*/
// * =================================================
/*window.addEventListener('scroll', function (event) {
   console.log(`${scrollY}px`);
});
*/
/*
window.addEventListener ('beforeunload', beforeunload)
function beforeunload (event) {
   event.preventDefault();
   event.returnValue = ``;
};*/

// * ================================================= Домашка
// Escape

const formButton = document.querySelector('.home-work__wrapper');
document.addEventListener('click', openForm);
formButton.addEventListener('keydown', function (event) {
   if (event.code == 'Escape') {
      formButton.classList.remove('active');
   };
});
function openForm(event) {
   if (event.target.closest('.home-work__button')) {
      formButton.classList.toggle('active');
   };
   if (!event.target.closest('.home-work__wrapper')) {
      formButton.classList.remove('active');
   };
};

const inputItem = document.querySelector('.home-work__input-name');
const inputCount = document.querySelector('.input-count span');
const inputLimit = inputItem.getAttribute('maxlength');
inputCount.innerHTML = inputLimit;
inputItem.addEventListener('keyup', inputLimitCount),
inputItem.addEventListener('keydown', function (event) {
   if (event.repeat) inputLimitCount ();
});

function inputLimitCount () {
let inputAreaCount = inputLimit - inputItem.value.length;
inputCount.innerHTML = inputAreaCount;
}

