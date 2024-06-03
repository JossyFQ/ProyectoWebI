function guardarDatos() {
    // Obtener los datos del formulario
    var pDiagnostico = document.getElementById("pDiagnostico").value;
    var diagnostico = document.getElementById("diagnostico").value;

    // Validar que todos los campos estén completos
    if (pDiagnostico.trim() === '' || diagnostico.trim() === '') {
        alert("Por favor complete todos los campos.");
        return false;
    }
    // En este ejemplo, simplemente mostramos un mensaje de éxito
    alert("Datos guardados");
    return true;
}
