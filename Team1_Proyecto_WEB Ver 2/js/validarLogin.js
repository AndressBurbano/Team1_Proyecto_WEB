function validarLogin(){
    var correo, clave, expresion;

    correo = document.getElementById("correo").value;
    clave = document.getElementById("clave").value;

    expresion = /\w+@\w+\.+[a-z]/; /* exprecion regular para validar el correo. formato: ejemplo@email.com */

    if(correo ==="" || clave ===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    // la validacion debe hacerse con los datos que estan guardados en la base de datos.
    if(correo.length > 50){
        alert("El correo ingresado es muy largo");
        return false;
    }
        if(clave.length <6){ 
        alert("La contraseña es muy corta");
        return false;
    }
    if(!expresion.test(correo)){ 
        alert("El email no tiene un formato valido");
        return false;
    }

}