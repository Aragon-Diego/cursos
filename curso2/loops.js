var expliacion = "Un loop es un espacio de código que va a correr 'n' cantidad de veces";
var ejemplosDeLoops = ['for', 'while', 'do... while'];

for (let step = 0; step < 5; step++) {
  console.log("Paso numero: ", step);
}

var n = 0;
var x = 0;

while (n < 3) {
  n = n + 1;
  x += n;
}

var expliacion2 = "Típicamente usaremos el for cuando queremos recorrer todos los casos posibles";