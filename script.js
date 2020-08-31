function validar() {
    var nombre, apellidos, correo, rut, especialidad, fecha, hora;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    rut = document.getElementById("rut").value;
    especialidad = document.getElementById("especialidad").value;
    fecha = document.getElementById("fecha").value;
    hora = document.getElementById("hora").value;

    expresion = /\w+@\w+\.+[a-z]/;

    function validarFormatoFecha(fecha) {
        var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
        if ((fecha.match(RegExPattern)) && (fecha != '')) {
            return true;
        } else {
            return false;
        }
    }
    if (nombre === "" || apellidos === "" || correo === "" || rut === "" || especialidad === "" || fecha === "" || hora === "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    } else if (apellidos.length > 80) {
        alert("El apellidos son muy largos");
        return false;
    } else if (edad < 0) {
        alert("La edad no es válida");
        return false;
    } else if (correo.length > 100) {
        alert("El correo es muy largo");
        return false;
    } else if (!expresion.test(correo)) {
        alert("El correo no es válido");
        return false;
    } else if (rut.length > 20 || rut.length > 20) {
        alert("El rut es muy largo");
        return false;
    } else if (isNaN(rut)) {
        alert("Rut inválido");
        return false;
    }

    var saludo = "Estimado(a)" + nombre + " " + apellidos + ", su hora para " + especialidad + " ha sido reservada para el día " + fecha + " a las " + hora + ". Además, se le envió un mensaje a su correo " + correo + " con el detalle de su cita. Gracias por preferirnos."
    alert(saludo);
}