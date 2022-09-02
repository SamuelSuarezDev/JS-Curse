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
let repeticiones = Number(prompt("Ingresa un número"));

for (let i = 1; i <= repeticiones; i++) {
  console.log("Hola");
}
