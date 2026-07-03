// ciclos for , wile  , do-wile


console.log()




//whilw
let intentos = 0;
const MAX_INTENTOS = 3;

while (intentos < MAX_INTENTOS) {
    console.log('intento', intentos+1, 'de',MAX_INTENTOS);
    intentos ++;
}

// break y continue
for (let i = 0; i < 10; i++) {
    if(i === 4) continue;
    if (i===7) break;
    console.log(i);
}

// funciones
//funcion clasica
function saludar(nombre){
    return 'Hola tu nombre es, ${nombre}';
}

console.log(saludar("Ana Maria"));

//2. funcion anonima asignada a variable no tiene nombre propio, se guarda en una variable
let calcularArea = function (base, altura){
    return base*altura;
}
console.log(calcularArea(6,8));

//3.funciones arrow
let sumar = (vali, val2)=> vali+val2;
console.log(sumar(12000,45000));

//4. parametros
function crearProducto(nombre, precio, stock= 5) {
    return { nombre,precio, stock};
}
console.log(crearProducto("silla", 75000));
console.log(crearProducto("silla", 75000,50));

//alcance de una variable
const appNombre= "StoreApp"; // variable accesible desde cualquier parte del archivo

function pagoAlquiler() {
    let totalFactura = 3000000; //variable accesible dentro de la factura
}
// console.log('proceso de pago: $ (total factura)');

//5. callback una funcion puede recibir como parametro otra funcion
function procesoOperacion(a,b, operacion) {
    let resultado= operacion (a,b)
    return 'resulltado:$(resultado)';
}
let multiplicar = (x,y) => x*y;
let restar= (x,y) => x-y;

console.log(procesarOperacion(10,5, multiplicar));
console.log(procesarOperacion(10,5, restar));

