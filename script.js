//1. print hello world
// let greet = prompt("Enter a Greet Message");
// console.log(greet);


//2. print 1 to 10 using for, while and do while loop
//for loop
// let initialValue = +prompt("Enter Initital Value");
// let initialValue = 5;
// let finalValue = +prompt("Enter Final Value");
// let finalValue = 10;
// for (let i = initialValue; i <= finalValue; i++) {
//     console.log(i);
// }

//while loop
// let initialValue = +prompt("Enter Initital Value");
// let initialValue = 10;
// let finalValue = +prompt("Enter Final Value");
// let finalValue = 20;
// while (initialValue <= finalValue) {
//     console.log(initialValue);
//     initialValue++;
// }

//do while loop
// let initialValue = +prompt("Enter Initital Value");
// let initialValue = 7;
// let finalValue = +prompt("Enter Final Value");
// let finalValue = 15;
// do {
//     console.log(initialValue);
//     initialValue++;
// } while (initialValue <= finalValue);


//3. write a function to add two number and return the result
// let num1 = +prompt("Enter first number");
// let num1 = 10;
// let num2 = +prompt("Enter second number");
// let num2 = 2;
// function AddTwoNumber(num1 , num2){
//     return num1 + num2;
// }
// let sum = AddTwoNumber(num1, num2);
// console.log(sum)


//4. write a function to find area of reactangle and parameter on base of given height and width
//area of reactangle
// function areaOfReactangle(lenghth, breadth){
//     return lenghth*breadth;
// }
// let result = areaOfReactangle(7,10);
// console.log("area of reactangle ", result);

//parameter of reactangle
// const  parameterOfReactangle = (lenghth, breadth)=>{
//     return 2*(lenghth + breadth);
// }
// console.log(parameterOfReactangle(2,5));



//5. write a function to take a string and revesed it
// let reversedAnyString = (str)=> {
//     let newString = str.split('').reverse().join('');
//     return newString;
// }
// console.log(reversedAnyString("Hello"));


//6. write a function to check even or odd
// let checkEvenOrOdd = (num)=> {
//     if (num % 2 == 0){
//         return "Even Number";
//     }else{
//         return "Odd Number";
//     }
// }
// console.log(checkEvenOrOdd(7));


//7. write a function to find a year is leap or not
// let findLeapYear = (year) => {
//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//         return "Leap Year";
//     } else {
//         return "Not a Leap Year"
//     }
// }
// console.log(findLeapYear(2021));     //true
// console.log(findLeapYear(2020));     //false



//8. fint the sum of all element of array

//method 1
// let myArray = [10, 20, 30, 40, 50] ;                //sum = 150
// let sum = 0;             
// for (let i = 0; i < myArray.length; i++) {
//   sum += myArray[i];  
// }
// console.log(sum);                                  //output = 150

//method 2
// let myArray = [10, 20, 30, 40, 50] ;                
// let sum = myArray.reduce((acc, element) => acc += element);
// console.log(sum);


//9.  create a object the car with properties like make, model and year. Add a method the car object to start the engine.
// let myCar = {
//     name : "BMW",
//     modal : "New Model"
// }
// //function declaration
// myCar.StartEngine = ()=> {
//     console.log("Engine Started");
//     console.log("Now you can enjoy your drive")
// }
// myCar.StartEngine();    //function calling



//10. change the text of a paragraph on a webpage using js
// let para = document.querySelector('#para');
// para.textContent = "Hello sidd";


//11. write a function to create, edit and remove a list of languages using dom.
//method 1 - create element
// function addLanguages( language ){
//     const li = document.createElement('li');
//     li.innerHTML = `${language}`;
//     document.querySelector('.ul-list').appendChild(li);
// }
// addLanguages('Python');

//method 2 create element
// function addOptimizeLanguages( language ){
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(language));
//     document.querySelector('.ul-list').appendChild(li);
// }
// addOptimizeLanguages('JAVA');
// addOptimizeLanguages('Python');
// addOptimizeLanguages('JavaScript');

//update element( second element)
// function updateLanguage(newLanguage){
//     const secondElement = document.querySelector(' li:nth-child(2) ');
//     const newElement = document.createElement('li');
//     newElement.textContent = `${newLanguage}`;
//     secondElement.replaceWith(newElement);
// }
// updateLanguage('abc');


//delete elements (last element)
// function deleteLanguages(){
//     const deletedElement = document.querySelector( 'li:last-child' );
//     deletedElement.remove();
// }
// deleteLanguages();


//12. create a button in a div by using dom
// let btn = document.querySelector('.btn');
// const button = document.createElement('button');
// button.textContent = "Click me";
// button.style.padding = "10px 20px";
// button.style.backgroundColor = "black";
// button.style.color = "white";
// document.querySelector('.btn').appendChild(button);


//13. print a message by click a button
// let btn = document.querySelector('button');
// btn.addEventListener('click', ()=>{
//     alert('Button is clicked');
// })


//14. wap to calculate factorial of any number;
//method 1
// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   }
// console.log(factorial(1));

// method 2
// function calculateFactorial(num) {
//    if (num === 0 || num === 1) {
//      return 1;
//    } else {
//         let fact = 1;
//         for (let i = 1; i <= num; i++) {
//            fact *= i;
//         }
//         return fact;
//    }
// }
// let result = calculateFactorial(5);
// console.log(result);


// 15. wap to print a random number according to given range;
// function generateRandomNumber(min, max){
//     let res = Math.floor(Math.random()*(max-min+1)+min);
//     console.log(res);
// }
// generateRandomNumber(1,100);


// 16. write a function that takes an array of numbers and return a new array with only  then even numbers
// let arr = [ 10, 15 , 20 , 25 ,30, 35, 40, 45, 50 ];
// function findEvenNumber(arr){
//     let res = arr.filter((element)=> element%2 == 0);
//     return res;
// }
// console.log(findEvenNumber(arr));


// 17. meke double each element of arr using map function
// let arr = [ 10, 15 , 20 , 25 ,30, 35, 40, 45, 50 ];
// let res =arr.map((element)=> element*2);
// console.log(res);

//18. find the largest value in a arr using reduce function
// let arr = [ 10, 15 , 20 , 25 ,70, 35, 40, 45, 50 ];
// let res = arr.reduce((maxValue , currentValue)=> currentValue > maxValue ? currentValue : maxValue);
// console.log(res);


//19. delete a spacific element from an arrary 
// let arr = [ 10, 15 , 20 , 25 ,70, 35, 40, 45, 50 ];
// function deleteElement(num){
//     let new_arr =  arr.filter((elment)=> elment !== num );
//     return new_arr;
// }
// console.log(deleteElement(70));


//20. create a function to display current date and time in better formate 
// function currentDateAndTime(){
//     let date = new Date();
//     return date.toLocaleString();
// }
// console.log(currentDateAndTime());


//21. handle error try and catch block to fech api data
// async function fetchData(){
//     try{
//         let response = await fetch('https://fakestoreapi.com/products/1');
//         let data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// fetchData();


// 22. create a fibonacci series using recursive function 
// function fibonacciRecursive(n){
//     if (n <= 1){
//         return n;
//     }
//     else{
//         return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
//     }
// }
// console.log(fibonacciRecursive(6));



//23. create a counter function using closures that increments and return the  count each call
// function createCounter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }

// let counter = createCounter();
// console.log(counter());   //1
// console.log(counter());   //2



//24. implemet a private variable using closure
// function createPerson(name){
//     let privateAge = 0;
//     return {
//         getName : function(){
//             return name;
//         },
//         incrementPrivateAge :function(){
//             return privateAge++;
//         } 
//     }
// }

// let person = createPerson('rahul');
// console.log(person.getName());              //rahul
// console.log(person.incrementPrivateAge()); // 1
// console.log(person.incrementPrivateAge()); // 2



//25. create a prototype for a product object with properties like as name , price and quantity. Add a method to the product prototype to calculate totalvalue.
// function Product(name , price , quantity){
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
// }

// Product.prototype.totalValue = function(){
//     return this.price * this.quantity;
// }

// let product1 = new Product('aalu', 40, 2);
// let totalValue1 = product1.totalValue();
// console.log(product1);  //Product { name: 'aalu', price: 40, quantity: 2 }
// console.log(totalValue1); //80




//26. Implement a function that makes multiple api calls and process the data using callback.
// method 1
// async function callApi(url, callback) {
//     await fetch(url)
//     .then(res => res.json())
//     .then(data => callback(data))
//     .catch(error => console.log(error))
// }
// function handleData(data){
//     console.log(data);
// }
// //Call the API and handle the data using the callback
// console.log(callApi('https://fakestoreapi.com/products/1' , handleData));


// method 2
// async function callApi(url, callback) {
//     try {
//         const response = await fetch(url);       // Await fetch request
//         const data = await response.json();      // Await response.json() to parse the JSON
//         callback(data);                          // Call the callback with the data
//     } catch (error) {
//         console.log(error);                      // Catch and log any errors
//     }
// }
// function handleData(data) {
//     console.log(data);                           // Callback to handle the fetched data
// }
// //Call the API and handle the data using the callback
// callApi('https://fakestoreapi.com/products/1', handleData);







//---------------------------------Sheryians Coding School - JS 100 Question-------------------------------------------------------

// 1 - Sum of two integers
// const x = 10;
// const y = 5;
// console.log("Sum = ", x + y);

// 2- Print the messege along with values and sum
// Ex - The sum of 45 & 12 = 57
// let x = 45;
// let y = 12;
// console.log(`The sum of ${x} and ${y} = ${x + y}`);


// 3- Accept two integers from user and print the sum
// Ex - The sum of 45 & 12 = 57
// let x = +prompt("Enter a number");
// let y = +prompt("Enter another number");
// console.log(`The sum of ${x} & ${y} = ${x + y}`);

// 4- Accept the User's name, age and print in following manner
// Ex - Hello Shery, you are 12 years old.
// let userName = prompt("Enter your name");
// let userAge = +prompt("Enter your age");
// console.log(`Hello ${userName}, you are ${userAge} years old.`);

// 5- Solve Increment & decrement operator questions on
// https://javaconceptoftheday.com/quiz-on-increment-and-decrementoperators/

// 6- Accept two numbers from user and swap their values
// Part 2 - Swap using third variable
// let a = 10;
// let b = 20;
// console.log(`before swapping a is ${a} and b is ${b}`);
// let c = b;  //c = 20
// b = a;      //b = 10
// a = c;      //a = 20
// console.log(`After swapping a is ${a} and b is ${b}`);

// Part 2 - Swap without using third variable
// let a = 20;
// let b = 10;
// console.log(`before swapping a is ${a} and b is ${b}`);
// a = a - b;     //a = 10
// b = a + b;     //b = 20
// a = b - a;     //a = 10 
// console.log(`After swapping a is ${a} and b is ${b}`);

//7. Accept the length and width of a rectangle. Calculate & print the area and perimiter.
// let length = 10;
// let width = 20;
// let areaOfReactangle = length * width;
// let perimiterOfReactangl = 2 * (length + width);
// console.log(`Area of reactangle is ${areaOfReactangle} and perimiter is ${perimiterOfReactangl}`);

// 8- Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)
// let p = 1000;
// let r = 10;
// let t = 1;
// let n = 4;
// let amount = p * Math.pow((1 + r / 100), (n * t));
// let CI = amount - p;
// console.log(`Compound Interest is ${CI}`);

// 9- Accept the three sides of triangle and calculate the area using herons formula
// let firstSide = 10;
// let secondSide = 10;
// let thirdSide = 10;
// let s = (firstSide * secondSide * thirdSide) / 2;
// let AreaOfTriangle = Math.sqrt(s * (s - firstSide) * (s - secondSide) * (s - thirdSide));
// console.log(`Area of triangle is ${AreaOfTriangle}`);

// 10- Find surface area of sphere

// 11- Find circumference and area of circle