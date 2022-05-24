console.log("Ejercicio 1")
/** Este ejercicio muestra todos los numeros menores a uno ingresado  +
 * Ademas de filtrarlos y no mostrar los multiplos de 7 y 3 
*/
let num = 24
while(num>0){
    num--
    if(num%3!=0 && num%7!=0 ){
        console.log(num)
    }
}
console.log("Ejercicio 2")
/** Hace la sumatoria de todos los numeros menores a uno dado 
* De dos maneras 
* Lo primera escogida por el programador 
* la otra usando el algoritmo: S=(n(n+1))/2, con n siendo el numero dado
*/

let numero = 45
let numero_2=numero
let resultado = 0

for(i=0; i<=numero_2; i++){
    resultado += numero
    numero--
}
console.log(resultado)

let resultado_2 = (numero_2*(numero_2+1))/2 
console.log(resultado_2)

if(resultado == resultado_2){
    console.log("Son iguales")
}else{
    console.log("No son iguales")
}

