let productos = ["laptop","mouse","teclado","monitor"];


//acceso por indice 0
console.log(productos[0]);
console.log(productos[2]);
console.log(productos[productos.length +1]);//monitor
console.log(productos.length);//length funcion colocar elementos
let carrito = [];//array vacio


//arreglo de objetos casos mas comunes 
let inventario = [
    {nombre: "laptop",Precio:230000, stock:10},//objeto
    {nombre: "mouse",Precio:35000, stock:15},//objeto
    {nombre: "teclado",Precio:55000, stock:20},//objeto
];
console.log(inventario[0].nombre);
console.log(inventario[0].Precio);
console.log(inventario[0].stock);
 

//subtema 2. metodos basicos modifican el array original
let carrito2 = ["portatil lenovo",3400000];


// 1.push agregar elemento al final del array
carrito2.push("teclado");
console.log(carrito2);


// 2. pop eliminar y retornar el ultimo elemento
let eliminado = carrito2.pop();//teclado 
console.log(eliminado);
console.log(carrito2);


// 3.unshift eliminar y retorna el primer elemento
carrito2.unshift("diademas");
console.log(carrito2);

 
// 4. shift elimia y retorna el primer elemeno
let primero = carrito2.shift();
console.log(primero);
console.log(carrito2);


// 5. splice elimina o inserta  en cualquier posicion
carrito2.splice(1,0,"webcam");// en ,a posicion 1 elimina 0
console.log(carrito2);
carrito2.splice(0,1);//elimiana un elemento desde la posicion 0
console.log(carrito2);
// subtema 3. metodos de iteraccion (no mutan el array)
//estos metodos retornan un nuevo array el origen 
let precio = [125000, 300000, 450000,650000];
//forEach - ejecuta una funcion por cada elemento
precios.forEach((precio,indice)=>{
    console.log('producto ${indice+1}: $${precio.tolocalestring("es-CO")}');
});


//2. map transforma cada elemento del array y retorna un nuevo array
//el array original no se modifica
let precioIVA = precios.map(precio=>math .round(precio*1.19));
console.log(precioIVA);//precio de cada elemento *1.19
console.log(precios);//precio sin cambios


//3.filter para seleccionar elementos en un nuevo array mas pequeño
let premium = precios.filter(precio =>precio >=200000);
console.log(premium);    
 

//4. find retorna el primer elemento que coincida con la busqueda
let busquedaprod = precios.find(precio => precio == 300000);
console.log(busquedaprod);
 

//5. reduce ||acomula todos los elementos en un solo valor
let sumatotal = precios.reduce((acomulador,precio)=>{
    return acomulador + precio;
},0);   
console.log('suma:$${sumatotal.tolocalestring("es-CO")}');
//reduce para encontrar el maximo valor
let maximo = precios.reduce((max,precio) => precio > max ? precio:max,0);
console.log('maximo: $${maximo.tolocalestring("es-CO")}');

    

