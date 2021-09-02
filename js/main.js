let secciones = [];
let botones_menu = [];
let botones_indice = [];
let botones_volver;
let opciones;
let respuestas = [4,3];
let pregunta_actual = 0;
const gallery  = document.querySelectorAll(".image"),

previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = inicio;

function inicio(){
	iniciarVariables();
	asignarEventosMenu();
	asignarEventosIndice();
	asignarVolver();
	asignarBotonesJuego();
	setTimeout(function(){
		irA(1);
	},1000);
}

function asignarVolver(){
	botones_volver = document.querySelectorAll(".volver");
	for(var i of botones_volver)
	{
		i.addEventListener("click",function(evento){
			evento.preventDefault();
			irA(1);
		});
	}
}

function asignarBotonesJuego(){
	opciones = document.querySelectorAll(".opcion");
	for(var i of opciones)
	{
		i.addEventListener("click",function(evento){
		});
	}
}

function ocultar(){
	for (var i = 0; i < secciones.length; i++) 
	{
		secciones[i].classList.remove("animate_slideInRight");
		secciones[i].classList.add("ocultar"); 
	}
}
function irA(id){
	if(id<0 || id>=secciones.length)
	{
		return;
	}
	ocultar();
	secciones[id].classList.add("animate_slideInRight");
	secciones[id].classList.remove("ocultar");	
}

function iniciarVariables(){
	secciones.push(document.getElementById("splash"));
	secciones.push(document.getElementById("home"));
	secciones.push(document.getElementById("indice"));
	secciones.push(document.getElementById("lugares"));
	secciones.push(document.getElementById("quienes"));
	secciones.push(document.getElementById("animales"));
	botones_menu.push(document.getElementById("item_animales__2"));
	botones_menu.push(document.getElementById("item_lugares__3"));
	botones_menu.push(document.getElementById("item_creditos__4"));
	botones_indice.push(document.getElementById("respuesta__5"));
	//botones_menu.push(document.getElementById("item_animales__2"));
}

function asignarEventosMenu(){
	for(var i of botones_menu)
	{
		//console.log(secciones[i],i);
		i.addEventListener("click",function(evento){
			//console.log(event.target);
			let seccion = evento.target.id.split("__")[1];
			irA(seccion);
		});
	}
}

function asignarEventosIndice(){
	for(var i of botones_indice)
	{
		//console.log(secciones[i],i);
		i.addEventListener("click",function(evento){
			//console.log(event.target);
			let seccion = evento.target.id.split("__")[1];
			irA(seccion);
		});
	}
}