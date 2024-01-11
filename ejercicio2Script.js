class clsPersona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

function comprobar() {
    var Persona = clsPersona
    Persona.nombre = document.getElementById("nombre").value;
    Persona.apellido = document.getElementById("apellido").value;
    alert(Persona.nombre + " " + Persona.apellido)
}