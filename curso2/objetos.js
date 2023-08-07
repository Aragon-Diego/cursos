var expliacion = "Los objetos en JavaScript, como en tantos otros lenguajes de programación, se pueden comparar con objetos de la vida real. El concepto de Objetos en JavaScript se puede entender con objetos tangibles de la vida real";
var expliacion2 = "Los objetos pueden ser tan aterrizados a la realidad material o pueden ser conceptos abstractos";

var expliacion3 = "Los objectos tienen 2 cosas, descriptores y funciones";

var persona = {
  altura: 1.83,
  colorDePelo:"Rojo",
  nombre: "Manuel",
}

var persona2 = {
  altura: 1.62,
  colorDePelo:"negro",
  nombre: "Pepe",
}

var carro = {
  modelo: "Sedán",
  color: "Rojo",
  estado: "Apagado",
  prender: function() {
    this.estado = "Prendido";
  },
  apagar: function() {
    this.estado = "Apagado";
  }
}