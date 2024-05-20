//limitacion de seleccion
function limitarSeleccionMovilidad(checkbox) {
    const checkboxes = document.querySelectorAll('.movilidad');
    let alMenosUnaSeleccionada = false;

    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
    //verifica la seleccion
    /*if (checkbox.checked) {
        alert("¡Grado seleccionado con éxito!");
    } else {
        alert("Por favor, seleccione un grado de movilidad.");
    }*/
}
function limitarSeleccionFluor(checkbox) {
    const checkboxes = document.querySelectorAll('.Fluor');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}
function limitarSeleccionDentrifico(checkbox) {
    const checkboxes = document.querySelectorAll('.Dentrifico');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}
function limitarSeleccionColutorios(checkbox) {
    const checkboxes = document.querySelectorAll('.Colutorios');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}
function limitarSeleccionPlaca(checkbox) {
    const checkboxes = document.querySelectorAll('.Placa');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}
function limitarSeleccionPeriodontal(checkbox) {
    const checkboxes = document.querySelectorAll('.Periodontal');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}
////////////////////////////////////////////////////////
//verifica la selecciones y ve cuales se marcaron
function guardarDatos() {
    // Recopilar los valores de los campos del formulario
    var movilidad = document.querySelector('input[name="grado"]:checked, input[name="grado1"]:checked, input[name="grado2"]:checked, input[name="grado3"]:checked');
    var fluor = document.querySelector('input[name^="nivel0"]:checked, input[name^="nivel1"]:checked, input[name^="nivel2"]:checked, input[name^="nivel3"]:checked, input[name^="nivel4"]:checked');
    var dentrifico = document.querySelector('input[name^="dColgate"]:checked, input[name^="dOral"]:checked, input[name^="dSensdyne"]:checked, input[name^="dLPolo"]:checked, input[name^="dLacer"]:checked, input[name^="dBinaca"]:checked, input[name^="dSignal"]:checked, input[name^="dOtro"]:checked');
    var colutorio = document.querySelector('input[name^="cLacer"]:checked, input[name^="cListerine"]:checked, input[name^="cDeliplus"]:checked, input[name^="cColgate"]:checked, input[name^="cKin"]:checked, input[name^="cAuchan"]:checked, input[name^="cOtro"]:checked');
    var placa = document.querySelector('input[name^="placa"]:checked, input[name^="sarro"]:checked, input[name^="calculo"]:checked');
    var periodontal = document.querySelector('input[name^="sano"]:checked, input[name^="gingivitis"]:checked, input[name^="ePeriodontal"]:checked, input[name^="periodontitisL"]:checked, input[name^="periodontitisM"]:checked, input[name^="periodontitisA"]:checked');
    // Comprobar si se han completado todos los campos obligatorios
    if (!movilidad || !fluor || !dentrifico || !colutorio || !placa || !periodontal) {
        alert('Por favor, completa todos los campos obligatorios.');
        return false; // Detener la ejecución de la función si faltan campos obligatorios
    }
    var datos = {
        movilidad: movilidad.value,
        fluor: fluor.value,
        dentrifico: dentrifico.value,
        colutorio: colutorio.value,
        placa: placa.value,
        periodontal: periodontal.value
    };
    //verifica los numeros de los marcados
    // Recopilar los valores de los campos del formulario
    var claseI = document.getElementById('claseI').checked ? document.getElementById('claseI').nextElementSibling.value : 0;
    var claseII = document.getElementById('claseII').checked ? document.getElementById('claseII').nextElementSibling.value : 0;
    var claseIII = document.getElementById('claseIII').checked ? document.getElementById('claseIII').nextElementSibling.value : 0;
    var claseIV = document.getElementById('claseIV').checked ? document.getElementById('claseIV').nextElementSibling.value : 0;
    var claseV = document.getElementById('claseV').checked ? document.getElementById('claseV').nextElementSibling.value : 0;
    var claseVI = document.getElementById('claseVI').checked ? document.getElementById('claseVI').nextElementSibling.value : 0;

    // Mostrar mensaje de éxito
    alert('Datos guardados correctamente:\n\n' +
        'Clase I: ' + claseI + '\n' +
        'Clase II: ' + claseII + '\n' +
        'Clase III: ' + claseIII + '\n' +
        'Clase IV: ' + claseIV + '\n' +
        'Clase V: ' + claseV + '\n' +
        'Clase VI: ' + claseVI);

    // Mostrar mensaje de éxito
    alert('Los datos se han guardado correctamente:\n\n' + JSON.stringify(datos));
    return true;

}
////////////////////////////////////////////////////////
// Llamar a la función cuando el usuario hace clic en el botón de envío
/*document.getElementById("btn").addEventListener("click", function guardarDatos() {
    limitarSeleccionMovilidad();
    limitarSeleccionFluor();
    limitarSeleccionDentrifico();
    limitarSeleccionColutorios();
    limitarSeleccionPlaca();
    limitarSeleccionPeriodontal();
});*/
//verifica los numeros de los marcados
/*function guardarDatos() {
    // Recopilar los valores de los campos del formulario
    var claseI = document.getElementById('claseI').checked ? document.getElementById('claseI').nextElementSibling.value : 0;
    var claseII = document.getElementById('claseII').checked ? document.getElementById('claseII').nextElementSibling.value : 0;
    var claseIII = document.getElementById('claseIII').checked ? document.getElementById('claseIII').nextElementSibling.value : 0;
    var claseIV = document.getElementById('claseIV').checked ? document.getElementById('claseIV').nextElementSibling.value : 0;
    var claseV = document.getElementById('claseV').checked ? document.getElementById('claseV').nextElementSibling.value : 0;
    var claseVI = document.getElementById('claseVI').checked ? document.getElementById('claseVI').nextElementSibling.value : 0;

    // Mostrar mensaje de éxito
    alert('Datos guardados correctamente:\n\n' +
        'Clase I: ' + claseI + '\n' +
        'Clase II: ' + claseII + '\n' +
        'Clase III: ' + claseIII + '\n' +
        'Clase IV: ' + claseIV + '\n' +
        'Clase V: ' + claseV + '\n' +
        'Clase VI: ' + claseVI);

    return true;
}
document.getElementById('guardarBtn').addEventListener('click', guardarDatos);*/
