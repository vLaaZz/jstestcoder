/* function preEntrega(){
    let aprobacion = false

do{

let numero1 = parseFloat(prompt("Ingresa tu nota de la primera evaluación"))
let numero2 = parseFloat(prompt("Ingresa tu nota de la segunda evaluación"))
let resultado = numero1 + numero2
alert("Tu nota final es: " + resultado)


if(resultado>=7){
    alert("Usted aprobo, nos vemos el año que viene")
    aprobacion=true
}else{
    alert("Usted ha desaprobado, nos vemos en diciembre")

    if(resultado<=6){
        break
    }


    }
}while(!aprobacion)
}

preEntrega() */



// 2 preEntrega JS

// Simulador Ecommerce para el proyecto de desarrollo web.

const Producto = function (nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let producto1 = new Producto ("Auriculares Samsung Inalambricos",17000,5)
let producto2 = new Producto ("Auriculares Motorola Wired",15000,2)
let producto3 = new Producto ("Cable USB-C",4500,10)
let producto4 = new Producto ("Mouse Logitech Wired",23000,5)
let producto5 = new Producto ("Lego SuperMan",12500,10)
let producto6 = new Producto ("Lego Batman",11000,10)
let producto7 = new Producto ("Lego SpiderMan",12000,10)
let producto8 = new Producto ("Lego IronMan",15000,10)
let producto9 = new Producto ("Lapicera Tazo Grueso",1500,10)
let producto10 = new Producto ("Cuadernillo Tapa Blanda",4000,5)
let producto11 = new Producto ("Cuadernillo Tapa Dura",6000,5)
let producto12 = new Producto ("Lapicera Tazo Fino",1500,10)
let producto13 = new Producto ("Cargador Apple",25000,5)
let producto14 = new Producto ("Vidrio Templado",2000,50)
let producto15 = new Producto ("Cargador Samsung con Cable tipo C",13000,5)
let producto16 = new Producto ("Cargador Motorola con Cable tipo C",11000,5)


let listaProductos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13,producto14,producto15,producto16]

function filtroBusqueda(){

    let palabraClave = prompt("¿Cual es tu proxima compra?").toUpperCase().trim()
    let resultado = listaProductos.filter((x)=>x.nombre.toUpperCase().includes(palabraClave))
    if (resultado.length >0){
        console.table(resultado)
    }else{
        alert("No disponemos del producto "+ palabraClave)
    }
}
