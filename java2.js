
    
const draggable1 = document.getElementById("Dragable1");
const draggable2 = document.getElementById("Dragable2");
const draggable3 = document.getElementById("Dragable3");
const nodraggable = document.getElementById("Dropzone");
const body1 = document.getElementById("Oso");
const tedy = document.getElementById("tedy");
const tedy2 = document.getElementById("tedy2");
const tedy3 = document.getElementById("tedy3");
const nodraggable2 = document.getElementById("Oso");

const botond = document.getElementById("derecha");
const botoni = document.getElementById("izquierda");
var aumento = -1;
var aumento2 = -1;
var osoce = false;
var osoab = false;
var osoce2 = false;
var osoab2 = false;

botond.addEventListener("click",function(){
    let img = document.querySelector("#derecha img");
    img.style.width = "100px";
    img.style.height = "100px";
    
    let intervalo = setInterval(()=>{
        tedy2.play();
        img.style.width = "150px";
        img.style.height = "150px";
        clearInterval(intervalo);
    },100);
    aumento = aumento+1;
    if(aumento === 0){
        document.querySelector("#Dragable1 img").src = "oso.png";
        document.querySelector("#Dragable2 img").src = "oso.png";
        document.querySelector("#Dragable3 img").src = "oso.png";
        osoce = true;
        osoab = false;
    }
    else if(aumento === 1){
        document.querySelector("#Dragable1 img").src = "oso-abre.png";
        document.querySelector("#Dragable2 img").src = "oso-abre.png";
        document.querySelector("#Dragable3 img").src = "oso-abre.png";
        osoab = true;
        osoce = false;
    }
    else if(aumento === 2){
        document.querySelector("#Dragable1 img").src = "camaron.png";
        document.querySelector("#Dragable2 img").src = "Caldo1.png";
        document.querySelector("#Dragable3 img").src = "Arroz.png";
        aumento = -1;
        osoab = false;
        osoce = false;
        osoab2 = false;
        osoce2 = false;
    }

    if(osoce2 === true){
        document.querySelector("#Dragable1 img").src = "camaron.png";
        document.querySelector("#Dragable2 img").src = "Caldo1.png";
        document.querySelector("#Dragable3 img").src = "Arroz.png";
        osoce2 = false;
        aumento = -1;
        aumento2 = -1;
    }
    if(osoab2 === true){
        document.querySelector("#Dragable1 img").src = "oso-abre.png";
        document.querySelector("#Dragable2 img").src = "oso-abre.png";
        document.querySelector("#Dragable3 img").src = "oso-abre.png";
        osoab2 = false;
        aumento = -1;
        aumento2 = -1;
    }
    
});
botoni.addEventListener("click",function(){
    let img = document.querySelector("#izquierda img");
    img.style.width = "100px";
    img.style.height = "100px";
    
    let intervalo = setInterval(()=>{
        tedy2.play();
        img.style.width = "150px";
        img.style.height = "150px";
        clearInterval(intervalo);
    },100);
    aumento2= aumento2+1;
    if(aumento2 === 0){
        
        document.querySelector("#Dragable1 img").src = "oso-abre.png";
        document.querySelector("#Dragable2 img").src = "oso-abre.png";
        document.querySelector("#Dragable3 img").src = "oso-abre.png";
        osoce2 = true;
        osoab2 = false;
        
    }
    else if(aumento2 === 1){
        document.querySelector("#Dragable1 img").src = "oso.png";
        document.querySelector("#Dragable2 img").src = "oso.png";
        document.querySelector("#Dragable3 img").src = "oso.png";
        osoab2 = true;
        osoce2 = false;
    }
    else if(aumento2 === 2){
        document.querySelector("#Dragable1 img").src = "camaron.png";
        document.querySelector("#Dragable2 img").src = "Caldo1.png";
        document.querySelector("#Dragable3 img").src = "Arroz.png";
        aumento2 = -1;
        aumento= -1;
        osoab2 = false;
        osoce2 = false;
        osoab = false;
        osoce = false;
    }
    
    if(osoce === true){
        document.querySelector("#Dragable1 img").src = "camaron.png";
        document.querySelector("#Dragable2 img").src = "Caldo1.png";
        document.querySelector("#Dragable3 img").src = "Arroz.png";
        osoce = false;
        aumento = -1;
        aumento2 = -1;
    }
    if(osoab === true){
        document.querySelector("#Dragable1 img").src = "oso.png";
        document.querySelector("#Dragable2 img").src = "oso.png";
        document.querySelector("#Dragable3 img").src = "oso.png";
        osoab = false;
        aumento = -1;
        aumento2 = -1;
    }

    
});


body1.addEventListener("click" ,function(){
    tedy.play();
    let osito = document.querySelector("#Oso img");
    osito.style.width = "500px";
    document.querySelector("#Oso img").src = "oso.png";
    let intervalo = setInterval(()=>{
        document.querySelector("#Oso img").src = "oso-abre.png";
        
        osito.style.width = "626px";
        clearInterval(intervalo);
        
    },100);
    let intervalo2 = setInterval(()=>{
        document.querySelector("#Oso img").src = "oso.png";;
        
        osito.style.width = "626px";
        clearInterval(intervalo2);
        
    },1000);
    
});
draggable1.addEventListener("dragstart", function(event){
    setTimeout(()=>{this.style.display = "none";},0); 
    document.querySelector("#Oso img").src = "oso-abre.png";
    tedy2.play();
});

draggable2.addEventListener("dragstart", function(event){
    setTimeout(()=>{this.style.display = "none";},0); 
    document.querySelector("#Oso img").src = "oso-abre.png";
    tedy2.play();
});
draggable3.addEventListener("dragstart", function(event){
    setTimeout(()=>{this.style.display = "none";},0); 
    document.querySelector("#Oso img").src = "oso-abre.png";
    tedy2.play();
});

nodraggable.addEventListener("dragover",function(event){
    event.preventDefault();
})

nodraggable.addEventListener("drop",function(){
    draggable1.style.display = "block";
    draggable2.style.display = "block";
    draggable3.style.display = "block";
    tedy3.play();
    document.querySelector("#Oso img").src = "oso-love.png";
    
    let intervalo = setInterval(()=>{
        document.querySelector("#Oso img").src = "oso.png";
        
        clearInterval(intervalo);
    },500);
    
});

nodraggable2.addEventListener("dragover",function(event){
    event.preventDefault();
})

nodraggable2.addEventListener("drop",function(){
    draggable1.style.display = "block";
    draggable2.style.display = "block";
    draggable3.style.display = "block";
   
});

