/* let aprobacion = true

do{

let numero1 = parseFloat(prompt("Ingresa tu nota de la primera evaluación"))
let numero2 = parseFloat(prompt("Ingresa tu nota de la segunda evaluación"))
let resultado = numero1 + numero2
alert("Tu nota final es: " + resultado)


if(resultado>=7){
    alert("Usted aprobo, nos vemos el año que viene")
    aprobacion=false
}else{
    alert("Usted ha desaprobado, nos vemos en diciembre")

    if(resultado<=6){
        break
    }


    }
}while(aprobacion) */

function preEntrega(){
    let aprobacion = true

do{

let numero1 = parseFloat(prompt("Ingresa tu nota de la primera evaluación"))
let numero2 = parseFloat(prompt("Ingresa tu nota de la segunda evaluación"))
let resultado = numero1 + numero2
alert("Tu nota final es: " + resultado)


if(resultado>=7){
    alert("Usted aprobo, nos vemos el año que viene")
    aprobacion=false
}else{
    alert("Usted ha desaprobado, nos vemos en diciembre")

    if(resultado<=6){
        break
    }


    }
}while(aprobacion)
}

preEntrega()