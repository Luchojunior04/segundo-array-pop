// let rango = parseInt(prompt("ingresa un nu entero"));

// if(rango >= 20 && rango <= 70) {
//alert("Hace parte del rango");
// alert("Hace parte del rango");

// } else{
//alert("No hace parte del rango")
// }

//let num = parseInt(prompt("ingresa el valor"))

//if(num >= 100 && num <= 999) {
//  alert("El nuero tienes 3 digitos")
//} else {
//  alert("El nuero no tiene 3 digitos")
//}

//let num = parseInt(prompt("Ingresa el valor"))

//let rest = num % 2;
//let par = rest == 0;

//console.log("Es par? " + par)

//if (num >= 100 && num <= 999) {
    //if (num % 2 === 0) {
        //console.log("EL nuero es par y tiene 3 digitos")
    //} else {
       // console.log("El nuero es inpar y tiene 3 digitos")
  //  }
//} else {
    //alert("El nuero no tiene 3 digitos")
//};

//let nota = prompt("ingresa la nota")

//nota = parseFloat(nota)

//if(nota <= 2){
   // alert("perdio el periodo");
//} else if (nota >= 2 && nota <= 3.9){
   // alert("Paso el periodo arrastrado");
//} else {
    //alert("Gano el año perfecto");
//};

//let salario = 21.000; 

//if(salario < 10.000){
    //alert("tiene 0%")
//} else if(salario > 10.000 && salario <= 20.000 ){
    //alert("tiene el 10%");
//}else{
    //alert("tiene el 15%");                                      
//};

//let año = parseInt(prompt("ingresa el valor"));

//if( año %2 && año/100 != 0){
    //alert("el año es bisiesto");

//}else {
   // alert("el año no es biciesto");
//};


//algoritmo 4 numeros n1,n2,n3,n4 compararlos, queremos hacer 4 combinaciones
//, primero cual de esos cuatro es el mayor el otro es el MediaElementAudioSourceNode, 
//son iguales y son los mayores y 
//de que otros son iguales y son menores.

let n1 = 4
let n2 = 3
let n3 = 1
let n4 = 2

if(n1 == n2 && n1 < n3 && n3 == n4){
    console.log("n3 y n4 iguales pero mayores que n1 y n2");
    console.log("n1 y n2 son iguales pero menores que n3 y n4")
} else if(n1 == n2 && n1 > n3 && n3 == n4){
    console.log("n1 y n2 son iguales pero mayores que n3 y n4");
    console.log("n3 y n4 son iguales pero menores que n1 y n2")
} else if(n1 < n2 && n2 < n3 && n3 == n4){
    console.log("n4 y n3 son iguales pero mayores y n1 es el menor")
} else if(n1 == n2 && n1 > n3 && n3 > n4){
    console.log("n1 y n2 son iguales y mayores pero n4 es el menor")
} else if(n1 == n3 && n1 > n4 && n2 < n4){
    console.log("n1 y n3 son iguales y mayores pero n2 es el menor")
} else if(n1 == n4 && n1 > n2 && n2 > n3){
    console.log("n1 y n4 son iguales y mayores pero n3 es el menor")
}else if(n1 == n2 && n1 < n3 && n3 < n4){
    console.log("n4 es el mayor de todos y n1 y n2 son iguales pero menores")
} else if(n1 == n2 && n1 < n4 && n3 > n4){
    console.log("n3 es el mayor de todos y n1 y n2 son iguales pero menores")
} else if(n1 == n3 && n1 < n4 && n2 > n4){
    console.log("n2 es el mayor de todos y n1 y n3 son iguales pero menores")
} else if(n2 == n3 && n2 < n4 && n1 > n4){
    console.log("n1 es el mayor de todos y n2 y n3 son igaules pero menores")
} else if(n1 < n2 && n2 < n3 && n3 < n4){
    console.log("n4 es el mayor de todos y n1 es el menor")
} else if(n1 < n2 && n2 < n4 && n3 > n4){
    console.log("n3 es el mayor de todos y n1 es el menor")
} else if(n1 < n3 && n3 < n4 && n2 > n4){
    console.log("n2 es el mayor de todos y n1 es el menor")
} else if(n2 < n3 && n3 < n4 && n1 > n4){
    console.log("n1 es el mayor de todo y n2 es el menor de todo")
} else if(n3 < n1 && n1 < n2 && n4 > n2){
    console.log("n4 es el mayor de todo y n3 es el menor de todo")
}else if(n2 < n1 && n1 < n3 && n4 > n3){
    console.log("n4 es el mayor de todo y n2 es el menor de todo")
}else if(n4 < n1 && n1 < n2 && n3 > n2){
    console.log("n3 es el mayor de todo y n4 es el menor de todo")
}else if(n1 == n2 && n1 == n3 && n3 < n4){
    console.log("n1,2,3 son iguales pero n4 es el mayor de todos")
}else if(n1 == n2 && n1 == n4 && n3 > n4){
    console.log("n1,2,4 son iguales pero n3 es el mayor de todos")
}else if(n1 == n3 && n1 == n4 && n4 < n2){
    console.log("n1,3,4 son iguales pero n2 es el mayor de todos")
}else if(n2 == n3 && n2 == n4 && n4 < n1){
    console.log("n2,3,4 son iguales pero n1 es el mayor de todos")
} else if(n1 == n2 && n1 == n3 && n3 > n4){
    console.log("n1,2,3 son iguales pero n4 es el menor de todos")
}else if(n1 == n2 && n1 == n4 && n3 < n4){
    console.log("n1,2,4 son iguales pero n3 es el menor de todos")
}else if(n1 == n3 && n1 == n4 && n4 > n2){
    console.log("n1,3,4 son iguales pero n2 es el menor de todos")
}else if(n2 == n3 && n2 == n4 && n4 > n1){
    console.log("n2,3,4 son iguales pero n1 es el menor de todos")
}else if(n1 > n2 && n2 > n3 && n3 > n4){
    console.log("n1 es el mayor de todo y n4 es el menor de todo")
}else if(n1 < n2 && n2 > n3 && n3 < n4){
    console.log("n2 es el mayor de todo y n3 es el menor de todo")
}else if(n1 > n2 && n1 < n3 && n3 < n4){
    console.log(" n2 es el menor de todo")
}else if(n1 < n2 && n2 < n3 && n3 < n4){
    console.log(" n1 es el menor de todo")
} else{
    console.log("Todos los numeros son iguales");
};










