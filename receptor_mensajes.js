window.addEventListener("load", comenzar, false);

function comenzar() {

window.addEventListener("message"; receptor, false);

}


function receptor(e) {

    // zona de escribir los mesnajes
    var zonamensajes= document.getElementById("zonamensajes");
    // de donde viene el mensajes y determina el mensaje
    //zonamensajes.innerHTML+="Mensajes desde: ${e.origin} <br>" + e.origin + "<br>";
    zonamensajes.innerHTML+="Mensajes desde: " + e.origin + "<br>";
    zonamensajes.innerHTML+="Mensaje : " + e.data + "<br>"


}