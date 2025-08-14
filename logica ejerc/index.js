//const hello = 'hello world!';

//console.log(hello);

//let lloviendo = false //no // bool

                                       //! // diferente de 
                                          //== // igual de
    

//if(lloviendo){
   //console.log("Debo llevar el paraguas")
//}else{
  //console.log("No debo llevarlo, hoy esta soleado")
//}


//let Edad = 17

//if( Edad > 18){
   //console.log("Es mayor de edad");
//}else{
  //console.log("No es mayor de edad");
  //alert("Es menor de edad")
//}

//let edad = prompt("Cual es tu edad")

//let colorLuz = "amarillo"

//if(colorLuz=== "rojo"){
     //alert('detente');
//}else if(colorLuz === "amarillo"){
   //alert("precaucion");
//}else if(colorLuz === "verde"){
  //alert("pase")
//}


//!!

//let lucho = true
//let carlos = false

//if(lucho && carlos){
  //console.log("si van al paseo")
//}else{
 //console.log("no va al paseo")
//}

//let num = 560

//if(num % 5=== 0){
  //console.log("par")
//}else{
 //console.log("inpar")
//}




let calificacionEscolar = 80;

if(calificacionEscolar >= 90){
    console.log("Excelente")

}else if(calificacionEscolar >= 70){
    console.log("Aprobado")
}else if(calificacionEscolar < 70){
    console.log("Reprobado")
}




let User = "admin";
let password = "234";

//if(User && password){
    //console.log("Acceso concedido")

//}else{
  //  console.log("Acesso denegado")
//} ejemplo 1 sencillo.

if(User === "admin"){
    if(password === "1234"){
        console.log("Accesso concedido");
    }else{
        console.log("password incorrect");
    
    } 
}else{
        console.log("User  incorrect");
    }




let temperature = 14;

if(temperature > 30){
    console.log("Hace calor")

}else if(temperature >= 15 ){
    console.log("Climna agradable")

}else if(temperature < 15){
    console.log("Hace frio")
}



let Dia = "Domingo";

switch (Dia) {
    case "Domingo":
    case "Sabado":
        console.log("Fin de semana")
        break;
    case "Viernes":
    case "Jueves":    
    case "Miercoles":
    case "Martes":
    case "Lunes":
        console.log("Dia laboral")
    default:
        break;

}

let presupuesto = 400;

if(presupuesto >= 1000){
    console.log("Puedes ir de playa")

}else if(presupuesto >= 500){
    console.log("Puedes ir de campo")

}else if(presupuesto < 500){
    console.log("Quedate en casa")
}


let edadJuan = 40;
let edadMaria = 30;

if(edadMaria > edadJuan){
    console.log("Maria es mayor que Juan")

}else if(edadMaria === edadJuan){
    console.log("Maria y Juan tienen la misma edad")

}else{
    console.log("Juan es mayor que Maria")
}




let edad = 17
;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);


let lugar = prompt("Cual es tu lugar favorito")



//Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que 
// vas a pagar por tu compra.

//Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el 
// iva y dividir por 100.            

//Precio 200€

//Iva: 21%

//El total son 242 €.  //200 + 21*200/100

let precio = 200;
let Iva = 21;

let precioTotal = precio + precio * 21/100;

console.log("El total son " + precioTotal);


let lado = 40;
let area = 40*40;
let perimetro = 40*4;

console.log("El area es " + area);
console.log("El perimetro es " + perimetro)



let nombre = prompt("Escribe tu nombre");

let saludo = "Hola " + nombre;

console.log(saludo );



let user1 = parseInt(prompt("Teclea el numeor 3"));
let user2 = parseInt(prompt("Teclea el numeor 2"));
let user3 = parseInt(prompt("Teclea el numeor 4"));

let media = (user1 + user2 + user3) / 3;

alert("La media de los numeros es " + media);


let litros = prompt("Litros consumidos");
let km     = prompt("Km recorridos");

litros = parseFloat(litros);
km = parseFloat(km);

let consumido = litros / km;

alert("Has consumido " + consumido);




