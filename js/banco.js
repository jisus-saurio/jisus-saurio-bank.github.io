function Retirar() {
    let cantidad = document.getElementById("cant").value;
    let nombre = document.getElementById("nom").value;
    let P100 = 0;
    let P50 = 0;
    let P20 = 0;
    let P10 = 0;
    let P5 = 0;
    let P1 = 0;
    let Element100 = document.getElementById("P100");
    let Element50 = document.getElementById("P50");
    let Element20 = document.getElementById("P20");
    let Element10 = document.getElementById("P10");
    let Element5 = document.getElementById("P5");
    let Element1 = document.getElementById("P1");
    let nameElement = document.getElementById("mote");
   
    if (nombre=='' || cantidad==''){
        Swal.fire({
            title: 'Por favor ingrese credenciales validas',
            text: `¡Por favor, !Ingrese credencales validas.¡   `,
            icon: 'error',
            confirmButtonText: 'Aceptar'

        });
        return;
    }
    else{
         nameElement.innerHTML = "Hola, " + nombre + ". Haz retirado $" + cantidad
    nameElement.classList.add("mostrar")
    nameElement.className = "alert alert-success mostrar"
    while(cantidad > 0 ){
        if (cantidad >= 100) {
        P100 = Math.floor(cantidad / 100);
        cantidad =cantidad % 100;
    }
    else if (cantidad >= 50) {
        P50 = Math.floor(cantidad / 50);
        cantidad =cantidad % 50;
    }
    else if (cantidad >= 20) {
        P20 = Math.floor(cantidad /  20);
        cantidad =cantidad % 20;
    }
    else if (cantidad >= 10) {
        P10 = Math.floor(cantidad /  10);
        cantidad =cantidad % 10;
    }
    else if (cantidad >= 5) {
        P5 = Math.floor(cantidad /  5);
        cantidad =cantidad % 5;
    }
    else if (cantidad >= 1) {
        P1 = Math.floor(cantidad /  1);
        cantidad =cantidad % 1;
    }
    }

    
    
    Element100.innerHTML = P100
    Element50.innerHTML = P50
    Element20.innerHTML = P20
    Element10.innerHTML = P10
    Element5.innerHTML = P5
    Element1.innerHTML = P1

}
}
document.getElementById("calcularBtn").addEventListener("click", Retirar)