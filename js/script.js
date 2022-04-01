console.log("link funcionando");

document.getElementById("boton").addEventListener("click", mostrarDato);

function mostrarDato() {
    /*alert ("Hello World!");*/
   
    
    let imagen =document.getElementById("estrella");
    imagen.src="./images/illustration-thank-you.svg";
    imagen.style.margin = "auto";

    let container = document.getElementById("conta");
    /*
    container.style.cssText=" height: 10px; width: 10px; display: flex;justify-content: center";*/
    container.style.margin="20px auto";
    container.style.display = "inline";
    let pregunta = document.getElementById("preg");
    pregunta.innerHTML = "Thank you!";
    pregunta.style.display = "flex";
    pregunta.style.justifyContent = "center";
    /*pregunta.style.position = "text-align: center";*/

    let card = document.getElementById("card");
    
    
    let texto = document.getElementById("texto");
    texto.innerHTML = "We appreciate you takink the time to give a rating. If you ever need support, dont hesitate to get in touch!";
    texto.style.display =  "flex";
    texto.style.textAlign = "center";

    //remover elementos 
    let lista=document.getElementById("lista");
    padre = lista.parentNode;
    padre.removeChild(lista)

    //agregar un nuevo texto
    const msg = document.createElement("h3");  // <div></div>
    msg.textContent = "You selected 4 out of 5";                
    pregunta.insertAdjacentElement("beforebegin", msg);

    msg.style.color="hsl(25, 97%, 53%)";
    msg.style.textAlign = "center";

    let boton = document.getElementById("boton");
    padrebtn = boton.parentNode;
    padre.removeChild(boton);
  }