// Ejercicio 7: Análisis de ventas semanales
const ventas = [
    { dia: "Lunes", totalVendido: 120000 },
    { dia: "Martes", totalVendido: 180000 },
    { dia: "Miércoles", totalVendido: 95000 },
    { dia: "Jueves", totalVendido: 250000 },
    { dia: "Viernes", totalVendido: 320000 },
    { dia: "Sábado", totalVendido: 280000 },
    { dia: "Domingo", totalVendido: 150000 }
];

// 1. Función para calcular el total de la semana con reduce
function calcularTotal(ventas) {
    return ventas.reduce((sumaAcumulada, venta) => sumaAcumulada + venta.totalVendido, 0);
}

// 2. Función para encontrar el día con mayor venta con reduce
function encontrarMejorDia(ventas) {
    return ventas.reduce((mejorVenta, ventaActual) => {
        return ventaActual.totalVendido > mejorVenta.totalVendido ? ventaActual : mejorVenta;
    });
}

// 3. Función para filtrar días que superen el monto mínimo con filter
function filtrarDiasDestacados(ventas, minimo) {
    return ventas.filter(venta => venta.totalVendido > minimo);
}

// Ejecutamos las funciones y mostramos resultados
const totalSemana = calcularTotal(ventas);
const mejorDia = encontrarMejorDia(ventas);
const montoMinimo = 200000; // Valor de referencia
const diasDestacados = filtrarDiasDestacados(ventas, montoMinimo);

// Mostramos todo con formato de moneda colombiana
console.log(`Total vendido en la semana: $${totalSemana.toLocaleString("es-CO")}`);
console.log(`Mejor día de ventas: ${mejorDia.dia} — $${mejorDia.totalVendido.toLocaleString("es-CO")}`);
console.log(`Días con ventas mayores a $${montoMinimo.toLocaleString("es-CO")}:`);
diasDestacados.forEach(dia => {
    console.log(`${dia.dia}: $${dia.totalVendido.toLocaleString("es-CO")}`);
});