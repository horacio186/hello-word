window.addEventListener("load", comenzar, false);

function comenzar() {

    zonadatos=document.getElementById("zonadatos");
    var boton= document.getElementById("boton");
    boton.addEventListener("click", enviar_datos, false);
}


function enviar_datos(){

   // almacenar lo que el usuario haya escrito en el cuandro de texto
   el_nombre = document.getElementById("elnombre").value;
   el_apellido = document.getElementById("elapellido").value;

   // generar el constructor de tipo formData, donde rescata la informaciòn que se debe enviar al servidor
   var datos = new FormData();

   // agregarle la informacion que tenenos que enviar, almacena en el archivo php que esta en el servidor
   datos.append("nombre", el_nombre);
   datos.append("apellido", el_apellido);

   // la informacion es procesada en un archivo php en el servidor, indicar la ruta
   var url = "procesar.php";

   // crear archivo para conectar con el servidor remoto
   var solicitud = new XMLHttpRequest();

   // mostrar el archivo
   solicitud.addEventListener("load", mostrar, false);

   // abrir la coenxion
   solicitud.open("POST", url, true);

   // envia la informacion al servidor, que se definio en el cosntructor
   solicitud.send(datos);
}


function mostrar(e) {
   
    // respuesta en forma de textp de la respuesta del servidor
    zonadatos.innerHTML=e.target.responseText;

}