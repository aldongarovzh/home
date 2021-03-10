// 1 (Easy 1)
// var students = [
//     {
//         name: 'Test Name 1',
//         surname: 'Test Surname 1',
//         age: 20
//     },
//     {
//         name: 'Test Name 2',
//         surname: 'Test Surname 2',
//         age: 15
//     },
//     {
//         name: 'Test Name 3',
//         surname: 'Test Surname 3',
//         age: 25
//     },
//     {
//         name: 'Test Name 4',
//         surname: 'Test Surname 4',
//         age: 30
//     },
//     {
//         name: 'Test Name 5',
//         surname: 'Test Surname 5',
//         age: 17
//     },
//     {
//         name: 'Test Name 6',
//         surname: 'Test Surname 6',
//         age: 19
//     },
//     {
//         name: 'Test Name 7',
//         surname: 'Test Surname 7',
//         age: 23
//     },
//     {
//         name: 'Test Name 8',
//         surname: 'Test Surname 8',
//         age: 33
//     }
// ]

// for(var i = 0; i < students.length; i++){
//     if(students[i].age > 19){
//         console.log(students[i]);
//     }
// }




// 2 (Easy 2)
// var students = [
//     {
//         name: 'Name1',
//         surname: 'Surname1',
//         age: 20,
//         grade: 55
//     },
//     {
//         name: 'Name2',
//         surname: 'Surname2',
//         age: 23,
//         grade: 85
//     },
//     {
//         name: 'Name3',
//         surname: 'Surname3',
//         age: 25,
//         grade: 90
//     },
//     {
//         name: 'Name4',
//         surname: 'Surname4',
//         age: 24,
//         grade: 89
//     },
//     {
//         name: 'Name5',
//         surname: 'Surname5',
//         age: 23,
//         grade: 75
//     },
//     {
//         name: 'Name6',
//         surname: 'Surname6',
//         age: 26,
//         grade: 91
//     },
//     {
//         name: 'Name7',
//         surname: 'Surname7',
//         age: 27,
//         grade: 77 
//     },
//     {
//         name: 'Name8',
//         surname: 'Surname8',
//         age: 25,
//         grade: 88
//     },
//     {
//         name: 'Name9',
//         surname: 'Surname9',
//         age: 28,
//         grade: 100
//     },
//     {
//         name: 'Name10',
//         surname: 'Surname10',
//         age: 24,
//         grade: 95 
//     }
// ]

// for(var i = 0; i < students.length; i++){
//     if(students[i].grade >= 85 && students[i].grade <= 100){
//         console.log(students[i]);
//         document.write(`<h3> ${students[i].name} </h3>`);
//     }
// }



// 3 (Medium 1)
// var obj = {
//     numbers: [1, 4, 5, -5, 2, -6, 10, -10, 0, 0, 0],
//     positive: [],
//     negative: []
// }

// for(var number of obj.numbers){
//     if(number > 0){
//         // obj.positive.push(number);
//         obj.positive[obj.positive.length] = number;
//     } else if(number < 0){
//         // obj.negative.push(number);
//         obj.negative[obj.negative.length] = number;
//     } else {
//         obj.equalToZero = [];
//         obj.equalToZero[obj.equalToZero.length] = number;
//     }
// }

// console.log(obj);

// 4 (Hard 1)

// let clinic = {
//     clinic_name : [],
//     clinic_address : [],
//     animals : [
//         {
//             animal_name : 'testName1',
//             animal_type : 'testType1',
//             animal_owner : 'testOwner1'
//         },
//         {
//             animal_name : 'testName2',
//             animal_type : 'testType2',
//             animal_owner : 'testOwner2'
//         },
//         {
//             animal_name : 'testName3',
//             animal_type : 'testType3',
//             animal_owner : 'testOwner3'
//         },
//         {
//             animal_name : 'testName4',
//             animal_type : 'testType4',
//             animal_owner : 'testOwner4'
//         }
//     ]
// }

// cart = [];

// for(let index in clinic){
//     console.log(index);
//     for(let indexKey in clinic[index]){
//         console.log(clinic.animals[indexKey]);
//         cart[cart.length] = clinic.animals[indexKey];
//     }
// }

// clinic[clinic.length] = cart;
// console.log(clinic);



// ниже попытка добавить объекты объектом как ключ clinic, а не как массив под ключом underfined в clinic. По итогу не получилось так сделать



// let clinic = {
//     clinic_name : [],
//     clinic_address : [],
//     animals : [
//         {
//             animal_name: 'name1',
//             animal_type: 'type1',
//             animal_owner: 'owner1'
//         },
//         {
//             animal_name: 'name2',
//             animal_type: 'type2',
//             animal_owner: 'owner2'
//         },
//         {
//             animal_name: 'name3',
//             animal_type: 'type3',
//             animal_owner: 'owner3'
//         },
//         {
//             animal_name: 'name4',
//             animal_type: 'type4',
//             animal_owner: 'owner4'
//         }
//     ]
// }
// cart = [];
// for(let index in clinic){
//     // console.log(clinic[index]);
//     for(let indexKey in clinic[index]){
//         // console.log(indexKey);
//         // console.log(clinic.animals[indexKey]);
//         cart[cart.length] = clinic.animals[indexKey];

//         // clinic[clinic.length] = clinic.animals[indexKey]; почему если добавляю так, то добавляется только послдений объект
//     }
// }

// console.log(cart);
// // console.log(clinic)

// for(let value of cart){
//     clinic[clinic.length] = value;
// }

// console.log(clinic);