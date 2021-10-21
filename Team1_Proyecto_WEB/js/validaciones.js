function validar(){
    // vVariables para almacenar los datos que se ingresan.
    var identificacion, nombre, apellido, telefono, email, password , password2,expresion;
    
    // Se seleciona un elemento por id y se guarda su valor
    identificacion = document.getElementById("identificacion").value;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    password2 = document.getElementById("password2").value;

    //se evalua las variables que no esten vacidas
    if(identificacion === "" || nombre ==="" || apellido ==="" || telefono === "" || email ==="" || password ==="" || password2 ===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
}