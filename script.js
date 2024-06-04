 function actualizarReloj(){
    var objetoHora = new Date();
    var hora = padzero(objetoHora.getHours());
    var minutos = padzero(objetoHora.getMinutes());
    var segundos = padzero(objetoHora.getSeconds());
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var fechaString = currentTime.toLocaleDateString('es-ES', options);
    var tiempostring = hora + ":" + minutos + ":" + segundos;
    document.getElementById("tiempo").textContent = tiempostring;
    
    setTimeout(actualizarReloj, 1000);

}
function padzero(numero){
    return numero < 10 ? "0" + numero : numero;
}
 actualizarReloj();