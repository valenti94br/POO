// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtDetalles() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Género: ${this.genero}`);
    }
}

const persona1 = new Persona("Eustaquia", 16, "femenino");
persona1.obtDetalles();


// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar() {
        console.log(`La estudiante ${this.nombre} de ${this.edad} años y género ${this.genero}, cursa ${this.curso} en el grupo ${this.grupo}.`);
    }
}

let estudiante = new Estudiante("Eustaquia", 16, "femenino", "4º de la ESO", "D");
estudiante.registrar();

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    asignar() {
        console.log(`El profesor ${this.nombre} de ${this.edad} años y género ${this.genero}, enseña ${this.asignatura} ${this.nivel}.`);
    }
}
let profesor = new Profesor("Paulino", 46, "masculino", "Biología", "básica");
profesor.asignar();