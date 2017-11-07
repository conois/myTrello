/* crear primer evento de click en el parrafo 
con id"añadir", lo que hará será crear un 
input text y un buttom */ 



var btn= document.getElementById('añade'); 
btn.addEventListener("click", function(){
	btn.classList.add("noShow"); 
});