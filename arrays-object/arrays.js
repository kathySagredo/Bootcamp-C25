/* 
Un array en JavaScript es una estructura de datos tipo lista, ordenada y de alto nivel, utilizada para almacenar múltiples valores (números, cadenas, objetos, incluso otros arrays) bajo un único nombre de variable
*/

let array = ["elemento 1", "elemento 2", "elemento 3", "elemento 4"];

// Para acceder a un elemento podemos usar su posición o indice
console.log(array[2]) // El tercer elemento

// Para conocer el largo de un array 
console.log(array.length)

// Para acceder al último elemento de un array sin saber cuantos elementos tiene
console.log(array[array.length - 1])

// Métodos de array
array.push("elemento 5") // Agrega elementos al final
console.log(array)
console.log(array.pop()) // Elimina el último elemento
console.log(array)

// Método .map -> Crea un nuevo array del array original y se ejecuta la función 
let nuevoArray = array.map(e => e.toUpperCase())
console.log(nuevoArray)

// Método filter y .map pero con números
let listaNumeros = [1,2,3,4,5,6];
let mayoresTres = listaNumeros.filter(num => num > 3); // Filtra según la función
console.log(mayoresTres);

let listaNumerosDuplicados = listaNumeros.map(num => num*2) // Crea nueva lista de números duplicados
console.log(listaNumerosDuplicados)

// Recorrer lista con método forEach -> toma el array, recorre elemento por elemento y ejecuta la función en cada vuelta
array.forEach((elemento, indice) => {
  // Código a ejecutar dentro de las {}
  console.log(`${indice + 1}: ${elemento}`);
});

/*  Diferencia entre .forEach y .map
forEach se usa para ejecutar acciones y no retorna nuevo array, mientras que map se usa para transformar datos y retornar nuevo array
*/



