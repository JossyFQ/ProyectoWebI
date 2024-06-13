function guardarDatos() {
    // Obtener los datos del formulario
    var id = document.getElementById("id").value;
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var genero = document.getElementById("sexo").value;
    var motivoConsulta = document.getElementById("motivoConsulta").value;
    var antecedentePersonales = document.getElementById("antecedentePersonales").value;
    var antecedenteMedico = document.getElementById("antecedenteMedico").value;
    var signoVital = document.getElementById("signoVital").value;
    var eEstomatognatico = document.getElementById("eEstomatognatico").value;

    // Validar que todos los campos estén completos
    if (id.trim() === '' || nombre.trim() === '' || edad.trim() === '' || genero.trim() === '' || motivoConsulta.trim() === '' || antecedentePersonales.trim() === '' || antecedenteMedico.trim() === '' || signoVital.trim() === '' || eEstomatognatico.trim() === '') {
        alert("Por favor complete todos los campos.");
        return false;
    }
    // Crear un objeto con los datos del formulario
    var formData = {
        id: id,
        nombre: nombre,
        edad: edad,
        genero: genero,
        motivoConsulta: motivoConsulta,
        antecedentePersonales: antecedentePersonales,
        antecedenteMedico: antecedenteMedico
    };
    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a través de AJAX a un servidor

    // Solo como ejemplo, mostrar los datos en la consola
    console.log("Datos del formulario:");
    console.log(formData);
    // Retorna false para evitar que el formulario se envíe normalmente
    return false;
}
