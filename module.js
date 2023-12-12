// FUNCION QUE MUESTRA LOS 10 PRIMEROS NUMEROS 
function contar() {
    // for (inicio, final, pasos)
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

//FUNTION PARA SALUDAR CON PARAMETRO
function saludar(nombre) {
    console.log(`¡Hola ${nombre}!`);
}

// PI 
const PI = 3.14159;

//EXPORTAMOS LA FUNCION
export { contar, saludar, PI };
