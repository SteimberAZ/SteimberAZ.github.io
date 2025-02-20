
var negro1 = false;
var blanco1 = false;
var rojo1 = false;
var amarillo1 = false;
var azul1 = false;
var verde1 = false;
let aumente = 0; 
var piel = false;
var color =  true;
var imagen_actual = false;
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
        var input = document.getElementById("color");
        var boton2 = document.getElementById("color1");
        input.addEventListener("input",()=>{
        boton2.style.transition = "all 0.01s ease-in-out"
        boton2.style.backgroundColor = input.value ||"transparent";
        
    });
});


function Contador(event) {

    let boton = event.target;
    document.getElementById("audio").play();
    boton.style.fontSize = "40px"; 

    setTimeout(() => {
        boton.style.transition = "all 0.3s ease-in-out";
        boton.style.fontSize = "50px"; 
    }, 1000);

    // Ocultar el GO
    let gono = document.getElementById("GO");
    gono.style.opacity = "0";

    let gameu1 = document.getElementById("GAMES1");
    let gameu2 = document.getElementById("GAMES2");
    let gameu3 = document.getElementById("GAMES3");
    let gameu4 = document.getElementById("GAMES4");
    let gameu5 = document.getElementById("GAMES5");
    

    gameu1.style.opacity = "0";
    gameu2.style.opacity = "0";
    gameu1.style.filter = "blur(35px)";
    gameu2.style.filter = "blur(35px)";
    gameu3.style.opacity = "0";
    gameu4.style.opacity = "0";
    gameu3.style.filter = "blur(35px)";
    gameu4.style.filter = "blur(35px)";
    gameu5.style.opacity = "0";
    gameu5.style.filter = "blur(35px)";

    
    if (aumente === 0) {
        gameu1.style.opacity = "1";
        gameu1.style.filter = "blur(35px)";
    } else if (aumente === 1) {
      
        gameu2.style.opacity = "1";
        gameu2.style.filter = "blur(35px)";
    }else if (aumente === 2) {
      
        gameu3.style.opacity = "1";
        gameu3.style.filter = "blur(35px)";
    }else if (aumente === 3) {
      
        gameu4.style.opacity = "1";
        gameu4.style.filter = "blur(35px)";
    }else if (aumente === 4) {
      
        gameu5.style.opacity = "1";
        gameu5.style.filter = "blur(35px)";
    }

    let i = 59; 
    let interval = setInterval(() => {
        let elementos = document.getElementById("aumentador");
        elementos.textContent = i;
        i--;

        if (i < 0) {
            clearInterval(interval); 
            elementos.textContent = "¡TIEMPO!"; 

            if (aumente === 0) {
                gameu1.style.filter = "blur(0px)";
            } else if (aumente === 1) {
                gameu2.style.filter = "blur(0px)";
            }
             else if (aumente === 2) {
                gameu3.style.filter = "blur(0px)";
            }
            else if (aumente === 3) {
                gameu4.style.filter = "blur(0px)";
            }   
            else if (aumente === 4) {
                gameu5.style.filter = "blur(0px)";
            }  

            
            aumente = (aumente + 1) ; 
        }
    }, 1000); 
}

function Abrir(){
    var boton = event.target;
    document.getElementById("audio").play();
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
    var aldeo = document.getElementById("alde");
    aldeo.style.display = "None";
  
}
function aldeos(){
    document.getElementById("audi").play();
    var boton = event.target;
    boton.style.width = "430px";
    boton.style.height = "230px";
    boton.style.transition = "all 0.2s ease-in-out";
    setTimeout(() => {
        boton.style.width = "500px";
        boton.style.height = "500px";
        
    }, 100);
    
    boton2 = document.getElementById("adei");
    if (imagen_actual){
        boton2.src = "aldeo1.png";
        
    } else{
        boton2.src = "aldeo2.png";
        
    }
    imagen_actual = !imagen_actual;
}


function SALIR(){
    var boton = event.target;
    document.getElementById("audio").play();
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
    var aldeo = document.getElementById("alde");
    aldeo.style.display = "Block";
    

}
function borrar(){
    var boton = event.target;
    document.getElementById("audio").play();
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

    var imagen = event.target;
    var input = document.getElementById("color");
    var boton2 = document.getElementById("color1");
    input.addEventListener("input",()=>{
        boton2.style.backgroundColor = input.value ||"transparent";
        });
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
        else if (piel){
            imagen.style.backgroundColor = "bisque";
        }
        else if (color){
            imagen.style.backgroundColor = input.value;
        }
           
    }
}
function seli1(){
    var salu = event.target;
    document.getElementById("audio").play();
    salu.style.transform = "translateY(-1000px)";

    salu.style.transition = "all 1s ease-in-out";
    salu.style.opacity = 0;
}

function negro() {
    var boton = event.target;
    
        
    boton.style.width = "80px";
    boton.style.height = "80px";
    boton.style.transition = "all 0.3s ease-in-out";
    document.getElementById("audio").play();
    setTimeout(() => {
        
        
        
        boton.style.width = "100px";
        boton.style.height = "100px";
    }, 100);
    negro1 = true;
    blanco1 = false;
    rojo1 = false;
    amarillo1 = false;
    azul1 = false;
    verde1 = false;
    piel = false;
    color = false;
}
function blanco() {
    var boton = event.target;
    boton.style.width = "80px";
    boton.style.height = "80px";
    boton.style.transition = "all 0.3s ease-in-out";
    document.getElementById("audio").play();
    setTimeout(() => {
        
        boton.style.width = "100px";
        boton.style.height = "100px";
    }, 100);
    blanco1 = true;
    negro1 = false;
    rojo1 = false;
    amarillo1 = false;
    piel = false;
    azul1 = false;
    verde1 = false;
    color = false;
}  
function rojo() {
    var boton = event.target;
    boton.style.width = "80px";
    boton.style.height = "80px";
    boton.style.transition = "all 0.3s ease-in-out";
    document.getElementById("audio").play();
    setTimeout(() => {
        
        boton.style.width = "100px";
        boton.style.height = "100px";
    }, 100);
    rojo1 = true;
    blanco1 = false;
    negro1 = false;
    piel = false;
    amarillo1 = false;
    azul1 = false;
    verde1 = false;
    color = false;
}  
function amarillo() {
    var boton = event.target;
    boton.style.width = "80px";
    boton.style.height = "80px";
    boton.style.transition = "all 0.3s ease-in-out";
    document.getElementById("audio").play();
    setTimeout(() => {
        
        boton.style.width = "100px";
        boton.style.height = "100px";
    }, 100);
    amarillo1 = true;
    blanco1 = false;
    rojo1 = false;
    negro1 = false;
    piel = false;
    azul1 = false;
    verde1 = false;
    color = false;
}  
function azul() {
    var boton = event.target;
    boton.style.width = "80px";
    boton.style.height = "80px";
    boton.style.transition = "all 0.3s ease-in-out";
    document.getElementById("audio").play();
    setTimeout(() => {
        
        boton.style.width = "100px";
        boton.style.height = "100px";
    }, 100);
    azul1 = true;
    blanco1 = false;
    rojo1 = false;
    amarillo1 = false;
    negro1 = false;
    verde1 = false;
    color = false;
    piel = false;
}  
function verde() {
    var boton = event.target;
    boton.style.width = "80px";
    boton.style.height = "80px";
    boton.style.transition = "all 0.3s ease-in-out";
    document.getElementById("audio").play();
    setTimeout(() => {
        
        boton.style.width = "100px";
        boton.style.height = "100px";
    }, 100);
    verde1 = true;
    azul1 = false;
    blanco1 = false;
    piel = false;
    rojo1 = false;
    amarillo1 = false;
    negro1 = false;
    color = false;
} 
function piel1() {
    var boton = event.target;
    boton.style.width = "80px";
    boton.style.height = "80px";
    boton.style.transition = "all 0.3s ease-in-out";
    document.getElementById("audio").play();
    setTimeout(() => {
        
        boton.style.width = "100px";
        boton.style.height = "100px";
    }, 100);
    verde1 = false;
    azul1 = false;
    blanco1 = false;
    rojo1 = false;
    amarillo1 = false;
    piel = true;
    negro1 = false;
    color = false;
}  
function color1() {
    var boton = event.target;
    boton.style.width = "80px";
    boton.style.height = "80px";
    boton.style.transition = "all 0.3s ease-in-out"
    document.getElementById("audio").play();
    setTimeout(() => {
        
        boton.style.width = "100px";
        boton.style.height = "100px";
    }, 100);
    verde1 = false;
    azul1 = false;
    blanco1 = false;
    rojo1 = false;
    amarillo1 = false;
    piel = false;
    negro1 = false;
    color = true;
}  
function au(){
    document.getElementById("audio").play();
}
