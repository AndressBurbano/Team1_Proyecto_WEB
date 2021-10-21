function validarRegistro() {
/* Variables para almacenar los datos que se ingresan. */
    var identificacion, nombre, apellido, telefono, email, password , password2,expresion;
    
/* Se seleciona un elemento por id y se guarda su valor */
    identificacion = document.getElementById("identificacion").value;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    password2 = document.getElementById("password2").value;
    
    expresion = /\w+@\w+\.+[a-z]/; /* exprecion regular para validar el correo formato: ejemplo@email.com */

    /* se evalua las variables que no esten vacidas */
    if(identificacion === "" || nombre ==="" || apellido ==="" || telefono === "" || email ==="" || password ==="" || password2 ===""){
        alert("Todos los campos son obligatorios");
        return false;
    }

/* se valida la longitud de los string y que contengan caracteres validos. */
    else if(identificacion.length > 10){
        alert("El numero de identificacion es muy largo. Solo se permiten 10 caracteres");
        return false; //Se usa para evitar que si se cumple el if no se envien el formulario
    }
    else if(isNaN(identificacion)){ //isNaN es una funcion que evalua si una variable es un numero
        alert("No ingreso un numero valido");
        return false;
    }
    else if(nombre.length > 50){
        alert("El nombre es muy largo. Solo se permiten 50 caracteres");
        return false;
    }
    else if(apellido.length > 50){
        alert("El apellido es muy largo. Solo se permiten 50 caracteres");
        return false;
    }
    else if(!expresion.test(email)){ /*  */
        alert("El email no tiene un formato valido");
        return false;
    }
    else if(email.length > 50){
        alert("El email es muy largo. Solo se permiten 50 caracteres");
        return false;
    }
    else if(password.length <= 6 || password2.length <= 6 ){ 
        alert("La contraseña debe tener al menos 6 caracteres");
        return false;
    }
    else if(password !== password2 ){ 
        alert("La contraseñas deben coincidir");
        return false;
    }
    
    
}