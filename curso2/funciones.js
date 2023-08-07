var expliacion = "Las funciones son bloques de código que se pueden ejecutar N cantidad de veces que se requieran";
var expliacion2 = "Nos sirven para tener un código más flexible";

function multiply(n1, n2) {
  return n1 * n2;
}
multiply(3, 4);


function longitudDePalabra(palabra) {
  return palabra.length;
}
var arregloDePalabras = ["Uno", "Ultra", "Platano", "Código"];
for(var iteracion = 0; iteracion < arregloDePalabras.length; iteracion++) {
  console.log(longitudDePalabra(arregloDePalabras[iteracion]));
}


var cuadratica = function (number) {
  return number * number;
};
var x = cuadratica(4);



function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}