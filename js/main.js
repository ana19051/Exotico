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
	setTimeout(function(){
		irA(1);
	},1000);
	mostrarGaleria();
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
	secciones.push(document.getElementById("anfibios"));
	secciones.push(document.getElementById("aves"));
	secciones.push(document.getElementById("mamiferos"));
	secciones.push(document.getElementById("mariposas"));
	secciones.push(document.getElementById("peces"));
	secciones.push(document.getElementById("reptiles"));
	botones_menu.push(document.getElementById("item_animales__2"));
	botones_menu.push(document.getElementById("item_lugares__3"));
	botones_menu.push(document.getElementById("item_creditos__4"));
	botones_indice.push(document.getElementById("opcion__5"));
	botones_indice.push(document.getElementById("opcion__6"));
	botones_indice.push(document.getElementById("opcion__7"));
	botones_indice.push(document.getElementById("opcion__8"));
	botones_indice.push(document.getElementById("opcion__9"));
	botones_indice.push(document.getElementById("opcion__10"));
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

function mostrarGaleria(){
	for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ 
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
            }
        }
        
    }
}