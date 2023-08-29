let topping = 0
let precio = 0
let helado = 50
let precioFinal = 0

if (topping == "Oreo") {
    precio = 10
} else if (topping == "KitKat") {
    precio = 15
} else if (topping == "Kinder") {
    precio = 25
} else {
    "No tenemos este topping"
}

precioFinal = helado + precio

console.log ("El helado cuesta $" + precioFinal)

let pedido = "Verdura"

switch (pedido) {
    case "Carne":
        console.log ("Te ofrecemos vino tinto para acompañar tu carne")
        break;

    case "Pescado":
        console.log ("Te ofrecemos vino blanco para acompañar tu pescado")
        break;

    case "Verdura":
        console.log ("Te ofrecemos agua para acompañar tu verdura")
        break;

    default:
        console.log ("Elija carne, pescado o verdura")
        break;
}

let propClase = ["IF", "SWITCH", "ARRAY", "FOR", "WHILE"]
for (let i = 0; i< propClase.length; i++){
    console.log(propClase[i])
}
propClase.push ("ELEMENTO")
for (let i = 0; i< propClase.length; i++){
    console.log(propClase[i])
}

let numero = 10;
while (numero < 13) {
    if (numero < 11) {
        console.log (numero + " es menor que 11")
    } else if (numero == 11) {
        console.log (numero + " es igual que 11")
    } else {
        console.log (numero + " es mayor que 11")
    }
numero = numero +1
}