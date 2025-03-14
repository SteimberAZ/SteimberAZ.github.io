document.addEventListener("DOMContentLoaded", function() {
    const draggable1 = document.getElementById("Dragable1");
    const draggable2 = document.getElementById("Dragable2");
    const draggable3 = document.getElementById("Dragable3");
    const nodraggable = document.getElementById("Dropzone");
    const body1 = document.getElementById("Oso");
    const tedy = document.getElementById("tedy");
    const tedy2 = document.getElementById("tedy2");
    const tedy3 = document.getElementById("tedy3");
    const tedy4 = document.getElementById("tedy4");
    const nodraggable2 = document.getElementById("Oso");
    const botond = document.getElementById("derecha");
    const botoni = document.getElementById("izquierda");
    var input_ani = document.getElementById("name-pet");
    var input_per = document.getElementById("name");
    var defa = document.getElementById("Nombre");
    var defa2 = document.getElementById("nano");
    var confirmdead = false;
    const errore = document.getElementById("error");
    var posicion1 = true;
    var posicion2 = false;
    var posicion3 = false;
    var dead = false;
    var boton_ini = document.getElementById("boton-ini");
    var disminuir = 59;
    var value2 = document.querySelector("#hambre progress").value;
    var ori = false;
    var ori2 = false;
    var disminuir2 = 59;
    var value3 = document.querySelector("#dormir progress ").value;
    var dormiro = document.getElementById("dormir-b");
    var sleepState = false;
    var seuso = 1;
    var coin = 0;
    var coins = document.querySelector("#coinText");
    var coins2 = document.querySelector("#coinText2");
    var coinActu = 1500;
    var tienda = document.querySelector("#shop-b");
    var cerrar = document.querySelector("#cerrar");
    //---------------------------------------------------------de compra
    var veneno = false;
    var venenob = document.querySelector("#compra-1");

    //----------------------------------------------------------uwu
    Notification.requestPermission().then(resultado =>{
        console.log("Respuesta: ",resultado);
    });
    

    boton_ini.addEventListener("click", function() {
        boton_ini.style.fontSize = "20px";
        tedy2.play();
        setTimeout(() => {
            boton_ini.style.fontSize = "30px";
        }, 400);

        if (input_ani.value !== "" && input_per.value !== "") {
            setTimeout(() => {
                document.querySelector(".entrada").style.display = "none";
                botond.style.display = "flex";
                botoni.style.display = "flex";
                document.querySelector(".other").style.display = "block";
                document.querySelector("#Oso").style.display = "Grid";
                document.querySelector(".lista").style.display = "flex";
                document.querySelector("#indicar").style.display = "block";
                defa.innerText = input_ani.value;
                defa2.innerText = input_per.value;
            }, 200);
        } else if (input_ani.value === "" || input_per.value === "") {
            errore.style.display = "Block";
            setTimeout(() => {
                errore.style.display = "none";
            }, 2000);
        }
    });

    botond.addEventListener("click", function() {
        let img = document.querySelector("#derecha img");
        img.style.width = "100px";
        img.style.height = "100px";
        
        let intervalo = setInterval(() => {
            tedy2.play();
            img.style.width = "150px";
            img.style.height = "150px";
            clearInterval(intervalo);
        }, 100);

        if (posicion1 === true) {
            document.querySelector("#Dragable1 img").src = "oso.png";
            document.querySelector("#Dragable2 img").src = "oso.png";
            document.querySelector("#Dragable3 img").src = "oso.png";
            posicion1 = false;
            posicion2 = true;
            dead = false;
        } else if (posicion2 === true) {
            document.querySelector("#Dragable1 img").src = "oso-abre.png";
            document.querySelector("#Dragable2 img").src = "oso-abre.png";
            document.querySelector("#Dragable3 img").src = "oso-abre.png";
            if(veneno === true){
                document.querySelector("#Dragable3 img").src = "veneno.png";
            }
            posicion2 = false;
            posicion3 = true;
            dead = true;
        } else if (posicion3 === true) {
            document.querySelector("#Dragable1 img").src = "camaron.png";
            document.querySelector("#Dragable2 img").src = "Salmon.png";
            document.querySelector("#Dragable3 img").src = "Arroz.png";
            posicion3 = false;
            posicion1 = true;
            dead = false;
        }
    });

    botoni.addEventListener("click", function() {
        let img = document.querySelector("#izquierda img");
        img.style.width = "100px";
        img.style.height = "100px";
        
        let intervalo = setInterval(() => {
            tedy2.play();
            img.style.width = "150px";
            img.style.height = "150px";
            clearInterval(intervalo);
        }, 100);

        if (posicion1 === true) {
            document.querySelector("#Dragable1 img").src = "oso-abre.png";
            document.querySelector("#Dragable2 img").src = "oso-abre.png";
            document.querySelector("#Dragable3 img").src = "oso-abre.png";
            if(veneno === true){
                document.querySelector("#Dragable3 img").src = "veneno.png";
            }
            posicion1 = false;
            posicion3 = true;
            dead = true;
        } else if (posicion3 === true) {
            document.querySelector("#Dragable1 img").src = "oso.png";
            document.querySelector("#Dragable2 img").src = "oso.png";
            document.querySelector("#Dragable3 img").src = "oso.png";
            posicion3 = false;
            posicion2 = true;
            dead = false;
        } else if (posicion2 === true) {
            document.querySelector("#Dragable1 img").src = "camaron.png";
            document.querySelector("#Dragable2 img").src = "Salmon.png";
            document.querySelector("#Dragable3 img").src = "Arroz.png";
            posicion2 = false;
            posicion1 = true;
            dead = false;
        }
    });

    body1.addEventListener("click", function() {
        tedy.play();
        let osito = document.querySelector("#Oso img");
        osito.style.width = "500px";
        
        document.querySelector("#Oso img").src = "oso.png";
        let intervalo = setInterval(() => {
            document.querySelector("#Oso img").src = "oso-abre.png";
            osito.style.width = "626px";
            clearInterval(intervalo);
        }, 100);
        let intervalo2 = setInterval(() => {
            document.querySelector("#Oso img").src = "oso.png";
            osito.style.width = "626px";
            clearInterval(intervalo2);
        }, 1000);
        if(confirmdead === true){
            clearInterval(intervalo);
            clearInterval(intervalo2);
            osito.style.width = "500px";
            document.querySelector("#Oso img").src = "dead.png";
            let intervalo3 = setInterval(() => {
                document.querySelector("#Oso img").src = "dead.png";
                osito.style.width = "626px";
                clearInterval(intervalo3);
            }, 100);
        }
        if(confirmdead === false && sleepState === true){
            clearInterval(intervalo);
            clearInterval(intervalo2);
            osito.style.width = "500px";
            document.querySelector("#Oso img").src = "Sleep-bear.png";
            let intervalo3 = setInterval(() => {
                document.querySelector("#Oso img").src = "Sleep-bear.png";
                osito.style.width = "626px";
                clearInterval(intervalo3);
            }, 100);
        }
    });

    
    draggable1.addEventListener("dragstart", function(event) {
        setTimeout(() => { this.style.display = "none"; }, 0); 
        if(sleepState === false){
            document.querySelector("#Oso img").src = "oso-abre.png";
        }
        tedy2.play();
        if(confirmdead === true){
            document.querySelector("#Oso img").src = "dead.png";
        }
    });

    draggable2.addEventListener("dragstart", function(event) {
        setTimeout(() => { this.style.display = "none"; }, 0); 
        if(sleepState === false){
            document.querySelector("#Oso img").src = "oso-abre.png";
        }
        tedy2.play();
        if(confirmdead === true){
            document.querySelector("#Oso img").src = "dead.png";
        }
    });

    draggable3.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text/plain", this.id);
        setTimeout(() => { this.style.display = "none"; }, 0); 
        if(sleepState === false){
            document.querySelector("#Oso img").src = "oso-abre.png";
        }
        
        tedy2.play();
        if(confirmdead === true){
            document.querySelector("#Oso img").src = "dead.png";
        }
    });

    nodraggable.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    nodraggable.addEventListener("drop", function(event) {
        draggable1.style.display = "block";
        draggable2.style.display = "block";
        draggable3.style.display = "block";
        
        var droppedElementId = event.dataTransfer.getData("text/plain");
        
        
        if(sleepState === false){
            document.querySelector("#Oso img").src = "oso-love.png";
        }
        
        if(confirmdead === false && sleepState === false){
            value2= value2 + 15;
            tedy3.play();
        }
            
        if(confirmdead === false && sleepState === false && document.querySelector("#hambre progress").value <= 80){
            
            coin = coin +10;
            
        }   
        if (coin >= 100) {
                    
            tedy4.play()
            coinActu = coinActu+10;
            coins.textContent = coinActu ;
            coins2.textContent = coinActu ;
            coin = 0;
        
        
        }
    
        
        document.querySelector("#hambre progress").value = value2;
        
        let intervalo = setInterval(() => {
            if(sleepState === false){
                document.querySelector("#Oso img").src = "oso.png";
            }
                
                if(confirmdead === true){
                    document.querySelector("#Oso img").src = "dead.png";
                }
                clearInterval(intervalo);
        }, 500);
        
        
        if (dead === true && droppedElementId === "Dragable3") {
            clearInterval(intervalo);
            document.querySelector("#Oso img").src = "dead.png";
            confirmdead = true;
        }
        if(confirmdead === true){
            document.querySelector("#Oso img").src = "dead.png";
        }
    });

    setInterval(function() {
        if(confirmdead === true){
            value2 = 0;
            document.querySelector("#hambre progress").value = value2;
        }
        if(confirmdead === false){
            disminuir++;
            if(confirmdead === true){
                clearInterval(this);
                value2 = 0;
            }
            
            if (disminuir >= 60) {
                disminuir = 59;  
                value2 = value2-0.5; 
                document.querySelector("#hambre progress").value = value2;
                
            }
            if(value2 <=100 && value2 >=60){
                document.querySelector("#primera").classList.remove("media1", "low1");
                document.querySelector("#primera").classList.add("alto1");
                ori = true;
            }
            if(value2 <= 0){
                clearInterval(this);
                document.querySelector("#Oso img").src = "dead.png";
                confirmdead = true;
            }
            if(value2 >= 110){
                value2 = 100;
            }
            if(value2 <=60 && value2 >=30){
                document.querySelector("#primera").classList.remove("alto1","low1");
                document.querySelector("#primera").classList.add("media1");
                ori = true;
    
            }
            if(value2 <=30){
                document.querySelector("#primera").classList.remove("media1");
                document.querySelector("#primera").classList.add("low1");
                if(Notification.permission === "granted" && ori === true && confirmdead === false){
                    var title = " ¡EMERGENCIA!";
                    const body = input_per.value + ", tu querido " + input_ani.value + " ¡Está muy hambriento! 🐻🥺";
    
                    
                    new Notification(title, {
                        body: body,  
                        icon: 'osoi.png'  
                    });
                }
                //notification.onclick = function() {
                    // Aquí puedes especificar la URL que deseas abrir
                    //window.location.href = '/alimentar-oso'; // Redirige a la página de alimentar al oso
                //};
                ori= false;
            
                
            }
            
        }
       
        
    }, 1000);  
    setInterval(function() {
        if(confirmdead === true){
            value3 = 0;
            value2= 0;
            document.querySelector("#dormir progress").value = value3;
            document.querySelector("#hambre progress").value = value2;
            document.querySelector("#Oso img").src = "dead.png";
            clearInterval(this);
        } 
        if(sleepState === false && confirmdead === false){
            disminuir2++; 
            if (disminuir2 >= 60) {
                disminuir2 = 59;  
                value3 = value3-0.5; 
                document.querySelector("#dormir progress").value = value3;
                
            }
            if(value3 <=100 && value3 >=60){
                document.querySelector("#segunda").classList.remove("media2", "low2");
                document.querySelector("#segunda").classList.add("alto2");
                ori2= true;
            }
            if(value3 <= 0){
                clearInterval(this);
                document.querySelector("#Oso img").src = "dead.png";
                confirmdead = true;
            }
            if(value3 >= 110){
                value3 = 100;
                
            }
            if(value3 <=60 && value3 >=30){
                document.querySelector("#segunda").classList.remove("alto2", "low2");
                document.querySelector("#segunda").classList.add("media2");
                ori2= true;

            }
            if(value3 <=30){
                document.querySelector("#segunda").classList.remove("media2");
                document.querySelector("#segunda").classList.add("low2");
                if(Notification.permission === "granted" && ori2 === true && confirmdead === false){
                    var title = " ¡EMERGENCIA!";
                    const body = input_per.value + ", tu querido " + input_ani.value + " ¡Está con mucho sueño! 🐻🥺";
    
                    
                    new Notification(title, {
                        body: body,  
                        icon: 'osoi.png'  
                    });
                    ori2= false;
                }
            
            }
            
            
             
        }

        if(sleepState === true && confirmdead=== false){
           
            value3= value3 + 2;
            document.querySelector("#dormir progress").value = value3;
            seuso = seuso+1;

            if(value3 <=100 && value3 >=60){
                document.querySelector("#segunda").classList.remove("media2", "low2");
                document.querySelector("#segunda").classList.add("alto2");
                ori2= true;
            }
            
            if(value3 >= 110){
                value3 = 100;
            }
            if(value3 <=60 && value3 >=30){
                document.querySelector("#segunda").classList.remove("alto2", "low2");
                document.querySelector("#segunda").classList.add("media2");
                ori2= true;
            }
            if(value3 === 0){
                clearInterval(this);
                document.querySelector("#Oso img").src = "dead.png";
                confirmdead = true;
            
            }
            
        }
        if(confirmdead === true){
            value3 = 0;
            document.querySelector("#dormir progress").value = value3;
        }
    }, 1000);  

    nodraggable2.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    nodraggable2.addEventListener("drop", function() {
        draggable1.style.display = "block";
        draggable2.style.display = "block";
        draggable3.style.display = "block";
    });

    
    var intervalote   
    dormiro.addEventListener("click", function(){
        if(sleepState === true){
            sleepState =false;
            document.querySelector("#light").style.backgroundColor = "red";
            clearInterval(intervalote);
            if(confirmdead === false){
                document.querySelector("#Oso img").src = "oso.png";
            }
            if(confirmdead === true){
                document.querySelector("#Oso img").src = "dead.png";
            }
        }
        else if(sleepState === false){
            sleepState =true;
            document.querySelector("#light").style.backgroundColor = "rgb(43, 255, 43)";
            if(confirmdead === false){
                document.querySelector("#Oso img").src = "Sleep-bear.png";
            }
            intervalote = setInterval(function(){
                if(document.querySelector("#dormir progress").value <= 80){
                    coin = coin + 15;
                }
               
                
                if (coin >= 100) {
                                
                    tedy4.play()
                    coinActu = coinActu+10;
                    coins.textContent = coinActu ;
                    coins2.textContent = coinActu ;
                    coin = 0;
                }
                if(confirmdead === true){
                    document.querySelector("#Oso img").src = "dead.png";
                    clearInterval(intervalote);
                }
            },1000);
        
        }

       
        
        
        this.style.fontSize = "40px";
        tedy2.play();
        setTimeout(() => {
            this.style.fontSize = "50px";
        }, 400);
        
    
        
    });
    coins.textContent = coinActu ;
    coins2.textContent = coinActu ;

    tienda.addEventListener("click",function(){
        tienda.style.fontSize = "40px";
        tedy2.play();
        setTimeout(() => {
            tienda.style.fontSize = "50px";
        }, 400);
        document.querySelector(".tienda").style.display = "grid";
    });
    cerrar.addEventListener("click",function(){
        cerrar.style.fontSize = "40px";
        tedy2.play();
        setTimeout(() => {
            cerrar.style.fontSize = "50px";
        }, 400);
        document.querySelector(".tienda").style.display = "none";
    });
    venenob.addEventListener("click",function(){
        venenob.style.fontSize = "40px";
        tedy2.play();
        setTimeout(() => {
            venenob.style.fontSize = "50px";
        }, 400);
        if(coinActu >= 500 && veneno === false){
            veneno = true;
            coinActu = coinActu - 500;
            coins.textContent = coinActu ;
            coins2.textContent = coinActu ;
        }
         
    });



});

