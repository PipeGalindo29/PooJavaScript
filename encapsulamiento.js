class Persona{
    // Para crear una propiedad privada
    #nombre
    #edad
    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#MetodoPrivado();
    }

    // Modificar una propiedad privada

    set setNombre(nombre){
        this.#nombre = nombre;
    }

    get getNombre(){
        return this.#nombre;
    }

    set setEdad(edad){
        this.#edad = edad;
    }

    get getEdad(){
        return this.#edad;
    }

    // Metodos privados

    #MetodoPrivado(){
        console.log('Soy un metodo privado');
    }
}

const p1 = new Persona('Felipe',20);
console.log(p1.getNombre);
p1.setNombre = 'Mariana';
console.log(p1);