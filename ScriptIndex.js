// JavaScript source code


window.onload = inicializaEventos;

// Con esto nos sobra la llamada a la funcion en el html
function incializaEventos() {
    document.getElementById("btn").addEventListener("click", cambiarTitulo, false);
}

function cambiarTitulo()
{
    var mish2;
    //document.getElementById("titulo").innerHTML = "Titulo 2"
    //document.getElementsByTagName("h2")[0].innerHTML = "Titulo 3" // El 0 es la posición que ocupa el h2 que nos referimos
    mish2 = document.getElementsByTagName("h2") // El 0 es la posición que ocupa el h2 que nos referimos
    alert(mish2) // Array de elementos HTML
    alert(mish2[0]) // El H2
    mish2[0].innerHTML = "Estoy cansado"
    mish2[1].innerHTML = "Estoy quemado"

    // Bucle for para cambiar los h2
    for (i = 0; i < mish2.length; i++) {
        mish2[i].innerHTML = "Bucle for"
    }
    // Recordar tomar las propiedades del HTML
    var miboton;
    miboton = document.getElementById("btn")
    miboton.value = "Ya has clickado"
    miboton.disabled = true
}

