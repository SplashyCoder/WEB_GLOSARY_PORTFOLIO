/** Funiones */

//Declararcion

function saludar(num_2, num, nombre){
    suma = num + num_2
    console.log(`Wennnnaaaasssss ${nombre}`,suma)
    
}
/* saludar(6,9,"Alfredo") 

function nombre(nombre,apellido){
    full = `${nombre} ${apellido}`
    console.log(full)
}
nombre("David","Pacheco")  */


function nombre_completo(canti_nombre, canti_apellido, cantidad){
    completo = []

    for(i = 0;i<cantidad;i++){
        while(canti_nombre > 0){
            nombre = prompt("Ingrese un nombre")
            completo.push(nombre)
        /* 
            apellido = prompt("Ingrese un apellido")
            completo.push(apellido)     */
        }
    }
    /* for(i = 0;i<canti_apellido;i++){
        apellido = prompt("Ingrese un apellido")
            completo.push(apellido)
    } */
    console.log(completo)
}

function comprobacion(){
    canti_nombre = prompt("¿Cuantos nombres tiene?")
    canti_apellido = prompt("¿Cuantos apellidos tiene?")
/*     cantidad = parseInt(canti_nombre) + parseInt(canti_apellido)
    console.log(cantidad) */
    nombre_completo(canti_nombre, canti_apellido)
}
comprobacion()