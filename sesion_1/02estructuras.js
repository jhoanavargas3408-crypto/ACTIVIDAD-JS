// ciclos for , wile  , do-wile


//1...estructura for :cuando se sabe cuantas veses repetir el ciclo
for (let i =0; i < 5; i++){
    console.log("interaccion de numeros: i"   );
}

//wile
let intentos = 0;
const max_intentos = 3;

wile (intentos < max_intentos) 
    console.log('intentos', intentos+1, 'de', max_intentos);
    intentos++;
   

// break y continue
for (let i = 0; i < 10; i++){
    if (i === 4 )continue;
    if (i === 7)break;
    console.log(1);
}

//funciones
//funcion clasica
function saludar(nombre){
    return 'hola tu nombre es, $(nombre)';
}

console.log(saludar("sofia maria"));


//2...funcion anonima asignada o variable, no tiene nombre propio, porque se guarda en una variable
let calculararea = function(base, altura){
    return base*altura;
}
console.log(calculararea(6,8));


//3... funcion arrow
let sumar = (val1, val2) => val1+val2;
console.log(sumar(5,3));

//4...parametros
function crearproducto(nombre, precio, stock= 5){
    return { nombre, precio, stock};
}
console.log(crearproducto("silla", 15000));
console.log(crearproducto("silla", 15000, 50));


//alcanse de una variable
const appnombre  = "storeapp"; //variable accesible desde cualquier perte del archivo}

function pagoalquiler () {
    let totalfactura = 3000000; } // variable accesible dentro de la funcion
 //console.log('proceso de pago:${totalfactura}'):


 //5...calback una funcion puede recibir como parametro ota funcion
 function procesaroperacion(a,b, Operacion){
     let resultado = Operacion(a,b)
     return 'resultado:$(resultado)';
 }
 let multiplicar = (x,y) => x*y;
 let restar = (x,y) => x-y;

 console.log(procesaroperacion(10,5,multiplicar));
 console.log(procesaroperacion(10,5,restar));