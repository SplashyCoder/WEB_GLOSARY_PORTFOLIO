//if
let edad = 9
let permisa = true

if(edad >= 18 && edad <= 65){
    console.log("Bienvenido a la fiesta")
}else if(edad<18 && permisa == true){
    console.log("Bienvenido a la fiesta pero hay Covid")
}else{
    console.log("No eres bienvenido a la fiesta")
}

//Switch
let persondalidad = "travieso y jugeton"

switch(persondalidad){
    case "dd": 
        console.log("Eres Goku")
        break
    case "Veloz y egoista":
        console.log("Eres Vegeta")
        break
    case "travieso y jugeton":
        console.log("Eres Trunks")
        break
    default:
        console.log("Sabandijaaaaaa")
}

//For
let texto = "David"

for(let i=0;i<texto.length;i++){
    console.log(texto[i])
}

console.log(`Eltexto es ${texto}`)
console.log(`El tamaño del texto es ${texto.length}`)

//While

let jugetes = 10

while(jugetes >= 1){
    console.log("juguete entregado")
    console.log(`la cantidad actual de jugetes es de ${jugetes}`)
    jugetes -= 1
}