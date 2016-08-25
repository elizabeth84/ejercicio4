var tiempo=parseFloat(prompt("El tiempo que hablo es:"));
var min=parseFloat(prompt("El costo por minuto es:"));

costo=tiempo*min;
document.write("La llamada telefonica tiene un costo de : s/." + parseFloat(costo));