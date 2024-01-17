function AgregarFila()
{
    var fila = tabla.insertRow(tabla.rows.lenght);
    for (var i = 0; i < 2; i++)
    {
        fila.insertCell(i).innerHTML = "Celda" + tabla.rows.lenght + (i + 1);
    }
}

function BorrarFila()
{
    tabla.deleteRow(tabla.rows.lenght - 1);
}