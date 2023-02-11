class Persona{
    /*nombre;
    edad;*/

    otro;

    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log(this.nombre,this.edad);
    }
}

//Instanciar un nuevo objeto
const persona1 = new Persona('Felipe',20);
const persona2 = new Persona('Mariana',22);
/*persona1.nombre = 'Felipe';
persona1.edad = 20;*/

console.log(persona1);
persona1.imprimir();
persona2.imprimir();