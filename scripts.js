var botones_editar = document.getElementsByClassName('edit-button');
var contenedorForm = document.getElementById('form-container');
var editando = false;


for (i in botones_editar) {
    botones_editar[i].onclick = editarItem;
}

function editarItem() {
    if (editando == false) {
        editando = true;
        var td = this.parentNode;
        var tr = td.parentNode;
        var tds_en_tr = tr.getElementsByTagName('td');
        var alimento = tds_en_tr[0].textContent;
        var calorias = tds_en_tr[1].textContent;
        var grasas = tds_en_tr[2].textContent;
        var proteina = tds_en_tr[3].textContent;
        var carbohidratos = tds_en_tr[4].textContent;
        var opciones = tds_en_tr[5].textContent;

        
        tr.innerHTML =
            '<td><input type="text" name="alimento" id="alimento" value="' + alimento + '" size="8"></td>' +
            '<td><input type="text" name="calorias" id="calorias" value="' + calorias + '" size="12"></td>' +
            '<td><input type="text" name="grasas" id="grasas" value="' + grasas + '" size="6"></td>' +
            '<td><input type="text" name="proteina" id="proteina" value="' + proteina + '" size="7"></td>' +
            '<td><input type="text" name="carbohidratos" id="carbohidratos" value="' + carbohidratos + '" size="14"></td>'+
            '<td><select id="calidad">' +
            '<option>bien</option>' +
            '<option>mal</option>' +
            '</select></td>' +
            '<td>En edición</td > ';



        contenedorForm.innerHTML =
            'Pulse Aceptar para guardar los cambios o cancelar para anularlos' +
            '<form action="recibido.html" name="formulario-nutricion" method="get" onsubmit="obtenerInfo()" onreset = "window.location.reload()">' +
            '<input class="submit_button" type = "submit" value="Aceptar"> ' +
            '<input class="reset_button" type="reset" value="Cancelar">';
    }
    else {
        alert('Solo se puede editar una línea. Recargue la página para poder editar otra');
    }
}

function obtenerInfo() {
    contenedorForm.innerHTML =
        'Pulse Aceptar para guardar los cambios o cancelar para anularlos' +
        '<form name="datosNutricion" action="recibido.html"  method="get" onsubmit="obtenerInfo()" onreset = "window.location.reload()">' +
        '<input type="hidden" name="alimento" value="' + document.querySelector('#alimento').value + '">' +
        '<input type="hidden" name="calorias" value="' + document.querySelector('#calorias').value + '">' +
        '<input type="hidden" name="grasas" value="' + document.querySelector('#grasas').value + '">' +
        '<input type="hidden" name="proteina" value="' + document.querySelector('#proteina').value + '">' +
        '<input type="hidden" name="carbohidratos" value="' + document.querySelector('#carbohidratos').value + '">' +
        '<input type="hidden" name="calidad" value="' + document.querySelector('#calidad').value + '">' +

        '<input class="submit_button" type = "submit" value="Aceptar"> ' +
        '<input class="reset_button" type="reset" value="Cancelar">';

    document.datosNutricion.submit();
}







