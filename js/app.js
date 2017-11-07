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

/* ahora hay que crear una funcion que tome el mensaje del input y 
lo añada como titulo a un nuevo div "nombre de la lista" y un mensaje 
que pueda pinchar y que me aparezca el formulario 