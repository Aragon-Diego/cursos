var expliacion = "Los arreglos se pueden entender como una lista de variables, normalmente en otros lenguajes el tamaño de la lista y el tipo de la lista son determinados, pero en JS es un tamaña y tipo indeterminado";
var nombre1 = "Diego";
var nombre2 = "Alonso";
var nombre3 = "Miguel";
var nombre4 = "Mario";
var listaDeNombres = ["Diego", "Alonso", "Miguel", "Mario"];

listaDeNombres[0] = "Pepe";
for(var iteracion = 0; iteracion < listaDeNombres.length; iteracion++) {
  console.log("el nombre numero: " + iteracion + " Es: " + listaDeNombres[iteracion]);
}

listaDeNombres.push("Ricardo");