window.addEventListener("load", comenzar, false);

function comenzar() {

    var boton= document.getElementById("boton");
    boton.addEventListener("click", enviar, false);    
    
}

function enviar() {

    //identificar al texto de area e identificar al iframe
    var mensaje= document.getElementById("mensajes").value;
    var iframe=  document.getElementById("iframe");
// enviar un mensaje al iframe y el destino o diminio
    iframe.contentWindow.postMessage(mensaje, "*");

}



