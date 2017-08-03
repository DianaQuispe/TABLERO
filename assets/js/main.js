var boton = document.getElementById('button');
var numI = document.getElementById("input").value
boton.onclick = function() {
	var div = document.getElementById("tablero");
	var numI = document.getElementById("input").value
	var tabla = document.createElement("tabla");  //creo a mi tabla
	tabla.setAttribute("bordecolor", "red");
	for( var i =0;  i < numI; i++) {
		var fila = document.createElement("tr"); // creo columnas
		for(var j =0; j< numI; j++) {
			var z = document.createElement("td"); //creo z en filas
			fila.appendChild(z); // pongo las filas en las columnas
		} 
			
	tabla.appendChild(fila); // 
	tabla.appendChild(z);
}

} 

