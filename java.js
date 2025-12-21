let nombre = prompt("Por favor, ingrese su nombre:");
const fechaNaciUsuario = prompt("Ingrese su fecha de nacimiento (AAAA-MM-DD):");
let sexo = prompt("¿Cual es tu sexo? ");
let tipoSangre = prompt("Ingrese su tipo de sangre:");
let altura = parseFloat(prompt("Ingrese su altura en pulgadas(In):"));
let calcularAltura;
let peso = parseFloat(prompt("Ingrese su peso en kg:"));
let calcularPeso;
let imagenSexo;
let edad;
let mensaje = "";

const calcularEdad = (fechadeNacimiento) => {
    const hoy = new Date()
    const nacimiento = new Date(fechadeNacimiento)
    let edad = hoy.getFullYear() - nacimiento.getFullYear()
    let mes = hoy.getMonth() - nacimiento.getMonth()
    if(mes < 0 || (mes == 0 && hoy.getDate() < nacimiento.getDate())){
        edad--
    }
    return edad
}

if(!fechaNaciUsuario || fechaNaciUsuario.trim() === ""){
    mensaje = "☹ No ingresaste fecha";
}
else {
    const fecha = new Date(fechaNaciUsuario);
    
    if(isNaN(fecha.getTime())){
        mensaje = "☹ Fecha inválida";
    }
    else {
        edad = calcularEdad(fechaNaciUsuario);
    }
}


if (sexo == "femenino" || sexo == "FEMENINO" || sexo == "Femenino"){
    imagenSexo = "mujer.png";
}
else if (sexo == "masculino" || sexo == "MASCULINO" || sexo == "Masculino"){
    imagenSexo = "hombre.png";
}


calcularAltura = (altura * 2.54).toFixed(2);
calcularPeso = (peso * 2.20462).toFixed(2);


if (document.getElementById("saludo")) {
    document.getElementById("saludo").textContent = "❀❀❀❀ Holaaa, gracias por estar aquí " + nombre + " ❀❀❀❀";
}


if (document.getElementById("sexo-imagen")) {
    document.getElementById("sexo-imagen").src = imagenSexo;
}

document.getElementById("sexo").textContent = sexo;


if (document.getElementById("edad")) {
    if(mensaje !== ""){
        document.getElementById("edad").textContent = mensaje;
    }
    else{
        document.getElementById("edad").textContent = edad + " años";
    }
}

if (document.getElementById("altura")) {
    document.getElementById("altura").textContent = calcularAltura + " cm";
}

if (document.getElementById("peso")) {
    document.getElementById("peso").textContent = calcularPeso + " lb";
}

if (document.getElementById("sangre")) {
    document.getElementById("sangre").textContent = tipoSangre;
}