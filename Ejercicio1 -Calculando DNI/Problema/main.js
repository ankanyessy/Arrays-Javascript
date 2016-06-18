// Escribe aquí tu codigo Javascript

/*El toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.*/

var letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];

var numero=prompt("Ingresa tu número de DNI sin letra");
var letra=prompt("Ingresa la letra de tu DNI en mayúsculas");
letra=letra.toUpperCase();
 
if(numero<0|| numero>99999999){
  alert("El número proporcionado no es válido");
}
else {
  var letraCalculada=letras[numero%letras.length];
  if(letraCalculada===letra){
    alert("La letra o el número proporcionados no son correctos");
  }
  else {
    alert("El número de DNI y su letra son correctos");
  }
}



