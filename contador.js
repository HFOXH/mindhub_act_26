window.onload = function() {
    var minutos = 2;
    var segundos = 0;

    var contador = setInterval(function() {
        segundos--;

        if (segundos < 0) {
            minutos--;
            segundos = 59;
        }

        document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
        document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");

        if (minutos === 0 && segundos === 0) {
            clearInterval(contador);
            alert("¡Tiempo finalizado!");
        }
    }, 1000);
};
