// Ejercicio 5: Pedidos de restaurante
const pedidos = [
    { mesa: 1, plato: "Bandeja Paisa", valor: 38000 },
    { mesa: 2, plato: "Cordero Asado", valor: 62000 },
    { mesa: 3, plato: "Sancocho de Pescado", valor: 45000 },
    { mesa: 4, plato: "Filete de Res", valor: 55000 },
    { mesa: 5, plato: "Arroz con Pollo", valor: 28000 }
];

// 1. Primer pedido mayor a $50.000
const pedidoCostoso = pedidos.find(p => p.valor > 50000);
console.log(" Primer pedido mayor a $50.000:");
console.log(pedidoCostoso);

// 2. Pedidos menores o iguales a $50.000
const pedidosEconomicos = pedidos.filter(p => p.valor <= 50000);
console.log("\nPedidos económicos:");
pedidosEconomicos.forEach(p => {

// Usamos comillas invertidas `` para que funcione ${}
console.log(`\n Mesa ${p.mesa}: ${p.plato} - $${p.valor.toLocaleString("es-CO")}`);
});


// 3. Total recaudado
const totalDia = pedidos.reduce((suma, pedido) => suma + pedido.valor, 0);
//Igual aquí con comillas invertidas
console.log( `\n Total recaudado del día: $${totalDia.toLocaleString("es-CO")} `);