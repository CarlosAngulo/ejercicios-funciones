// ---------------
// EJERCICIO 01 (mix)
// ---------------

const patients = [
    {name: 'Andrea', age: 26, gender: 'F'},
    {name: 'Adriana', age: 24, gender: 'F'},
    {name: 'Carlos', age: 35, gender: 'M'},
    {name: 'Christian', age: 24, gender: 'M'},
    {name: 'Laura', age: 24, gender: 'F'},
]

console.log( patient[0] );
// Ahora deseo obtener el nombre del segundo paciente


// ---------------
// EJERCICIO 02 (mix)
// ---------------

// const patients = [
//     {name: 'Andrea', age: 26, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 35, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'M'},
//     {name: 'Laura', age: 24, gender: 'F'},
// ]

// for ( let i = 0; i < ?; i++ ) {
//     const patient = ?;
//     const patientNumber = i + 1;
//     const message = 'Nombre del paciente ' + patientNumber + ': ' + patient.name;
//     console.log( message );
// }


// ---------------
// EJERCICIO 03 (loop)
// ---------------

// const patients = [
//     {name: 'Andrea', age: 10, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 17, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'M'},
//     {name: 'Laura', age: 24, gender: 'F'},
// ]

// let patientToRemit = patients[0];

// if ( patientToRemit.age < 18 ) {
//     console.log( patientToRemit + ' remitido a pediatría');
// } else {
//     console.log( patientToRemit + ' remitido a medicina general'); 
// }

// ---------------
// EJERCICIO 04 (funciones)
// ---------------

// const patients = [
//     {name: 'Andrea', age: 10, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 17, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'M'},
//     {name: 'Laura', age: 24, gender: 'F'},
// ]

// let patientToRemit = patients[0];

// remitir();

// function remitir() {
//     if ( patientToRemit.age < 18 ) {
//         console.log( patientToRemit + ' remitido a pediatría');
//     } else {
//         console.log( patientToRemit + ' remitido a medicina general'); 
//     }
// }

// ---------------
// EJERCICIO 05
// ---------------

// const patients = [
//     {name: 'Andrea', age: 10, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 17, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'M'},
//     {name: 'Laura', age: 24, gender: 'F'},
// ]

// let patientToRemit = patients[0];
// remitir();
// let patientToRemit = patients[1];
// remitir();
// let patientToRemit = patients[2];
// remitir();
// let patientToRemit = patients[3];
// remitir();

// function remitir() {
//     if ( patientToRemit.age < 18 ) {
//         console.log( patientToRemit + ' remitido a pediatría');
//     } else {
//         console.log( patientToRemit + ' remitido a medicina general'); 
//     }
// }

// ---------------
// EJERCICIO 06 (funciones con argumentos)
// ---------------

// const patients = [
//     {name: 'Andrea', age: 10, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 17, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'M'},
//     {name: 'Laura', age: 24, gender: 'F'},
// ]

// remitir( patients[0] );
// remitir( patients[1] );
// remitir( patients[2] );
// remitir( patients[3] );

// function remitir( patient ) {
//     if ( patient.age < 18 ) {
//         console.log( patient + ' remitido a pediatría');
//     } else {
//         console.log( patient + ' remitido a medicina general'); 
//     }
// }

// ---------------
// EJERCICIO 07 (funciones con argumentos)
// ---------------

// const patients = [
//     {name: 'Andrea', age: 10, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 17, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'M'},
//     {name: 'Laura', age: 24, gender: 'F'},
// ]

// for ( let i = 0; i < patients.length; i++ ) {
//     remitir( ? );
// }

// function remitir( patient ) {
//     let room, genderEnd;
    
//     if ( patient.age < 18 ) {
//         room = 'pediatría';
//     } else {
//         room = 'medicina general'; 
//     }

//     if ( patient.gender === 'M') {
//         genderEnd = 'o';
//     } else if (patient.gender === 'F') {
//         genderEnd = 'a';
//     } else {
//         genderEnd = 'e';
//     }

//     console.log( patient.name + ` remitid${genderEnd} a ` + room ); 
// }


// ---------------
// EJERCICIO 08 (funciones que retornan valores)
// ---------------

// const patients = [
//     {name: 'Andrea', age: 10, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 17, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'M'}
// ]

// for ( let i = 0; i < patients.length; i++ ) {
//     remitir( ? );
// }

// function remitir( patient ) {
//     const room = selectRoom( patient.age );
//     let genderEnd;

//     if ( patient.gender === 'M') {
//         genderEnd = 'o';
//     } else if (patient.gender === 'F') {
//         genderEnd = 'a';
//     } else {
//         genderEnd = 'e';
//     }

//     console.log( patient.name + ` remitid${genderEnd} a ` + room ); 
// }

// function selectRoom( patientAge ) {
//     let room = 'pediatría';
//     if ( patientAge >= 18 ) {
//         room = 'medicina general'; 
//     }
//     return room;
// }

// Crear una función que retorne el genderEnd


// ---------------
// EJERCICIO 09 ( objeto arguments de las funciones )
// ---------------

// const sumaDigitos = sumar(1, 2, 3, 4, 5, 6, 7, 8, 9);

// function sumar() {
//     console.log( arguments )
// }

// console.log( suma )

// Completar la función para que retorne el valor deseado 

// ---------------
// EJERCICIO 10 ( Scope )
// ---------------

// function alcance(edad) {
//     if (true) {
//         var nombre = "Carlos";
//         const apellido = "Angulo";
//         let genero = "Masculino";
//     }
//     console.log(1, edad);
//     console.log(2, nombre);
//     console.log(3, apellido);
//     console.log(4, genero);
// }

// alcance(34);

// ---------------
// EJERCICIO 11 ( hoisting )
// ---------------

// console.log( 1, a );
// console.log( 2, myFunction );

// var a = "Hola"; // No funciona con const ni con let
// function myFunction() {
//     return;
// }

// ---------------
// EJERCICIO 12 ( asignación a variables )
// ---------------

// console.log( 1, a );
// console.log( 2, myFunction );

// var a = "Hola"; // No funciona con const ni con let
// var myFunction = function () {
//     return;
// }

// ---------------
// EJERCICIO 13 ( asignación a variables )
// ---------------

// const writeMessage = myFunction;

// function myFunction() {
//     console.log('hola mundo')
// }

// console.log( writeMessage );
// console.log( writeMessage() );


// ---------------
// EJERCICIO 14 ( son pasadas por valor )
// ---------------

// let writeMessage = myFunction;

// function myFunction() {
//     console.log('hola mundo')
// }

// writeMessage = "a";

// console.log( writeMessage );

// ---------------
// EJERCICIO 15 ( callbacks: funciones como parámetro de otras funciones )
// ---------------

// function imprimir( ejecutar, argumento1, argumento2 ) {
//     console.log( ejecutar( argumento1, argumento2 ) );
// }

// function sumar (x, y) {
//     return x + y;
// }

// function multiplicar (x, y) {
//     return x * y;
// }

// imprimir( sumar, 5, 3);
// imprimir( multiplicar, 5, 3);

// imprimir( function(x, y) { return y - x }, 5, 3 );


// ---------------
// EJERCICIO 16 ( Funciones Anónimas )
// ---------------

function (argument) {
    console.log(argument);
}

// Uncaught SyntaxError: Function statements require a function name

// ---------------
// EJERCICIO 16 ( asignación a variables )
// ---------------

// const myFunction = function () {
//     console.log('hola mundo')
// }

// const writeMessage = myFunction;

// console.log( writeMessage );
// console.log( writeMessage() );

// ---------------
// EJERCICIO 16 ( Arrow Functions )
// ---------------

// const traditionalSum = function  ( x , y ) {
//     return x + y; 
// }

// const arrowFunctionSum = (x, y) => { 
//     const sum = x + y;
//     return sum;
// }

// const shortArrowFunctionSum = (x, y) => x + y; 

// console.log( traditionalSum ( 3, 5 ));
// console.log( arrowFunctionSum ( 3, 5 ));
// console.log( shortArrowFunctionSum ( 3, 5 ));

// ---------------
// EJERCICIO 17 ( Funciones anónimas autoejecutables )
// ---------------

// const sequence = [1, 2, 3, 4, 5];

// sequence.forEach( function(item) {console.log(item)} );
// sequence.forEach( item => console.log(item) );
// sequence.forEach( console.log );


// ---------------
// EJERCICIO 18 ( palabra reservada this )
// ---------------

// Es el objeto que posee el código

// console.log(this);

// // No es una variable, es una palabra reservada, por lo que no se puede reasignar
// this = "Hola mundo";

// function myFunction() {
//     return this;
// }

// console.log( myFunction() );


// ---------------
// EJERCICIO 19 ( funciones como métodos )
// ---------------

// var myObject = {
//     firstName:"Adriana",
//     lastName: "Maguea",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// myObject.fullName();

// ---------------
// EJERCICIO 20 ( closure )
// ---------------

// let name = "Carlos";

// function getFullName( surename ) {
//     let middleName = "Alberto";
//     function innerFunction() {
//         const fullName = name + " " + middleName + " " + surename;
//         console.log( fullName );
//     }
//     innerFunction();
// }

// getFullName("Angulo");

// ---------------
// EJERCICIO 21 ( closure )
// ---------------

// var myObject = {
//     firstName:"Adriana",
//     lastName: "Maguea",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// myObject.fullName();

