/* Una función es un bloque de código diseñado para realizar una tarea particular.
Su sintaxis:
function nombreFuncion(parametros){instrucciones}
nombreFuncion(argumentos)
*/

// Forma 1 de crear una función
function saludar(){
    return "Hola Mundo desde una función normal";
}
console.log(saludar());

// Forma 2 de crear una función Anónima
let nombreFunción = function(){ 
    return "Hola Mundo desde función anónima";
}

console.log(nombreFunción());

// Forma 3 de crear una función flecha (arrow)
let funcion1 = () => {return "Hola Mundo desde una función flecha"};

funcion1();

// Tipo de dato function
console.log(typeof(saludar));

// Utilización de parametros
function saludarUsuario(nameUser, edad){
    return `Hola ${nameUser}, tienes ${edad} años.`;
}

console.log(saludarUsuario("Felipe", 38));
console.log(saludarUsuario("Raul", 10));
console.log(saludarUsuario("Maria", 40));
console.log(saludarUsuario("Carla", 2));