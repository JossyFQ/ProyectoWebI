// JavaScript para resaltar los dientes según el tipo de enfermedad
const dientes = document.querySelectorAll('.diente');

dientes.forEach(diente => {
    const tipoEnfermedad = diente.innerText.split(' ')[1]; // Obtiene el tipo de enfermedad del texto del diente

    switch (tipoEnfermedad) {
        case '3i':
            diente.classList.add('rojo');
            break;
        case '2i':
            diente.classList.add('azul');
            break;
        case '1i':
            diente.classList.add('negro');
            break;
        // Agrega más casos según sea necesario
        default:
            break;
    }
});