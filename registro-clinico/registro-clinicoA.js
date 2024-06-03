function guardarDatos() {
    // Obtener los datos del formulario
    var id = document.getElementById("id").value;
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var sexo = document.getElementById("sexo").value;
    var motivoConsulta = document.getElementById("motivoConsulta").value;
    var antecedentePersonales = document.getElementById("antecedentePersonales").value;
    var antecedenteMedico = document.getElementById("antecedenteMedico").value;
    var signoVital = document.getElementById("signoVital").value;
    var eEstomatognatico = document.getElementById("eEstomatognatico").value;

    // Validar que todos los campos estén completos
    if (id.trim() === '' || nombre.trim() === '' || edad.trim() === '' || motivoConsulta.trim() === '' || antecedentePersonales.trim() === '' || antecedenteMedico.trim() === '' || signoVital.trim() === '' || eEstomatognatico.trim() === '') {
        alert("Por favor complete todos los campos.");
        return false;
    }
    // En este ejemplo, simplemente mostramos un mensaje de éxito
    alert("Datos guardados");
    return true;
}
