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
    //verifica los numeros de los marcados
    // Recopilar los valores de los campos del formulario
    var placa = document.getElementById('placa').value;
    var calculo = document.getElementById('calculo').value;
    var gingivitis = document.getElementById('gingivitis').value;
    // Recopilar los valores de los campos del formulario
    var periodontal = document.querySelector('input[name^="periodontitisL"]:checked, input[name^="periodontitisM"]:checked, input[name^="periodontitisA"]:checked');
    var oclusion = document.querySelector('input[name^="angleI"]:checked, input[name^="angleII"]:checked, input[name^="angleIII"]:checked');
    var fluor = document.querySelector('input[name^="leve"]:checked, input[name^="moderada"]:checked, input[name^="severa"]:checked');
    // Obtener los valores de los campos
    var c = document.getElementById("c").value;
    var p = document.getElementById("p").value;
    var o = document.getElementById("o").value;
    // Comprobar si se han completado todos los campos obligatorios
    if (!fluor || !oclusion || !periodontal || !c || !p || !o) {
        alert('Por favor, completa todos los campos obligatorios.');
        return false; // Detener la ejecución de la función si faltan campos obligatorios
    }
    var datos = {
        placa: placa.value,
        calculo: calculo.value,
        gingivitis: gingivitis.value,
        periodontal: periodontal.value,
        oclusion: oclusion.value,
        fluor: fluor.value,
        c: c.value,
        p: p.value,
        o: o.value
    };
    // Mostrar los datos recopilados en una alerta (puedes personalizar cómo se muestran los datos aquí)
    alert('Placa: ' + placa + '\nCálculo: ' + calculo + '\nGingivitis: ' + gingivitis);
    // Mostrar mensaje de éxito
    alert('Los datos se han guardado correctamente:\n\n' + JSON.stringify(datos));

    alert("\nPeriodontal: " + periodontal.value + "\nOclusión: " + oclusion.value + 
        "\nFluor: " + fluor.value + "\nC: " + c + "\nP: " + p + "\nO: " + o);
    // Solo como ejemplo, mostrar los datos en la consola
    console.log("Datos del formulario:");
    console.log(datos);
    // Retorna false para evitar que el formulario se envíe normalmente
    //return false;
    return true;

}
