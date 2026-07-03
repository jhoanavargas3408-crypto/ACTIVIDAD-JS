//operaciones basicas carrito de compras
let carrito = []
function mostrarcarrito() {
    if (carrito.length === 0){
        console.log("carrito vacio");
        return
    }
    console.log('carrito (${carrito.length}items):[$(carrito.join(",")}]');
}
mostrarcarrito();
//agregar productos
carrito.push("portatil Asus");
carrito.push("mouse");
carrito.push("memoria USB");
carrito.push("adaptador HDML");
carrito.push("SSID");
mostrarcarrito();


//agregar al inicio productos con unshift:memoria RAM,cable poder
mostrarcarrito();
carrito.unshift("memoria RAM");
console.log(carrito);

mostrarcarrito();
carrito.unshift("cable poder");
console.log(carrito);

//eliminar el ultimo elemento con pop
let eliminado = carrito.pop();//
console.log(eliminado);
console.log(carrito);


//verificar la existencia con  incluides o finder
let producto = "teclado";//intentar con mouse
let encontrado = carrito.find(item => item === producto);
if (encontrado) {
    console.log(producto + " si existe en el carrito ");
} else {
    console.log(producto + " no existe en el carrito ");
}















