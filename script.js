
//****************************************Sheryians Coding School - JS 100 Question**********************************************



//****************************************-BASICS Day 1 to 6 **********************************************


// 1 - Sum of two integers
// const x = 10;
// const y = 5;
// console.log("Sum = ", x + y);


//*******************************************************************************************************************


// 2- Print the messege along with values and sum
// Ex - The sum of 45 & 12 = 57
// let x = 45;
// let y = 12;
// console.log(`The sum of ${x} and ${y} = ${x + y}`);


//*******************************************************************************************************************


// 3- Accept two integers from user and print the sum
// Ex - The sum of 45 & 12 = 57
// let x = +prompt("Enter a number");
// let y = +prompt("Enter another number");
// console.log(`The sum of ${x} & ${y} = ${x + y}`);



//*******************************************************************************************************************


// 4- Accept the User's name, age and print in following manner
// Ex - Hello Shery, you are 12 years old.
// let userName = prompt("Enter your name");
// let userAge = +prompt("Enter your age");
// console.log(`Hello ${userName}, you are ${userAge} years old.`);



//*******************************************************************************************************************


// 5- Solve Increment & decrement operator questions on
// https://javaconceptoftheday.com/quiz-on-increment-and-decrementoperators/



//*******************************************************************************************************************


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


//****************************************** MATH CLASS Day 7 **********************************************


//7. Accept the length and width of a rectangle. Calculate & print the area and perimiter.
// let length = 10;
// let width = 20;
// let areaOfReactangle = length * width;
// let perimiterOfReactangl = 2 * (length + width);
// console.log(`Area of reactangle is ${areaOfReactangle} and perimiter is ${perimiterOfReactangl}`);


//*******************************************************************************************************************


// 8- Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)
// let p = 1000;
// let r = 0.05;
// let t = 3;
// let n = 4;
// let A = p * Math.pow((1 + r / n), (n * t));
// console.log(`Compound Interest is ${A.toFixed(2)}`);


//*******************************************************************************************************************


// 9- Accept the three sides of triangle and calculate the area using herons formula
// let firstSide = +prompt("Enter first side of triangle");
// let secondSide = +prompt("Enter second side of triangle");
// let thirdSide = +prompt("Enter third side of triangle");
// let s = (firstSide + secondSide + thirdSide) / 2;
// let AreaOfTriangle = Math.sqrt(s * (s - firstSide) * (s - secondSide) * (s - thirdSide));
// console.log(`Area of triangle is ${AreaOfTriangle.toFixed(2)}`);


//*******************************************************************************************************************


// 10- Find surface area of sphere
// let radius = 5;
// let surfaceArea = 4 * Math.PI * Math.pow(radius , 2);
// console.log(`Surface Area of sphere is ${surfaceArea.toFixed(2)}`);


//*******************************************************************************************************************


// 11- Find circumference and area of circle
// let radius = 4;
// let circumference = 2 * Math.PI * radius
// let areaOfCircle = Math.PI * Math.pow(radius, 2);
// console.log(`Surface Area of sphere is ${circumference.toFixed(2)} and area is ${areaOfCircle.toFixed(2)}`);


//*************************************** IF ELSE Day 8 to 11 ************************************************


// 12- Accept two numbers and print the greatest between them
// let firstNumber = +prompt("Enter first number");
// let secondNumber = +prompt("Enter second number");
// if (firstNumber > secondNumber) {
//     console.log(`${firstNumber} is greatest number`);
// } else {
//     console.log(`${secondNumber} is greatest number`);
// }


//*******************************************************************************************************************


// 13- Accept the gender from the user as char and print the respective greeting message
//    Ex - Good Morning Sir (on the basis of gender)
// let gender = prompt('Enter first letter of your gender');
// if(gender == "f" || gender == "F"){
//     alert(`Good Morning Mam!`);
// }else if (gender == "m" || gender == "M"){
//     alert(`Good Morning Sir!`); 
// }



//*******************************************************************************************************************


// 14- Extend the previous program and handle the wrong inputs.
// let gender = prompt('Enter your gender');
// if (gender == "f" || gender == "F" ) {
//     alert(`Good Morning Mam!`);
// } else if (gender == "m" || gender == "M" ) {
//     alert(`Good Morning Sir!`);
// } else {
//     alert(`Please enter a valid gender`);
// }


//*******************************************************************************************************************


// 15- Accept an integer and check whether it is an even number or odd.
// let num = +prompt("Enter a number");
// num % 2 == 0 ? alert(`${num} is even number`) : alert(`${num} is odd number`);


//*******************************************************************************************************************


// 16- Accept name and age from the user. Check if the user is a valid voter or not.
//  Vaid - Hello Shery, You are a valid voter.
//  Invalid - Sorry Shery, you can't cast the vote.
// let userName = prompt("Enter your name");
// let age = +prompt("Enter your age");
// age > 18 ? alert(`Hello ${userName}, You are a valid voter.`) : alert(`Sorry ${userName}, You can't the vote.`);


//  Part 2 - Print after how many years the user will be eligible
// let userName = prompt("Enter your name");
// let age = +prompt("Enter your age");
// age > 18 ? alert(`Hello ${userName}, You are a valid voter.`) : alert(`Sorry ${userName}, You can't the vote till ${18-age} years`);


//*******************************************************************************************************************


// 17- Accept a day number between 1-7 and print the corresponding dayname.
// let dayNumber = +prompt("Enter Any Number between 1 to 7");
// if (dayNumber === 1) {
//     console.log("Monday");
// } else if (dayNumber === 2) {
//     console.log("Tuesday");
// } else if (dayNumber === 3) {
//     console.log("Wednesday");
// } else if (dayNumber === 4) {
//     console.log("Thursday");
// } else if (dayNumber === 5) {
//     console.log("Friday");
// } else if (dayNumber === 6) {
//     console.log("Saturday");
// } else if (dayNumber === 7) {
//     console.log("Sunday");
// } else {
//     console.log("Invalid day number");
// }


//*******************************************************************************************************************


// 18- Accept three numbers and print the greatest among them
// let firstNumber = +prompt("Enter first number");
// let secondNumber = +prompt("Enter second number");
// let thirdNumber = +prompt("Enter third number");
// if (firstNumber > secondNumber && firstNumber > thirdNumber) {
//     alert(`${firstNumber} is greatest number`);
// } else if( secondNumber > firstNumber && secondNumber > thirdNumber){
//     alert(`${secondNumber} is greatest number`);
// }else{
//     alert(`${thirdNumber} is greatest number`);
// }



//*******************************************************************************************************************


// 19- Accept a year and check if it a leap year or not (google to find out what's a leap year) 
// let year = +prompt("Enter Year");
// if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
//     alert(`${year} is leap year`);
// } else {
//     alert(`${year} is not leap year`);
// }



//*******************************************************************************************************************


// 20- Shop discount - Description on Graphic
// let originalPrice = +prompt("Price of Product"); 
// let discountPercentage = +prompt("Discount percent of Product"); 
// let discountAmount = (originalPrice * discountPercentage) / 100;
// let finalPrice = originalPrice - discountAmount;
// console.log("The final price after discount is: Rs. ", finalPrice);



//*******************************************************************************************************************


// 21- Bijli Bill - Description on Graphic
// let unitsConsumed = +prompt("Consume Units"); 
// let ratePerUnit = 5;
// let totalBill = unitsConsumed * ratePerUnit;
// console.log("The total electricity bill is: Rs. ", totalBill);



//*******************************************************************************************************************


// 22- Accept an english alphabet from user and check if it is a consonent or a vowel;
// let char = prompt("Enter an English alphabet:");
// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//    console.log("Vowel");
// } else {
//    console.log("Consonent");
// }


//***************************************** LOOPS Day 12 to 16 *****************************************************


// 23- Accept an integer and Print hello world n times
// let num = +prompt("Enter a number");
// for (let i = 1; i <= num; i++) {
//     console.log(i);
// }


//*******************************************************************************************************************


// 24- Print natural number up to n.
// let num = +prompt("Enter a number");
// for (let i = 1; i <= num; i++) {
//     console.log(i);
// }


//*******************************************************************************************************************


// 25- Reverse for loop. Print n to 1.
// let num = +prompt("Enter a number");
// for (let i = num; i > 0; i--) {
//     console.log(i);
// }


//*******************************************************************************************************************


// 26- Take a number as input and print its table
//   5 * 1 = 5
//   5 * 2 = 10 ... up to 10 terms
// let num = +prompt("Enter a number");
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
// }



//*******************************************************************************************************************


// 27- Sum up to n terms.
// let num = +prompt("Enter a number");
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//     sum += i;
// }
// console.log(`Sum of ${num} terms is ${sum}`);



//*******************************************************************************************************************


// 28- Factorial of a number
// let num = +prompt("Enter a number");
// let fact = 1;
// for (let i = num; i > 0; i--) {
//     fact = fact * i;
// }
// console.log(`Factorial of ${num} is ${fact}`);



//*******************************************************************************************************************


// 29- Print the sum of all even & odd numbers in a range seperately.
// let start = +prompt("Enter a starting number");
// let end = +prompt("Enter a ending number");
// let sumOfEven = 0;
// let sumOfOdd = 0;
// for (let i = start; i <= end; i++) {
//     if (i % 2 == 0) {
//         sumOfEven += i;
//     } else {
//         sumOfOdd += i;
//     }
// }
// console.log(`sum of all even number is ${sumOfEven} & sum of all even number is ${sumOfOdd}`);


//*******************************************************************************************************************


// 30- Print all the factors of a number.
// let num = +prompt("Enter a number");
// for (let i = 1; i < num; i++) {
//     if (num % i == 0) {
//         console.log(i);
//     }
// }


//*******************************************************************************************************************


// 31- Print the sum of all factors of a number, 50 -> 1 + 2 + 5 + 10 + 25 = 43
// let num = 10;
// let sumOfFactor = 0;
// for(let i = 1; i < num; i++){
//     if(num % i == 0){
//         sumOfFactor = sumOfFactor + i;
//     }
// }
// console.log(`Sum of all factors of ${num} is ${sumOfFactor}`);


//*******************************************************************************************************************


// 32- Check if the number is Prime or not.
// let num = +prompt("Enter a number");
// let isPrime = true;
// for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//         isPrime = false;
//         break; // No need to check further if a divisor is found
//     }
// }
// if (isPrime && num > 1) { 
//     console.log('prime');
// } else {
//     console.log('not prime');
// }


//*******************************************************************************************************************



// 33- Write a program to take two inputs a, b & find the value of a raised to the power of b.
// Ex - a = 2, b = 5
// OP - 2^5 = 32
// let base = +prompt("Enter a base number");
// let power = +prompt("Enter a power number");
// let res = Math.pow(base, power);
// console.log(`${base} ^ ${power} = ${res}`);



// *******************************************************************************************************************


// 34- Seprate each digit of a number and print it on the new line ex - 123
// OP
// 3
// 2
// 1

//method 1
// let num = 135;
// let digit = num.toString().split('').reverse();
// digit.forEach((element)=>{
//   console.log(element)
// });newDigit = Number(element);

//method 2
// let num = 135;
// while (num > 0) {
//     let digit = num % 10;  // Get the last digit
//     num = Math.floor(num / 10);  // Remove the last digit from the number
//     console.log(digit);  // Print the digit
// }



// *******************************************************************************************************************


// 35- Sum of digits of a number, 936 = 18
// let number = 936;
// let sum = 0;
// while (number > 0) {
//     sum += number % 10;    //Add the last digit to sum                 (936 % 10 = 6)
//     number = Math.floor(number / 10); //Remove the last digit         (936 / 10 = 93.6)
// }
// console.log(`Sum of all digits is ${sum}`);



// *******************************************************************************************************************


// 36- Accept a number and print its reverse
// let number = 936;
// let reversedNumber = 0;
// while (number > 0) {
//     let lastDigit = number % 10;                         // Get the last digit
//     reversedNumber = reversedNumber * 10 + lastDigit;    // Append the last digit to the reversed number
//     number = Math.floor(number / 10);                    // Remove the last digit from the original number
// }
// console.log(reversedNumber); // Output: 639


// *******************************************************************************************************************


// 37- Accept a number and check if it is a pallindromic number (If number and its reverse are equal)
//   Ex - 12321 - Rerverse - 12321

// method 1
// let num = 121;
// let reverseNum = num.toString().split('').reverse().join('');
// let res = num == reverseNum ? `${num} is a pallindrome` : `${num} is not a pallindrome`;
// console.log(res);

//method 2
// let num = 121;
// let temp = num;
// let reverseNum = 0;
// while(num > 0){
//     let lastDigit = num % 10;
//     reverseNum = reverseNum * 10 + lastDigit; 
//     num = Math.floor(num / 10);
// }
// num = temp;
// if (num == reverseNum) {
//     console.log('Palindrome')
// } else {
//     console.log('Not Palindrome');
// }



// *******************************************************************************************************************



// 38- Accept a number and check if it is a strong number or not (Sum of factorial of each digit)
//   Ex- 145 = 1! + 4! + 5! = 145

// method 1
// let num = 235;
// let digits = num.toString().split('');
// let sumOfFactDigits = 0;
// digits.forEach((element) => {
//     let fact = 1;
//     let newElement = Number(element);
//     for(let i = newElement; i > 0; i--){
//         fact = fact * i;
//     }
//     // console.log(fact);
//     sumOfFactDigits = sumOfFactDigits + fact;
// });
// console.log(`Sum of factorial of ${digits} is ${sumOfFactDigits}`);


//method 2
// let num = 145;
// let sumOfFactDigits = 0;
// while (num > 0) {
//     let lastDigit = num % 10;
//     num = Math.floor(num / 10);
//     let fact = 1;
//     for (i = lastDigit; i > 0; i--) {
//         fact = fact * i;
//     }
//     // console.log(fact);
//     sumOfFactDigits = sumOfFactDigits + fact;
// }
// console.log(`Sum of factorial of all digits is ${sumOfFactDigits}`);



// *******************************************************************************************************************


// 39- Automorphic number 5 = 25 = 625 = 390625, 6=36, 76 = 5776

// method 1
// let num = 6;
// let digits = num.toString().split('');
// let squareOfNum = (Math.pow(num, 2)).toString().split('');
// if (digits.at(-1) == squareOfNum.at(-1)) {
//     console.log(`${num} is Automorphic Number`);
// } else {
//     console.log(`${num} is not Automorphic Number`);
// }

//method 2
// let num = 625;
// let temp = num;
// let square = num * num;

// let count = 0;
// while(num > 0){
//     count++;
//     num = Math.floor(num / 10);
// }
// let res = square % Math.pow(10, count);
// num = temp;
// num == res ? console.log("Automorphic Number") : console.log("Not automorphic Number");


// **************************************** DO WHILE, SWITCH Day 17 to 19 **********************************************


// 40- Print hello until user gives wrong input using do while
// let inp = 11;
// do {
//     console.log("hello");
// } while (inp != 10 );


// *******************************************************************************************************************


// 41- Make a choice based calculator using do while
// let op;
// do {
//      op = prompt("Enter operation to perform ( + , - , * , / , 0 to exit)");
//     if (op === '0') break;

//     let num1 = +prompt("Enter first number");
//     let num2 = +prompt("Enter second number");

//     if (op === '+') {
//         console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
//     } else if (op === '-') {
//         console.log(`Subtraction of ${num1} and ${num2} is ${num1 - num2}`);
//     } else if (op === '*') {
//         console.log(`Multiplication of ${num1} and ${num2} is ${num1 * num2}`);
//     } else if (op === '/') {
//         console.log(`Division of ${num1} and ${num2} is ${num1 / num2}`);
//     } else {
//         console.log("Invalid operation. Please try again.");
//     }
// } while (op !== '0');



// *******************************************************************************************************************


// 42- Print Weekday using Switch
// let dayNumber = +prompt("Enter Any Number between 1 to 7");
//  switch (dayNumber) {
//     case 1:
//         alert('Monday');
//         break;
//     case 2:
//         alert('Tuesday');
//         break;
//     case 3:
//         alert('Wednesday');
//         break;
//     case 4:
//         alert('Thursday');
//         break;
//     case 5:
//         alert('Friday');
//         break;
//     case 6:
//         alert('Saturday');
//         break;
//     case 7:
//         alert('Sunday');
//         break;
//     default:
//         alert('Please Enter a valid Number');
//         break;
// }



// *******************************************************************************************************************


// 43- Question 22 using Switch
// 22- Accept an english alphabet from user and check if it is a consonent or a vowel;
// let char = prompt("Enter an English alphabet:");
// switch (char) {
//     case 'a':
//         console.log("Vowel");
//         break;
//     case 'e':
//         console.log("Vowel");
//         break;
//     case 'i':
//         console.log("Vowel");
//         break;
//     case 'o':
//         console.log("Vowel");
//         break;
//     case 'u':
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonent");
//         break;
// }



// *******************************************************************************************************************


// 44- Project - Guess Game
//  Write a program that generates a random number and asks the user to guess what the number is.
//  If the user's guess is higher than the random number, the program should display "Too high, try again."
//  If the user's guess is lower than the random number, the program should display "Too low, try again."
//  The program should use a loop that repeats until the user correctly guesses the random number.

// let input;
// do {
//     let input = +prompt("Guess a number between 1 to 10");
//     let randomNumber = Math.floor(Math.random() * 10) + 1; 
//     console.log(randomNumber);
//     if (input === randomNumber) {
//         console.log("Welcome, you guessed the right number!");
//         break;
//     } else if (input > randomNumber) {
//         console.log("Too high, try again");
//     } else {
//         console.log("Too low, try again");
//     }
// } while (true);



// *******************************************************************************************************************


// 45- Project Restuarent v 1.0

// let choice;
// do {
//     console.log("For Indian Food type 1 \nFor Italian Food type 2 \nFor Russian Food type 3 \nFor Chinese Food type 4");
//     choice = prompt("Enter a choice number");

//     switch (choice) {
//         case '1':
//             console.log("For Paratha type 1 \nFor Samosa type 2 \nFor Biryani type 3");
//             choice = prompt("Enter a choice number");
//             switch (choice) {
//                 case '1':
//                     console.log("Paratha");
//                     break;
//                 case '2':
//                     console.log("Samosa");
//                     break;
//                 case '3':
//                     console.log("Biryani");
//                     break;
//             }
//             break;
//         case '2':
//             console.log("For Pizza type 1 \nFor Pasta type 2 \nFor Lasagna type 3");
//             choice = prompt("Enter a choice number");
//             switch (choice) {
//                 case '1':
//                     console.log("Pizza");
//                     break;
//                 case '2':
//                     console.log("Pasta");
//                     break;
//                 case '3':
//                     console.log("Lasagna");
//                     break;
//             }
//             break;
//         case '3':
//             console.log("For Medovik type 1 \nFor Solyanka type 2 \nFor Pelmeni type 3");
//             choice = prompt("Enter a choice number");
//             switch (choice) {
//                 case '1':
//                     console.log("Medovik");
//                     break;
//                 case '2':
//                     console.log("Solyanka");
//                     break;
//                 case '3':
//                     console.log("Pelmeni");
//                     break;
//             }
//             break;
//         case '4':
//             console.log("For Wonton Soup type 1 \nFor Dim Sum type 2 \nFor Hot Pot type 3");
//             choice = prompt("Enter a choice number");
//             switch (choice) {
//                 case '1':
//                     console.log("Wonton Soup");
//                     break;
//                 case '2':
//                     console.log("Dim Sum");
//                     break;
//                 case '3':
//                     console.log("Hot Pot");
//                     break;
//             }
//             break;
//     }
// } while (choice !== '0');



// *************************************** NESTED LOOP / PATTERN Day 20 to 21 **********************************************



// 46- Right Triangle - Star
// *
// * *
// * * *
// * * * *
// * * * * *

// let rowNum = 5;
// for (let i = 1; i <= rowNum; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '*';        
//     }
//     console.log(row);
// }



// *******************************************************************************************************************


// 47- Right Triangle - Number
// 1
// 1 2
// 1 2 3 
// 1 2 3 4
// 1 2 3 4 5

// let rowNum = 5;
// for (let i = 1; i <= rowNum; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }
//     console.log(row)
// }



// *******************************************************************************************************************


// 48- Right Triangle - Alphabet
// A
// A B
// A B C
// A B C D
// A B C D E

// let rowNum = 5;
// let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// for(let i = 0; i <= rowNum; i++){
//     let row = '';
//     for(let j = 0; j <= i; j++){
//         row += char[j];
//     }
//     console.log(row);
// }



// *******************************************************************************************************************


// 49- Inverted Right Triangle
// * * * * *
// * * * *
// * * *
// * *
// *

// let rowNum = 5;
// for(let i =rowNum; i >= 1; i--){
//     let row = '';
//     for(let j = 1; j <= i; j++){
//         row += '* ';
//     }
//     console.log(row);
// }


// *******************************************************************************************************************


// 50- Mirrored Right Triangle
//                 *
//             * *
//         * * *
//     * * * *
// * * * * *


// *******************************************************************************************************************


// 51- Triangle
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// let num = 5;
// for (let i = 1; i < num; i++) {
//     let row = '';
//     for (let j = num; j >= 1; j--) {
//         row += '* ';
//     }
//     console.log(row);
// }


// *******************************************************************************************************************

// 52- V - Min Height = 3
// *               *
//   *           *
//     *       *
//       *   *
//         *

// let num = 5;
// for (let i = 0; i < num; i++) {
//     let patern = '';
//     for (let j = 0; j < 2 * num - 1; j++) {
//       if (j === i || j === 2 * num - 2 - i ) {
//         patern += '*';
//       } else {
//         patern += ' ';
//       }
//     }
//     console.log(patern);
//   }

// *******************************************************************************************************************


// 53- X
// *           *
//    *     *
//       *
//    *     *
// *           *

// let num = 5;
// for (let i = 0; i < num; i++) {
//     let patern = '';
//     for (let j = 0; j < num; j++) {
//       if (j === i || j === num - 1 - i) {
//         patern += '*';
//       } else {
//         patern += '  ';
//       }
//     }
//     console.log(patern);
//   }




// *********************************************** ARRAY Day 22 to 29 ************************************************


// 54- Accept size n from user and create a n size array then take n inputs into the and finally Print the sum & Avg of all elements.

// let arr = [];
// let arrLength = +prompt("Enter length of array");
// let sum = 0;
// for(let i = 1; i <= arrLength; i++){
//     let input = +prompt("Enter a number");
//     arr.push(input);
//     sum += i;
// }
// console.log(arr);
// console.log("Sum = ", sum);
// let avg = sum / arrLength;
// console.log("Average = " ,avg);


// *******************************************************************************************************************


// 55- Find the greatest element. [2, 96, 69, 77, 145, 20] = Max element = 145 found at 4 index

// method 1
// let arr = [2, 96, 69, 77, 145, 20];
// let maxElement = Math.max(...arr);
// console.log(`Max number is ${maxElement}`);

//method 2 
// let arr = [2, 96, 69, 77, 145, 20];
// let maxElement = arr[0];
// let index = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//         maxElement = arr[i];
//         index = i;
//     }
// }
// console.log(`Max Element = ${maxElement} found at ${index} index.`);



// *******************************************************************************************************************


// 56- Find the second greatest element [2, 96, 69, 77, 145, 20] = Second greatest element = 96

// let arr = [2, 96, 69, 77, 145, 20];
// let maxElement = arr[0];
// let secondMaxElement = arr[0];
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] > maxElement) {
//        secondMaxElement = maxElement;
//        maxElement = arr[i];
//    } else if (arr[i] > secondMaxElement && arr[i] != maxElement){
//         secondMaxElement = arr[i];
//    }
// }
// console.log(secondMaxElement);



// *******************************************************************************************************************

// 57- Check if array is sorted in increasing order or not.
//    Ex 1 - [ 1, 5, 8, 9, 10, 15 ] - OP = "YES"
//    Ex 2 - [ 1, 8, 6, 9, 10, 15 ] - OP = "NO"

// let arr = [ 1, 8, 6, 9, 10, 15 ];
// let isSorted = "Yes";
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i-1]) {
//         isSorted = "No";
//         break;
//     }
// }
// console.log(isSorted);



// *******************************************************************************************************************


// 58- Take n integer inputs from user and store them in an array.
//     Now, copy all the elements in an another array but in reverse order and print it.

// let arr = [];
// let arrLength = +prompt("Enter length of array");
// for (let i = 0; i < arrLength; i++) {
//   let input = +prompt("Enter the number");
//   arr.push(input);
// }
// console.log("Original Array = ", arr);

// let start = 0;
// let end = arr.length - 1;
// while (start < end) {
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;
//   start++;
//   end--;
// }
// console.log("Reverse Array = ", arr);



// *******************************************************************************************************************


// 59- Array left Rotation by 1

// let arr = [1, 2, 3, 4, 5];

// if (arr.length !== 0) {
//   let firstElement = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = firstElement;
// }
// console.log(arr); // Outputs: [2, 3, 4, 5, 1]




// *******************************************************************************************************************


// 60- Array left rotation by K elements

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let n = arr.length;
// k = k % n; 
// // Left rotate by k elements
// let result = [];
// for (let i = 0; i < n; i++) {
//   result[i] = arr[(i + k) % n];
// }

// console.log(result); // Outputs: [3, 4, 5, 1, 2]



// *******************************************************************************************************************


// 61- Array Reverse Without Using Extra space

// let arr = [1, 2, 3, 4, 5];
// let start = 0;
// let end = arr.length - 1;

// while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
// }
// console.log(`Reverse Array = ${arr}`);



// *******************************************************************************************************************


// 62- Linear Search an array - If element found print the index else -1

// let arr = [5, 8, 1, 4, 2];
// let target = 2;
// let index = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] == target) {
//         index = i;
//     }
// }
// console.log("index = ", index);




// *******************************************************************************************************************


// 63- Binary Search. If element found print the index else -1

// let arr = [5, 8, 1, 4, 2];
// let target = 4;

// function findBinarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if(arr[mid] === target){
//             return mid;
//         }else if(arr[mid] < target){
//             left = mid + 1;
//         }else if(arr[mid] > target){
//             right = mid - 1;
//         }
//     }
//     return -1;
// }

// let result= findBinarySearch(arr, target);
// console.log(result);




// *******************************************************************************************************************


// 64- Bubble Sort.



// *******************************************************************************************************************

// 65- Move all the negative elements on left side and positive elements on
// right side O(n).
// 66- Print the count of subarrays whose sum is equal to the target.
// Ex - {1,2,3,7,5}, T = 12    O/P - 2 - [ {2,3,7}, {7,5} ] - Both the subarrays
// has sum 12
// 67- Strong number using methods
// 68- Special number using methods.
// 69- Leetcode 1929 - Concatenation of array
// 70- Leetcode 1920 - Build Array from Permutation
























































// **********************************************************Other Questions************************************************************


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