var dir_url = document.URL;
var contenedorForm2 = document.getElementById('form-container2');

var alimento = parametroURL("alimento");
var calorias = parametroURL("calorias");
var grasas = parametroURL("grasas");
var proteina = parametroURL("proteina");
var carbohidratos = parametroURL("carbohidratos");
var calidad = parametroURL("calidad");

function parametroURL(_par) {
    var _p = null;
    if (location.search) location.search.substr(1).split("&").forEach(function (pllv) {
        var s = pllv.split("="), //separamos llave/valor
            ll = s[0],
            v = s[1] && decodeURIComponent(s[1]); //valor hacemos encode para prevenir url encode
        if (ll == _par) { //solo nos interesa si es el nombre del parametro a buscar
            if (_p == null) {
                _p = v; //si es nula, quiere decir que no tiene valor, solo textual
            } else if (Array.isArray(_p)) {
                _p.push(v); //si ya es arreglo, agregamos este valor
            } else {
                _p = [_p, v]; //si no es arreglo, lo convertimos y agregamos este valor
            }
        }
    });
    return _p;
}

if (calidad == 'bien') {
    contenedorForm2.innerHTML =
        '<table class="form2">' +
            '<thead class="theadf2">' +
                '<tr>' +
                    '<th><span class="feliz">&#128578</span></th>' +
                    '<th><div class="alimento">' + alimento + '</div>' +
                    '<span class="alimento_titulo"> Alimento </span></th>'+ 
                '</tr>' +
            '</thead>' +
            '<tbody class="tbodyf2">' +
                '<tr>' +
                    '<td>Calorías (Kcal)</td>' +
                    '<td><div class="cetiqueta">' +calorias+'</div></td>' +
                '</tr>' +
                '<tr>' +
                    '<td>Grasas (g)</td>' +
                    '<td><div class="getiqueta">' +grasas+'</div></td>' +
                '</tr>' +
                '<tr>' +
                    '<td>Proteína (g)</td>' +
                    '<td><div class="petiqueta">' +proteina+'</div></td>' +
                '</tr>' +
                '<tr>' +
                    '<td>Carbohidratos (g)</td>' +
                    '<td><div class="carbetiqueta">' +carbohidratos+'</div></td>' +
                '</tr>' +
            '</tbody>' +
        '</table>';
}

if (calidad == 'mal') {
    contenedorForm2.innerHTML =
    '<table class="form2">' +
            '<thead class="theadf2">' +
                '<tr>' +
                    '<th><span class="feliz">&#128577</span></th>' +
                    '<th><div class="alimento">' + alimento + '</div>' +
                    '<span class="alimento_titulo"> Alimento </span></th>'+ 
                '</tr>' +
            '</thead>' +
            '<tbody class="tbodyf2">' +
                '<tr>' +
                    '<td>Calorías (Kcal)</td>' +
                    '<td><div class="cetiqueta">' +calorias+'</div></td>' +
                '</tr>' +
                '<tr>' +
                    '<td>Grasas (g)</td>' +
                    '<td><div class="getiqueta">' +grasas+'</div></td>' +
                '</tr>' +
                '<tr>' +
                    '<td>Proteína (g)</td>' +
                    '<td><div class="petiqueta">' +proteina+'</div></td>' +
                '</tr>' +
                '<tr>' +
                    '<td>Carbohidratos (g)</td>' +
                    '<td><div class="carbetiqueta">' +carbohidratos+'</div></td>' +
                '</tr>' +
            '</tbody>' +
        '</table>';
}

