// Ejercicio 6: Carrito de librería
// Iniciamos con 3 libros
let carrito = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", precio: 42000 },
    { titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", precio: 38000 },
    { titulo: "La hojarasca", autor: "Gabriel García Márquez", precio: 25000 }
];
console.log("🛒 Carrito inicial:");
console.log(carrito);

// Agregamos 2 libros más con push
carrito.push(
    { titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", precio: 30000 },
    { titulo: "El otoño del patriarca", autor: "Gabriel García Márquez", precio: 35000 }
);
console.log("\n Después de agregar 2 libros:");
console.log(carrito);

// Eliminamos el último con pop
const libroEliminado = carrito.pop();
console.log(`\n Libro eliminado: ${libroEliminado.titulo}`);
console.log("Carrito actual:");
console.log(carrito);

// Lista solo de títulos con map
const titulos = carrito.map(libro => libro.titulo);
console.log("\n Títulos en el carrito:");
console.log(titulos);

// Total a pagar con reduce
const totalPagar = carrito.reduce((suma, libro) => suma + libro.precio, 0);
console.log(`\n Total a pagar: $${totalPagar.toLocaleString("es-CO")}"`);