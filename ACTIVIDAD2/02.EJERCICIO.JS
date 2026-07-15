// Ejercicio 2
// Clasificación de estudiantes según su promedio.

const estudiantes = [
    { nombre: "Laura", promedio: 4.8 },
    { nombre: "Carlos", promedio: 4.1 },
    { nombre: "María", promedio: 3.2 },
    { nombre: "Juan", promedio: 2.9 },
    { nombre: "Pedro", promedio: 3.7 },
    { nombre: "Ana", promedio: 4.6 }
];

let excelente = 0;
let bueno = 0;
let basico = 0;
let bajo = 0;

// Recorrer el arreglo
for (const estudiante of estudiantes) {

    let categoria = "";

    if (estudiante.promedio >= 4.5) {
        categoria = "EXCELENTE";
        excelente++;
    } else if (estudiante.promedio >= 3.5) {
        categoria = "BUENO";
        bueno++;
    } else if (estudiante.promedio >= 3.0) {
        categoria = "BÁSICO";
        basico++;
    } else {
        categoria = "BAJO";
        bajo++;
    }

    console.log(
        "Nombre:",
        estudiante.nombre,
        "| Promedio:",
        estudiante.promedio,
        "| Categoría:",
        categoria
    );
}

console.log("-------------------------");
console.log("EXCELENTE:", excelente);
console.log("BUENO:", bueno);
console.log("BÁSICO:", basico);
console.log("BAJO:", bajo);