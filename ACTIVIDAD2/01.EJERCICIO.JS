// Ejercicio 1
// Empresa de domicilios
// Se crea un arreglo con 5 pedidos definidos en el código.

const pedidos = [
    { nombre: "Mercado Familiar", peso: 0.8 },
    { nombre: "Televisor", peso: 2.5 },
    { nombre: "Nevera", peso: 5 },
    { nombre: "Computador", peso: 1.2 },
    { nombre: "Microondas", peso: 3.8 }
];

let totalCostos = 0;

// Recorrer el arreglo con for...of
for (const pedido of pedidos) {

    let costo = 0;

    // Determinar el costo según el peso
    if (pedido.peso < 1) {
        costo = 4000;
    } else if (pedido.peso <= 3) {
        costo = 8000;
    } else {
        costo = 14000;
    }

    totalCostos += costo;

    console.log("Pedido:", pedido.nombre);
    console.log("Peso:", pedido.peso, "kg");
    console.log("Costo:", costo.toLocaleString("es-CO"));
    console.log("-------------------------");
}

console.log("TOTAL:", totalCostos.toLocaleString("es-CO"));