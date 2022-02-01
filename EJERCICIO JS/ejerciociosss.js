// let nombre1 = "Turtle"; //mis amigos son bien putos
// let nombre2 = "Nito";
// let nombre3 = "Brandini";

// let edad1="25"
// let edad2="25"

// if (nombre1 == nombre2) {
//     console.log("Son putos diferentes");
//   if (edad1==edad2){
//     console.log("Son putos jóvenes");
// }
// }else if (nombre1 != nombre3) {
//   console.log("Son putisimos");
// } else {
//   console.log("Ninguno es igual, aún asi todos son putos");
// }

// let culo= 5

// if(culo<=10){
//     console.log("Es un culo cagado");
// }else if(culo >=11 && culo<=33){
//     console.log("Ese culo ya pide verga");
// }else if(culo>=33){
//     console.log("Ese culo ya tiene rato que se la traga");
// }





//OPERADOR switch
// let culito= 33;

// switch(culito){
//     case 15:
//     console.log("es una naca sabrosa");
// break;

//     case 25:
//     console.log("es una desculada que quiere una culiadisima");
// break;

//     case 33:
//     console.log("coge y corre");
// break;
// default:
// console.log("es vato");
// }


//OPERADOR TERNARIO
//const cuenta= 4000
// res= cuenta<5000? "le gusta la verga ": "le gusta la verga parada de negro";
// console.log(res);

// CICLO FOR
//Hay que investigar el ejemplo del profe para ver como se puden imprimir el resultado de varios numeros
// for (let pasos = 0 ;pasos <3; pasos++){

//     console.log("camina un paso hacia el este esupida  " + pasos);
// }



// //CICLO WHILR
// let i=0;
// let camote;
// while (i<5) {  // WHILE significa mientras
//     camote = "Vamo a culiar " + i +" unas buenas nalgas";
//     console.log(camote);
//     i++
// }



///BREAK PARA TERMINAR EL CICLO, SE PONE CON UNA CONDICION
// for (let pasos=0;pasos<5;pasos++ ){
// if(pasos ===3) {break;}
// console.log("con el famosisimo break "+pasos);
// }


//CONTIMUE EXACTANBETE EL DE ARRIBA, SOLO CAMBIAS CONTIBUE POR EL BREAK
// for (let pasos=0;pasos<5;pasos++ ){
//     if(pasos ===3) {continue;}
//     console.log("con el famosisimo break "+pasos);
//     }


//CICLO FOR ANIDADO 
// var temperaturas_medias_ciudad0= new Array(3)
//  temperaturas_medias_ciudad0[0]=12
//  temperaturas_medias_ciudad0[1]=10
//  temperaturas_medias_ciudad0[2]=11

//  var temperaturas_medias_ciudad1= new Array(3)
//  temperaturas_medias_ciudad1[0]=5
//  temperaturas_medias_ciudad1[1]=0
//  temperaturas_medias_ciudad1[2]=2

//  var temperaturas_medias_ciudad2= new Array(3)
//  temperaturas_medias_ciudad2[0]=1
//  temperaturas_medias_ciudad2[1]=2
//  temperaturas_medias_ciudad2[2]=3

//  var arraychingo_de_dimenciones_chingo_de_qlos= new Array(3)
// arraychingo_de_dimenciones_chingo_de_qlos[0]=temperaturas_medias_ciudad0
// arraychingo_de_dimenciones_chingo_de_qlos[1]=temperaturas_medias_ciudad1
// arraychingo_de_dimenciones_chingo_de_qlos[2]=temperaturas_medias_ciudad2

// console.log(arraychingo_de_dimenciones_chingo_de_qlos[0][1]);

// for (i=0;i<arraychingo_de_dimenciones_chingo_de_qlos.length;i++){
    
//     for (j=0;j<arraychingo_de_dimenciones_chingo_de_qlos[i].length;j++){
//         console.log("Este es i:= "+i+" J:= "+j);
//         console.log(arraychingo_de_dimenciones_chingo_de_qlos[i][j]);
//     }
    
// }

//HAY OTRO CICLO MÁS FACIL
//EL CICLO FOR IN
    // for (let carrounico in carros2){
    //     console.log(carros2[carrounico]);
    // }

    //FUNCIONES
    // function enseñamsj(firstname){
    //     function holachulo(){
    //         alert("Hola "+firstname);
    //     }
    //     return holachulo();
    // }
    // enseñamsj("Guapo"); 

    
    //OBJETOS Y CLASES
    // class persona{

    //     hablar(){
    //         console.log("Hola soy un chairo");
    //     }
    // }

    // let persona2 = new persona("godis","25");
    // persona2.hablar();



    class Animal {
        hablar() {
            return"Cuak";
    
        }

        constructor() {
            console.log("Ya nació un pato");
        }
    }

    const pato = new Animal();
    console.log(pato.hablar());
    const perro =new Animal();
    console.log(perro.hablar());