var boton = document.getElementById('button');
var numI = document.getElementById("input").value
boton.onclick = function() {
	var numI = document.getElementById("input").value
	var texto = document.createTextNode("sali");
	var tabla = document.getElementById("tabla");  //llamo a mi tabla
	for( var i =0;  i < numI; i++) {
		var columna = document.createElement("tr"); // creo columnas
		for(var j =0; j< numI; j++) {
			var celda = document.createElement("td"); //creo celda en filas
			columna.appendChild(celda);
		}
			
	tabla.appendChild(columna); // 
}
borrar();
} 
function borrar() {
		var tabla = document.getElementById("tabla"); 
		table.setAttribute('bordercolor','red');

}