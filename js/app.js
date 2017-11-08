//Version 0.0.1

/* crear primer evento de click en el parrafo 
con id"añadir", lo que hará será crear un 
input text y un buttom */ 



var btn= document.getElementById('añade'); 
btn.addEventListener("click", function(){mostrarFormulario()}); 

function mostrarFormulario(){
	var divContenedor=document.getElementById("contenedor-formulario"); 
	var btn= document.getElementById('añade'); 
	//añadiendo clase que desaparece el elemento 
	btn.classList.add("noShow"); 
	// agregar clase que muestre el elemento formu 
	var formulario=document.getElementById("form"); 
	formulario.classList.remove("noShow"); 
	formulario.classList.add("show"); 
	// modificando estilo css del div contenedor
	divContenedor.classList.add("primer-div"); 
};

//Version 0.0.2

/* ahora hay que crear una funcion que tome el mensaje del input y 
lo añada como titulo a un nuevo div "nombre de la lista" y un mensaje 
que pueda pinchar (EVENTO) y me muestre un formulario y un boton */  

function crearTarjeta(event){
	var contenedor=document.getElementById("contenedor-formulario");
	contenedor.classList.add("noShow"); 
	var nuevoDiv=document.getElementById("nuevo-cuadro"); 
	nuevoDiv.classList.remove("noShow")
	nuevoDiv.classList.add("show"); 
	var cardName= document.getElementById('primerInput').value;
	//creando nodo de texto 
	var txtTitle=document.createTextNode(cardName); 
	// creando titulo 
	var title=document.createElement("h3"); 
	var titleCuadro=document.getElementById("titleCuadro"); 
	var nuevoCuadro=document.getElementById("nuevo-cuadro");
	var añadirTarea=document.getElementById("añadirTarea");

	//pasando los hijos 
	title.appendChild(txtTitle); 
	titleCuadro.appendChild(title);
	nuevoCuadro.appendChild(titleCuadro); 

	nuevoCuadro.insertBefore(titleCuadro, añadirTarea);

}

//creando evento al click del boton guardar 

var btnSave=document.getElementById("saveButton"); 
btnSave.addEventListener("click", function(){crearTarjeta()});

/*creando evento. Al realizar click en el mensaje "añadir una tarea"
se despliegue un text Area y se cree un boton. */

function nuevoTextArea(){
	var newTextArea=document.createElement("textarea");
	newTextArea.classList.add("textAreaTarea"); 
	/*newTextArea.type="textarea" ; */
	var newBtn=document.createElement("BUTTON");
	var txtButton=document.createTextNode("Añadir"); 
	newBtn.classList.add("btnAñadir");  
	//llamando al elemento padre contenedor 
	var contenedor=document.getElementById("nuevo-cuadro"); 
	//borrando elementos 
	var anadirTarea=document.getElementById("añadirTarea");
	contenedor.removeChild(anadirTarea); 
	// agregando hijos
	newBtn.appendChild(txtButton); 
	contenedor.appendChild(newTextArea); 
	contenedor.appendChild(newBtn); 

}; 

var mensajeAgregar= document.getElementById("añadirTarea"); 
mensajeAgregar.addEventListener('click', function(){nuevoTextArea()});


