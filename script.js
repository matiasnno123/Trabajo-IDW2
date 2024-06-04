 function actualizarReloj(){
    var objetoHora = new Date();
    var hora = padzero(objetoHora.getHours());
    var minutos = padzero(objetoHora.getMinutes());
    var segundos = padzero(objetoHora.getSeconds());
    var tiempostring = hora + ":" + minutos + ":" + segundos;
    var fechastring = objetoHora.getDate();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var fechastring = new Date().toLocaleDateString('es-ES', options);
    document.getElementById("tiempo").textContent = tiempostring;
    document.getElementById("fecha").textContent = fechastring
    setTimeout(actualizarReloj, 1000);
}
function padzero(numero){
    return numero < 10 ? "0" + numero : numero;
}
 actualizarReloj();