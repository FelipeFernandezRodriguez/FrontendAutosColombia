function Validation(values) {
  
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(values.email === "") {
        error.email = "Correo no puede estar vacio"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Correo no coincide"
    }else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "La contraseña no puede estar vacia"    
    } else {
        error.password = ""
    }

    return error;
}

export default Validation