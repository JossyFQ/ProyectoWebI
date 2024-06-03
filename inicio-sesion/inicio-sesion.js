function inicio() {
    //var email = document.getElementById('email').value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validar que los campos no estén vacíos
    if (username.trim() === '' || password.trim() === '') {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    
    document.oncontextmenu=new Function("return false");

    // En este ejemplo, simplemente mostramos un mensaje de éxito
    alert("Inicio de sesión exitoso para el usuario: " + username);

    // Redirigir a la página de inicio de sesión exitoso
    //window.location.href = 'index.html';
    return true;

}

function registrar() {
    window.location.href = '../registro-usuario/registro-usuario.html';
}

