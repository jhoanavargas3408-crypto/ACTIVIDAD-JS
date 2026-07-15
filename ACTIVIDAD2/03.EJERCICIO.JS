// Ejercicio 3: Pagos de asociados
const asociados = [
    { nombre: "María Gómez", cuota: 50000, al_dia: true },
    { nombre: "Juan Pérez", cuota: 65000, al_dia: false },
    { nombre: "Ana Ruiz", cuota: 45000, al_dia: true },
    { nombre: "Carlos López", cuota: 70000, al_dia: false },
    { nombre: "Sofía Mendoza", cuota: 55000, al_dia: true }
];

// Definimos el mes actual (1 = Enero, 12 = Diciembre)
let mesActual = 7;

// Mensaje según trimestre
switch(true) {
    case mesActual >= 1 && mesActual <= 3:
        console.log("Bienvenido al primer trimestre");
        break;
    case mesActual >= 4 && mesActual <= 6:
        console.log("Bienvenido al segundo trimestre");
        break;
    case mesActual >= 7 && mesActual <= 9:
        console.log("Bienvenido al tercer trimestre");
        break;
    case mesActual >= 10 && mesActual <= 12:
        console.log("Bienvenido al cuarto trimestre");
        break;
    default:
        console.log("Mes inválido");
}

// Recorremos y mostramos estado
let contadorMora = 0;
for (const asociado of asociados) {
    const estado = asociado.al_dia ? "Al día" : "En mora";
    console.log(`${asociado.nombre} - ${estado}`);
    if (!asociado.al_dia) contadorMora++;
}

console.log(`Total de asociados en mora: ${contadorMora}`);