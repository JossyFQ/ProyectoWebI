function usrpas() {
    var usuario = document.getElementById('user').value;
    var nombre = document.getElementById('name').value;
    var apellido = document.getElementById('seconame').value;
    var email = document.getElementById('email').value;
    var genero = document.getElementById('gender').value;
    var fechaNacimiento = document.getElementById('dia_de_birth').value;
    var telefono = document.getElementById('numer').value;
    var direccion = document.getElementById('numer1').value;
    var password = document.getElementById('password').value;

    if (usuario.trim() === '' || nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || genero.trim() === '' || fechaNacimiento.trim() === '' || telefono.trim() === '' || direccion.trim() === '' || password.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    }
    
    document.oncontextmenu=new Function("return false");

    alert('¡Usuario registrado correctamente!');
    return true;
}
