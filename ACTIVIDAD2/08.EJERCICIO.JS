// Ejercicio 8: Clientes de gimnasio
const clientes = [
    { nombre: "Pedro Álvarez", edad: 17, plan: 1, activo: true },
    { nombre: "Lucía Fernández", edad: 25, plan: 2, activo: true },
    { nombre: "Jorge Castro", edad: 65, plan: 3, activo: true },
    { nombre: "Marta Ruiz", edad: 32, plan: 1, activo: false },
    { nombre: "Luis Gutiérrez", edad: 48, plan: 2, activo: true },
    { nombre: "Carmen Salazar", edad: 70, plan: 3, activo: true }
];

// Precios base por plan
const precios = { 1: 80000, 2: 130000, 3: 200000 };

// Filtrar solo activos
const clientesActivos = clientes.filter(c => c.activo);

// Calcular valor con descuentos
const resumenPagos = clientesActivos.map(cliente => {
    let valorBase = precios[cliente.plan];
    let descuento = 0;
    if (cliente.edad < 18) descuento = 0.20;
    else if (cliente.edad >= 60 && cliente.edad <= 99) descuento = 0.30;
    const valorFinal = valorBase - (valorBase * descuento);
    return {
        nombre: cliente.nombre,
        plan: cliente.plan,
        valorFinal
    };
});

// Mostramos cada cliente
console.log("Resumen de pagos mensuales:");
resumenPagos.forEach(r => {
console.log( `${r.nombre} - Plan ${r.plan} - $${r.valorFinal.toLocaleString("es-CO")}`);
});

// Ingreso total
const ingresoTotal = resumenPagos.reduce((suma, pago) => suma + pago.valorFinal, 0);
console.log( `\n Ingreso total del mes: $${ingresoTotal.toLocaleString("es-CO")}`);