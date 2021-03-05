// 1
// var str = "Hello World!";
// console.log(str);

// 2
// var str1 = "Hello ";
// var str2 = "World!";
// console.log(str1 + str2);


// 3
// function calc(){
//     var x = document.getElementById("inp").value * 3600;
//     alert(x);
// }


// 4
// var a = 10;
// var b = 2;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);


// 5
// var c = 15;
// var d = 2;
// var result;

// result = c + d;
// console.log(result);

// 6
// var a = 10;
// var b = 2;
// var c = 5;

// console.log(a + b + c);


// 7
// var a = 6;
// var b = 8;
// var c;

// c = ((a * a) + (b * b));

// console.log(Math.sqrt(c));


// 8
// var x = 5;
// var y = 10;
// var z = 15;

// console.log((x + y + z) / 3);


// let username = prompt('Enter username');


// if(username.toLowerCase() == "decode"){
//     console.log("Hello boss");
// } else {
//     console.log("Username is incorrect!");
// }







// задачи на if else


// 1
// let entered = prompt('Enter a number of finger');

// var first = 'большой палец';
// var second = 'указательный палец';
// var third = 'средний палец';
// var fourth = 'безымянный';
// var fifth = 'мизинец';

// if(entered == 1){
//     console.log(first);
// } else if(entered == 2){
//     console.log(second);
// } else if(entered == 3){
//     console.log(third);
// } else if(entered == 4){
//     console.log(fourth);
// } else if(entered == 5){
//     console.log(fifth);
// }


//2
// let a = prompt('enter a first number');
// let b = prompt('enter a second number');
// var c = a % b;

// if(b > 0 && c == 0){
//     console.log(a, b)
//     console.log('Делится');
// } else if(b > 0 && c > 0){
//     console.log(a, b);
//     console.log('Не делится, остаток', c);
// } else{
//     console.log('Делить на 0 нельзя');
// }


//3
// let a = parseInt(prompt('enter a first number'));
// let b = parseInt(prompt('enter a second number'));

// if(a > 0 && b > 0){
//     console.log(a + b);
// } else{
//     console.log('Условие не выполняется');
// }


//4
// let a = prompt('enter a first number');
// let b = prompt('enter a second number');
// let c = prompt('enter a third number');
// var a1 = a % 5;
// var b1 = b % 5;
// var c1 = c % 5;

// if(a1 == 0 && b1 == 0 && c1 == 0){
//     console.log(a, b, c);
// } else if(a1 == 0 && b1 == 0){
//     console.log(a, b);
// } else if(a1 == 0 && c1 == 0){
//     console.log(a, c);
// } else if(b1 == 0 && c1 == 0){
//     console.log(b, c);
// }

//Medium/hard
//1
// let a = parseInt(prompt('enter a first number'));
// let b = parseInt(prompt('enter a second number'));
// let c = parseInt(prompt('enter a third number'));
// let d = parseInt(prompt('enter a fourth number'));
// sumEven = 0;
// sumOdd = 0;

// if(a % 2 == 0){
//     sumEven = sumEven + a;
// } else {
//     sumOdd = sumOdd + a;
// }

// if(b % 2 == 0){
//     sumEven = sumEven + b;
// } else {
//     sumOdd = sumOdd + b;
// }

// if(c % 2 == 0){
//     sumEven = sumEven + c;
// } else {
//     sumOdd = sumOdd + c;
// }

// if(d % 2 == 0){
//     sumEven = sumEven + d;
// } else {
//     sumOdd = sumOdd + d;
// }

// console.log('Сумма четных чисел =', sumEven);
// console.log('Сумма нечетных чисел =', sumOdd);


//2
let year = Math.floor(Math.random() * 2500);
console.log('Year =', year);
var normalYear = year % 4 != 0 || year % 100 == 0 && year % 400 != 0;
if(normalYear){
    console.log('Обычный год');
} else {
    console.log('Високосный год');
}