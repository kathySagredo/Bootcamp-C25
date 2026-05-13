// Para utilizar prompt-sync es necesario instalar node package manager (npm) que viene con node.js
// prompt-sync es un módulo de NPM para Node.js que permite solicitar entrada de datos al usuario en la terminal.
/* 
Antes de empezar, asegurate de estar en la ruta correcta en la termminal
Ingresar comandos:
    npm init -y | inicializa el proyecto, aparece el archivo package.json que contiene información general del proyecto
    npm install prompt-sync | instala el módulo y aparece el archivo package-lock.json con las información sobre versiones del proyecto y aparece node_modules como carpeta que contiene las dependencias, módulos o librerias instaladas.

Agregar en el archivo.js que quieres usar la siguiente instrucción:
    const prompt = require("prompt-sync")();

Si el repositorio fue clonado, te solicito solo utilizar este comando:
    npm install 
*/

const prompt = require("prompt-sync")(); // prompt listo para usarse

let nombreUser = prompt("Ingrese su nombre de usuario: "); 
console.log(`Su nombre de usuario es ${nombreUser}`)

// Al ejecutar el programa, aparecera en la terminal la pregunta o indicación, debes responder desde la terminal, según tu respuesta se imprimirá el mensaje
