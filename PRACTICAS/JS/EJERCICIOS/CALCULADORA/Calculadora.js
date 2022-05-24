const ejecutar = (opcion, cifra_1, cifra_2) => {
    switch(opcion){
        case "1" :
            console.log("Usted escogio Suma")
            console.log(suma(cifra_1,cifra_2))
            break
        case "2" :
            console.log("Usted escogio Resta")
            console.log(resta(cifra_1,cifra_2))
            break
        case "3" :
            console.log("Usted escogio Multiplicacion")
            console.log(multi(cifra_1,cifra_2))
            break
        case "4" :
            console.log("Usted escogio Division")
            console.log(division(cifra_1,cifra_2))
            break
    } 
}
const inicio = () =>{
    let opcion = prompt("Bienvenido ingrese la opcion que desee \n1)Suma \n2)Resta \n3)Multiplicacion \n4) Division")
    let cifra_1 = prompt("Ingrese la primera cifra")
    let cifra_2 = prompt("Ingrese la segunda cifra")
    ejecutar(opcion, cifra_1, cifra_2)
}
const suma = (cifra_1, cifra_2) => parseInt(cifra_1) + parseInt(cifra_2) 

const resta = (cifra_1, cifra_2) => parseInt(cifra_1) - parseInt(cifra_2)

const multi = (cifra_1, cifra_2) => parseInt(cifra_1) * parseInt(cifra_2)

const division = (cifra_1, cifra_2) => parseInt(cifra_1) / parseInt(cifra_2) 
inicio()


