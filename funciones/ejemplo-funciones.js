// Hacer un menu interactivo que pueda sumar, restar, multiplicar y dividir con funciones
const prompt = require("prompt-sync")();

function suma(num1, num2){
    return num1 + num2
}

function resta(num1, num2){
    return num1 - num2
}

function multiplicar(num1, num2){
    return num1*num2
}

function dividir(num1, num2){
    if(num2 === 0){
        return "No se puede dividir por 0";
    } else {
        return num1/num2;
    } 
}

function pedirNumero(){
    let numero;
    while(true){
        numero = Number(prompt("Ingrese un número: "))
        if(!isNaN(numero)){ 
            return numero
        } else {
            console.log("Debe ingresar un número valido")
        }
    }

}

function ejecutarCaso(operacion){
    let num1 = pedirNumero();
    let num2 = pedirNumero();
    resultado = operacion(num1, num2)
    return resultado
}


function menu(){
    let opcion;
    while(opcion !== "5"){
        console.log("### Calculadora ###")
        console.log("1. Sumar")
        console.log("2. Restar")
        console.log("3. Multiplicar")
        console.log("4. dividir")
        console.log("5. Salir")

        opcion = prompt("Selecciona una opción: ")

        let numero1;
        let numero2;
        let resultado;

        switch(opcion){
            case "1":
                resultado = ejecutarCaso(suma)
                console.log(`Resultado: ${resultado}`)
                break;
            case "2":
                resultado = ejecutarCaso(resta)
                console.log(`Resultado: ${resultado}`)     
                break;
            case "3":
                resultado = ejecutarCaso(multiplicar)
                console.log(`Resultado: ${resultado}`)     
                break;
            case "4":
                console.log(`Resultado: ${ejecutarCaso(dividir)}`)
                break;   
                
            case "5":
                console.log("Saliendo del programa...");
                break;
            default: 
                console.log( "Opción invalida")

        }
    }
}

menu();


