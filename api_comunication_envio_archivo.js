window.addEventListener("load", comenzar, false);

function comenzar() {

    zonadatos=document.getElementById("zonadatos");
    var boton= document.getElementById("archivos");
    // al cambiar la infor del boton
    boton.addEventListener("change", subir_archivos, false);


}

function subir_archivos(e) {

    // almacenar el archivo que acompañe al boton, en un array
    var archivos= e.target.files;

    // almacena 1 archivo que rescata del array
    var archivo= archivos[0];

    // en el servidor quien es el encargado de procesar el archivo enviado
    var url = "procesar.php";

    // crer la conexion
    var solicitud = new XMLHttpRequest();

    // ocupr el atributo upload del xmlhttpRequest, es la subida del archivo
    var subida = solicitud.upload;

    // comienza la subida llama a la funcion que construye la barra de progreso
    subida.addEventListener("loadstart", comienza_barra, false);

    // carga la barra dr progreso mientras sube el archivo al servidr
    subida.addEventListener("progress", estado_barra, false);

    // carga el video en el servidor
    subida.addEventListener("load", mostrar, false);

    // indocar con que archivo del servidor tenemos que contactar para procesar la informacion
    solicitud.open("POST", url, true);

    // constructor el objeto datos que vamos a subir al servidor
    var datos= new FormData();

    // se envia el archivo que se resctado dentro del array en  var archivo= archivos[0];
    datos.append("archivo", archivo)

    // enviar datos
    solicitud.send(datos);

}

function comienza_barra() {

    // dibuja la barra de progreso
    zonadatos.innerHTML="<progress value='0' max='100'></progress>";
}

function estado_barra(e) {

    // recibe una peticion o el archivo de video y almaneca el % del archivo descargado
    var porcentaje= parseInt(e.loaded/e.total*100);
    // identificaba un elemento ID en html desde su etiqueta que de dibujo en comienza_barra()
    var barraprogreso=zonadatos.querySelector("progress");
    // el porcentaje lo llevamos a la barra de progreso
    barraprogreso.value=porcentaje;
    // establecer el % en la zona de progreso
    zonaprogreso.innerHTML="Archivo publicando  " + porcentaje + " %";

}

function mostrar() {
    // nos devuelva el objeto pedido en formato texto
    //zonadatos.innerHTML=e.target.responseText;

    zonadatos.innerHTML="Archivo cargado en servidor ";

}
