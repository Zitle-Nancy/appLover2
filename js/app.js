/*
 * Archivo principal de funcionalidad de JS
 */
 var imagenJs = document.getElementsByClassName('imagen-js');
 var imprimirImagen = document.getElementById('imprimir-imagen');
 var cerrar = document.getElementById('cerrar');
 cerrar.addEventListener('click',cerrarImg);
 var longitud = imagenJs.length;
 console.log(imagenJs);
 

 for(var i=0; i< longitud; i++){
 	imagenJs[i].addEventListener('click',mostrar);
 }

 function mostrar(){
 	var imgModal = document.getElementById('img-modal');
	imprimirImagen.style.display = "block";
	// aqui this es imagenJs
	//children da un arreglo de sus hijos
	//this de este children su hijo [0], indice del que querremos y obtenemos la src
	imgModal.src = this.children[0].src;	
 }
function cerrarImg(){
	imprimirImagen.style.display = "none";
}