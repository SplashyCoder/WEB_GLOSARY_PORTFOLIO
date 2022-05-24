console.log("Ed team")

//Declaracion de objetos|
const persona = {
    nombre: 'David Alejandro',
    apellidos : "Pacheco Mora",
    edad: 22
}
//Imprimir un objeto
console.log(persona)

//imprimir un atributo
console.log(persona.edad)


//Objetos anidados
const persona_2 = {
    nombre: 'David Alejandro',
    apellidos : "Pacheco Mora",
    edad: 22,
    madre: {
        nombre: "Vilma",
        apellidos : "Mora",
        edad: 50
    }
}
console.log(persona_2.madre)

//Añadir atributos

persona.genero = "Masculino"
persona_2.madre.genero = "femenino"

//Funcion constructora

// function usuario (nombre, apellido, correo, activo){
//     this.nombre = nombre,
//     this.apellido = apellido,
//     this.correo = correo,
//     this.activo = activo

// }

// const david = new usuario("David", "Pacheco", "nounaor@gmail.com", true)

// console.log(david)

//Clases

class Usuario {
    constructor(nombre, apellido, correo, activo){
        this.nombre = nombre,
        this.apellido = apellido,
        this.correo = correo,
        this.activo = activo
    }
    presentarse(){
        return `El usuario ${this.nombre} ${this.apellido} con correo ${this.correo} está ${this.activo}` 
    }
}
const david = new Usuario("David", "Pacheco", "nounaor@gmail.com", true)
console.log(david)

console.log(david.presentarse())