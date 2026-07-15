
let inventario =[
    {nombre: "equipo pc", precio:520, stock: 7},
    {nombre:"Mause", precio:120, stock: 10},
    {nombre:"Teclado", precio:50, stock: 5},
    {nombre:"Impresora", precio:4000, stock: 25},
    {nombre:"Televisor", precio:100, stock: 18},
    
];
    
//1.filter -solo productos con el stock

let disponibles = inventario.filter(p=>p.precio>340);
console.log(disponibles);

//2.map - convertir cada objeto en texto legible

let etiquetas = disponibles.map( p=>`${p.nombre} - $${p.precio.toLocaleString("es-CO")}`
);
console.log(etiquetas);

//3.foreach imprimir
console.log("lista de productos");
etiquetas.forEach(e=>console.log(e));