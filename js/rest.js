//------------Сумуємо два масиви-------------------

// const add = function (...args) {
//     console.log(args);

//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
   
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));





//--------------------Вибір чисел які входять в масив------------
// const filterNumbers = function (array, ...args) {
//     console.log('array: ', array);
//     console.log('args: ', args);
//     const uniqueElements = [];

//     for (const element of array) {
//         if (args.includes(element)) {
//             uniqueElements.push(element);
//             console.log(`${element} є кругом`);
//         }
//     }
//     return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); //[2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); //[30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); //[200]



//-----------------Кнопка----------------------------
// const buttonRef = document.querySelector('.js-button');

// buttonRef.addEventListener('click', function () {
//     console.log('Klick on button ' + Date.now());
// });





//-----------Callback Функція вищого порядку. Функція зворотного виклику (callback)
//-------------перебираючий метод масиву- Фільтр----------
// const filter = function (array, test) {
//     const filteredArray = [];
//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);
//         if (passed) {
//             filteredArray.push(el);
//          }
//     }
//     return filteredArray;
// };


// const callback1 = function (value) {
//     return value >= 3;
// }

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//     return value <= 4;
// });
// console.log(r2);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
    
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);




//--------------Замикання Визиває функцію всередині себе--------------
// const fnA = function (parameter) {
//     const innerVariable = 'значення внутрішньої перемінної функції fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Це виклик innerFunction');
//     };
//     return innerFunction;
// };

// const fnB = fnA(555);
// fnB();
// console.log(fnB);

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готує ${dish}`);
// };


//---------Перебираємо масив.Додаємо 10 до елементу тільки коли він ділиться на 2------- 
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//      return newArray.push(element + value);
//     }
//      newArray.push(element);
//   });
// return newArray;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10))



//--------map перебирання не змінюючи масив----------------
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// // const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);
// console.log(planets);









