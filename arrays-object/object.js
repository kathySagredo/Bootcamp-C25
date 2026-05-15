/* 
Un objeto es una estructura que permite guardar datos en pares clave–valor:
- Clave (o propiedad): el nombre que identifica un dato.
- Valor: el contenido asociado a esa clave (puede ser número, string, booleano, otro objeto, función, array, etc.).

*/

// Se define la variable persona como objeto con {}
let persona = {
    nombre: "Juan Perez",
    edad: 25,
    ciudad: "Santiago",
    estado: true
};

// Para acceder a propiedades debe ser:
console.log(persona.nombre);
console.log(persona["nombre"]);

// Para modificar o agregar
persona.edad = 26; // Modificando
persona.profesion = "Dev"; // Agregando una nueva Clave

console.log(persona);

// Eliminar propiedades
delete persona.ciudad;
console.log(persona);

// Recorrer un objeto
for(let clave in persona){
    console.log(clave, ":", persona[clave]);
}

/* 
A diferencia de los arrays, los objetos no son iterables directamente,
por lo que no podemos recorrerlos fácilmente con for...of.

Sin embargo, sí podemos usar for...in para recorrer sus propiedades.

Si queremos utilizar métodos de arrays o recorrer un objeto con for...of,
podemos transformar el objeto en un array utilizando métodos como:

- Object.keys()
- Object.values()
- Object.entries()

De esta manera podemos trabajar con sus datos más fácilmente.
*/


// Método Keys
console.log(Object.keys(persona));
// Métodos Values
console.log(Object.values(persona));
// Métodos entries
console.log(Object.entries(persona));

// Objetos y arrays dentro de un objeto
let usuario = {
    nombre: "Juan Perez",
    direccion: {
        ciudad: "Santiago",
        pais: "Chile"
    },
    hobbies: ["programar", "leer"], 
    edad: 23
};

console.log(usuario.direccion.ciudad)
console.log(usuario.hobbies[0]);

// Investigar que es un JSON