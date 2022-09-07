/* /* let country = prompt("¿En que país vives?");

alert("Saludos desde " + country + ", tenga una buena noche");
 */
/* let numero = Number(prompt("Escribe un número"));
if (numero > 1000) {
  alert("Es mayor que 1000");
} else {
  alert("Es menor que 1000");
}
let text = prompt("Saludame");
if (text == "Hola") {
  console.log("Hola");
}
let numero2 = Number(prompt("Escribe un numero"));
if (numero2 >= 10 && numero2 <= 50) {
  alert("Tu numero esta entre 10 y 50");
} */

/* for (let i = 10; i > 0; i--) {
  alert(i);
} */

/* for (let i = 1; i <= 5; i++) {
  let nombreIngresado = prompt("Ingrese su nobre");
  alert("Turno N." + i + "Nombre: " + nombreIngresado);
}
 */
/* 
let numeroIngresado = Number(prompt("Ingrese un número"));

for (let i = 1; i <= 10; i++) {
  let resultado = numeroIngresado * i;
  alert(resultado);
}
 */
//Sentencia Break:  interrumpe el ciclo a travez de una condicional
/* for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  alert(i);
}
 */

//Sentencia continue: Salta la repeticion
/* for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  alert(i);
}
 */

//ciclo While: es un bucle que se realiza por medio de una condición
/* let entrada = prompt("Ingresa un dato");
while (entrada != "ESC") {
  alert("El usuario ingresó: " + entrada);
  entrada = prompt("Ingrese otro dato");
}
 */

//ciclo Do While: el bloque de codigo se interpreta una vez
/* let askAgain = true;
do {
  let userEmail = prompt("Ingrese su correo:");
  let confirmUserEmail = prompt("Confirme su correo:");

  if (userEmail === confirmUserEmail) {
    alert("El correo " + userEmail + " ha sido guardado con éxito");
    askAgain = false;
  } else {
    alert("Los datos no coinciden");
  }
} while (askAgain);
 */

//estructura switch: maneja varias condiciones de una variable
/* let entrada = prompt("Ingresar su nombre:").toUpperCase();

while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("Hola Ana");
      break;
    case "JUAN":
      alert("Hola Juan");
      break;
    default:
      alert("¿Quien sos?");
      break;
  }
  entrada = prompt("Ingresar su nombre").toUpperCase();
}
 */

//Reto
/* let repeticiones = Number(prompt("Ingresa un número"));

for (let i = 1; i <= repeticiones; i++) {
  console.log("Hola");
}
 */

//Variables locales y globales

//Locales: son variables que se declaran en la funcion, si se declara por fuera JS la toma como una variable no declarada
/* function sumar(){
  let resultado = primerNumero + segundoNumero;
} */

//Globales: Se declaran fuera de la función y se pueden usar fuera de ella
/* let resultado = 0;
function sumarNumeros(primerNumero, segundoNumero){
  resultado = primerNumero + segundoNumero;
}
sumarNumeros(2,4)

console.log(resultado) */

//Funciones anonimas
/* const sumar = function (numero1, numero2) {
  return numero1 + numero2;
};
console.log(sumar(3, 5)); */

//Funciones flecha
/* const sumar = (numero1, numero2) => {
  return numero1 + numero2;
};
console.log(sumar(3, 5));
 */

//Desafío
let precio = 0;
let descuento = 0;
let precioInicial = 0;
let costoEnvio = 0;
let producto = prompt("¿Que prefieres?, Zapatos o una consola").toUpperCase();
switch (producto) {
  case "ZAPATOS":
    precio = 200;
    precioInicial = 200;
    break;
  case "CONSOLA":
    precio = 700;
    precioInicial = 700;
    break;
  default:
    alert("No se ha podido recibir tu respuesta");
    break;
}
let affiliate = confirm("Eres afiliado?");
switch (affiliate) {
  case true:
    descuento = 50;
    break;
  case false:
    descuento = 70;
    break;
  default:
    alert("¿Perdón?, no se ha podido recibir tu respuesta");
}
let envio = confirm("¿Te lo enviamos nosotros?, tendrá un costo adicional");
switch (envio) {
  case true:
    costoEnvio = 10;
    break;
  case false:
    costoEnvio = 0;
    break;
  default:
    alert("¿Perdón?, no se ha podido recibir tu respuesta");
    break;
}
const precioTotal = (objeto, descuento, envio) => {
  precio = (objeto * descuento) / 100 + envio;
  alert(
    "Listo, tu precio total es de " +
      precio +
      " te enviaremos un recibo por la consola"
  );
  console.log(
    "Producto: " +
      producto +
      "; Precio del producto: " +
      precioInicial +
      ", Descuento: " +
      descuento +
      "%, Costo de envío?: " +
      envio +
      ", Precio total: " +
      precio
  );
};
console.log(precioTotal(precio, descuento, costoEnvio));
