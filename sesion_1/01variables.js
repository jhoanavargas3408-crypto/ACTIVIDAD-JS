let productos = ["laptop", "mouse", "teclado", "monitor"];
//accseso por indice 0
console.log(productos(8));
console.log(productos(2));
console.log(productos[productos.lenght -2]);//monitor
console.log(producto.lenght);//lenght funcion contar elementos
let carrito= [];//array vacio
//arreglo de objetos casos mas comunes
let inventario = [
    {nombre: "laptop", precio: 23000000, stock: 10},//objeto
    {nombre: "mouse", precio: 35000, stock: 15},//objeto
    {nombre: "teclado", precio: 55000, stock: 20},//objeto
];
console.log(inventario[0].nombre);
console.log(inventario[0].precio);
console.log(inventario[0].stock);
//subtemaa 2. metodos basicos modifican el array original
let carrito2 = ("portatil lenovo", 34000000)
//push agregar elementos al final del array
carrito2.push("teclado");
console.log(carrito2);
//pop eliminar y retorna el ultimo elemnto
let eliminado = carrito.pop();//teclado
console.log(eliminado);
console.log(carrito2);
//3. unishitelimina y retorna el primer elemento
carrito2.unishif("diademas")
console.log(carrito2);
//4. shift elimina y retorno el primer elemento
let primero = carrito2.shift();
console.log(primero);
console.log(carrito2)
//5. inicie elimine o inserta en cualquier posicion
carrito2.splice(1,0, "webcam");
console.log(carrito2);
carrito2.splice(0,1);//elimina un elemento desde la posicion 0
console.log(carrito2);