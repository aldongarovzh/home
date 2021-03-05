// 1
//for
// var array = [1, -2, 4, 5, 6, -10, 5];
// var sum = 0;

// for(var i = 0; i < array.length; i++){
//     if(array[i] > 0 && array[i] % 2 == 0){
//         sum = sum + array[i];
//         document.write(`<p> ${array[i]} </p>`);
//     }
// }
// document.write(`<p> ${sum} </p>`);


// while
// var array = [1, -2, 4, 5, 6, -10, 5];
// var i = 0;
// var sum = 0;
// while(i < array.length){
//     if(array[i] % 2 == 0 && array[i] > 0){
//         sum = sum + array[i];
//     }
//     i++;
// }
// document.write(`<p> ${sum} </p>`);




//2
//while
// var array = [1, -2, 4, 5, 6, -10, 5];
// var i = 0;
// var a = 0;

// while(i < array.length){
//     if(a > array[i]){
//         a = array[i];
//     }
//     i++;
// }

// document.write(`<p> ${a} </p>`);


//for
// var array = [1, -2, 4, 5, 6, -10, 5];
// var a = 0;

// for(var i = 0; i < array.length; i++){
//     if(a > array[i]){
//         a = array[i];
//     }
// }

// document.write(`<p> ${a} </p>`);



//3
// var array = [1, -2, 4, 5, 6, -10, 5, 4, 4, -2];
// var number;
// var count = 0;

// for(var i = 0; i < array.length; i++){
//     number = array[i];
//     if(array[i] == number){
//         count++;
//     }
// }


//4
// var array = [];
// var sum = 0;
// var mult = 1;

// for(var i = 0; i < 3; i++){
//     array[i] = +prompt('Enter a number');
//     sum = sum + array[i];
//     mult = mult * array[i];
// }

// document.write(`<p> ${array} </p>`);
// document.write(`<p> ${sum} </p>`);
// document.write(`<p> ${mult} </p>`);

// 5
// var array = [];
// var countNull = 0;
// var countMax = 0;
// var countMin = 0;

// for(var i = 0; i < 20; i++){
//     array[i] = parseInt(Math.random() * (4 - (-5) + (-5)));
//     if(array[i] > 0){
//         countMax++;
//     } else if(array[i] < 0){
//         countMin++;
//     } else{
//         countNull++;
//     }
// }

// document.write(`<p> ${array} </p>`);
// document.write(`<p> ${countMax} </p>`);
// document.write(`<p> ${countMin} </p>`);
// document.write(`<p> ${countNull} </p>`);

// 6
// var array = [12, 104, 81];
// var sum = 0;

// for(var i = 0; i < array.length; i++){
//     var a, b, c;

//     if(array[i] > 99 && array[i] < 999){
//         a = Math.floor(array[i] / 100);
//         b = array[i] % 100;
//         b = Math.floor(b / 10);
//         c = array[i] % 10;
//         sum = sum + a + b + c;
//     } else {
//         a = Math.floor(array[i] / 10);
//         b = array[i] % 10;
//         sum = sum + a + b;
//         };
// }
// document.write(`<p> ${array} </p>`);
// document.write(`<p> ${sum} </p>`);

//7
// var array = [];
// var x;
// var y;

// for(var i = 0; i < 5; i++){
//     array[i] = parseInt(Math.random() * (100 - 0 + 1) + 0);
// }

// x = array[0];

// for(var i = 0; i < array.length; i++){
//     if(x < array[i]){
//         x = array[i];
//         y = i;
//     }
// }

// document.write(`<p> ${array} </p>`);
// document.write(`<p> Наибольший элемент: ${x} </p>`);
// document.write(`<p> Порядковый номер элемента: ${y} </p>`);


