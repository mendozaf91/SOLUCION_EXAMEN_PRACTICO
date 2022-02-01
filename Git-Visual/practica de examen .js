//EJERCICIO 1
// var numero1 = 5;
// var numero2 = 8;

// if(numero1 < numero2) {
//     console.log("numero1 no es mayor que numero2");
// }
// if(numero2 > 0) {
//     console.log("numero2 es positivo");
// }
// if(numero1 != 0) {
//     console.log("numero1 es negativo o distinto de cero");
// }
// if(numero1+ 1 < numero2) {
//     console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }









//EJERCICIO 2
// function factorialRecursivo(n) {
//     if (n == 0) {
//         return 1;
//     } else {
//         return factorialRecursivo(n - 1) * n;
//     }
// }
// console.log(factorialRecursivo(3))








//EJERCICIO 3  NOTA: en mi id no sale en pantalla la función de alertt, lo pegué en la consola de chrome y ahí sí corre el código.
// function calcula(num)
// {
// if (num%2==0) {
//    alert("El numero introducido es par");
// } else {
//    alert("El numero introducido es impar");
// }
// }
// console.log(calcula(9))








//EJERCICIO  4
// function esPalindromo(cadena){
//     let Array= cadena.split("");
//     let reverse= Array.reverse();

//     return cadena == reverse.join("") ? "Sí es" : "No ess"
// }

//     console.log(esPalindromo("Luzazul"));








//EJERCICIO 5


// class persona {
//   nombre;
//   edad;
//   obtDetalles() {
//       console.log(this);
//   }
//   constructor(nombre, edad) {
//       this.nombre = nombre;
//       this.edad = edad;
//   }
// }
// class estudiante extends persona {
//   constructor(nombre, edad, calificacion) {
//       super(nombre, edad, calificacion);
//       this.calificacion = calificacion;
//   }
//   obtDetalles(){
//       console.log(this);
//   }
// }
// class profesor extends persona {
//   constructor(nombre, edad, asignatura = "js", nivel = "Basico") {
//       super(nombre, edad, asignatura, nivel);
//       this.asignatura = asignatura;
//       this.nivel = nivel;
//   }
//   obtDetalles(){
//       console.log(this);
//   }
// }
// class grupo  {
//   promedio;
//   constructor(profesor, estudiantes = []) {
//       super(nombre, edad, promedio, estudiantes)
//       this.profesor = profesor;
//       this.estudiantes = estudiantes;
//   }
//   calificar (){
//       for(let i = 0 ;i < this.estudiantes.length; i++){
//           this.estudiantes[i].calificacion = Math.random() * 10
//       }
//       console.log(this.estudiantes);
//   }








//EJERCICIO 6
// let possibleCombinacion = (carro) =>{
//     let combinacion = [];
//       for(let i = 0 ;i < carro.length; i++)
//     {
//         for(let j = i + 1; j< carro.length + 1; j++)
//         {
//             combinacion.push(carro.slice(i , j));
//         }
//     }
//    return combinacion;
// }
// console.log(possibleCombinacion('fiat'));
