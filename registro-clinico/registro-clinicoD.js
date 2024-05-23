//limitacion de seleccion
function limitarSeleccionFluor(checkbox) {
    const checkboxes = document.querySelectorAll('.Fluor');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}
function limitarSeleccionOclusion(checkbox) {
    const checkboxes = document.querySelectorAll('.Oclusion');
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
    var fluor = document.querySelector('input[name^="leve"]:checked, input[name^="moderada"]:checked, input[name^="severa"]:checked');
    var oclusion = document.querySelector('input[name^="angleI"]:checked, input[name^="angleII"]:checked, input[name^="angleIII"]:checked');
    var periodontal = document.querySelector('input[name^="periodontitisL"]:checked, input[name^="periodontitisM"]:checked, input[name^="periodontitisA"]:checked');
    // Comprobar si se han completado todos los campos obligatorios
    if (!fluor || !oclusion || !periodontal) {
        alert('Por favor, completa todos los campos obligatorios.');
        return false; // Detener la ejecución de la función si faltan campos obligatorios
    }
    var datos = {
        fluor: fluor.value,
        oclusion: oclusion.value,
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
