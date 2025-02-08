
var negro1 = false;
var blanco1 = false;
var rojo1 = false;
var amarillo1 = false;
var azul1 = false;
var verde1 = false;
let aumente = 0; // Inicializamos la variable fuera de la función
document.addEventListener("DOMContentLoaded" ,function(){
        let contenedor = document.getElementById("Madre");
        for(let i = 0; i< 256;i++){
        let div = document.createElement("div");
        div.id = "Cuadro-"+i;
        div.onclick = Seleccionar;
        contenedor.appendChild(div);
        div.style.width= "50px";
        div.style.height= "50px";
        div.style.backgroundColor= "white";
        div.style.transition = "all 0.5s ease-in-out";
        }
});


function Contador(event) {
    let boton = event.target;
    boton.style.fontSize = "40px"; // Cambiar tamaño de fuente al hacer click

    setTimeout(() => {
        boton.style.transition = "all 0.3s ease-in-out";
        boton.style.fontSize = "50px"; // Vuelve a su tamaño original después de 1 segundo
    }, 1000);

    // Ocultar el GO
    let gono = document.getElementById("GO");
    gono.style.opacity = "0";

    // Obtener las imágenes y restablecerlas al inicio
    let gameu1 = document.getElementById("GAMES1");
    let gameu2 = document.getElementById("GAMES2");

    gameu1.style.opacity = "0";
    gameu2.style.opacity = "0";
    gameu1.style.filter = "blur(35px)";
    gameu2.style.filter = "blur(35px)";

    // Mostrar la primera imagen (GAMES1) y aplicar blur si "aumente" es 0
    if (aumente === 0) {
        gameu1.style.opacity = "1";
        gameu1.style.filter = "blur(35px)";
    } else if (aumente === 1) {
        // Cambiar a la segunda imagen (GAMES2) si "aumente" es 1
        gameu2.style.opacity = "1";
        gameu2.style.filter = "blur(35px)";
    }

    let i = 59; // Comienza el contador en 60
    let interval = setInterval(() => {
        let elementos = document.getElementById("aumentador");
        elementos.textContent = i;
        i--;

        if (i < 0) {
            clearInterval(interval); // Detener el contador cuando llega a 0
            elementos.textContent = "¡TIEMPO!"; // Mostrar "¡TIEMPO!"

            // Eliminar el blur de la imagen activa según "aumente"
            if (aumente === 0) {
                gameu1.style.filter = "blur(0px)";
            } else if (aumente === 1) {
                gameu2.style.filter = "blur(0px)";
            }

            // Alternar el valor de "aumente" entre 0 y 1 para cambiar de imagen
            aumente = (aumente + 1) % 2; // Cambiar entre 0 y 1
        }
    }, 1000); // Se actualiza cada 1 segundo
}

function Abrir(){
    var boton = event.target;
    boton.style.fontSize = "30px";
    setTimeout(() => {
        boton.style.fontSize = "40px";
    }, 100);
    var god = event.target;
    var low = document.getElementById("lowmenu");
    low.style.display = "Flex";
    god.style.display = "None";
    var ex = document.getElementById("salir");
    ex.style.opacity = "1";
    var uwu = document.getElementById("borrar");
    uwu.style.display = "None";

}
function SALIR(){
    var boton = event.target;
    boton.style.fontSize = "30px";
    setTimeout(() => {
        boton.style.fontSize = "40px";
    }, 100);
    var low = event.target;
    low.style.opacity = "0";
    var max = document.getElementById("lowmenu");
    max.style.display = "None";
    var ex = document.getElementById("abrir");
    ex.style.display = "Flex";
    var uwu = document.getElementById("borrar");
    uwu.style.display = "Flex";

}
function borrar(){
    var boton = event.target;
    boton.style.fontSize = "30px";
    setTimeout(() => {
        boton.style.transition = "all 0.3s ease-in-out"
        boton.style.fontSize = "40px";
    }, 100);
    for(let i = 0; i< 256;i++){
        var clase = document.getElementById("Cuadro-"+i);
        clase.style.backgroundColor = "white";
        
    }

}
function Seleccionar() {

    var imagen = event.target
    
    if(imagen!== 1){
        if (negro1){
            imagen.style.backgroundColor = "black";
            
        } 
        else if (blanco1){
            imagen.style.backgroundColor = "white";
        
        }
        else if (rojo1){
            imagen.style.backgroundColor = "red";

        }
        else if (amarillo1){
            imagen.style.backgroundColor = "yellow";

        }
        else if (azul1){
            imagen.style.backgroundColor = "blue";

        }
        else if (verde1){
            imagen.style.backgroundColor = "green";
        }
           
    }
  
}
function negro() {
    negro1 = true;
    blanco1 = false;
    rojo1 = false;
    amarillo1 = false;
    azul1 = false;
    verde1 = false;
}
function blanco() {
    blanco1 = true;
    negro1 = false;
    rojo1 = false;
    amarillo1 = false;
    azul1 = false;
    verde1 = false;
}  
function rojo() {
    rojo1 = true;
    blanco1 = false;
    negro1 = false;
    amarillo1 = false;
    azul1 = false;
    verde1 = false;
}  
function amarillo() {
    amarillo1 = true;
    blanco1 = false;
    rojo1 = false;
    negro1 = false;
    azul1 = false;
    verde1 = false;
}  
function azul() {
    azul1 = true;
    blanco1 = false;
    rojo1 = false;
    amarillo1 = false;
    negro1 = false;
    verde1 = false;
}  
function verde() {
    verde1 = true;
    azul1 = false;
    blanco1 = false;
    rojo1 = false;
    amarillo1 = false;
    negro1 = false;
}  
