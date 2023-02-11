
// Clase que reutilizamos
function Persona(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(this.nombre,this.edad);
    }
}

// Construyendo un objeto de la clase persona
const persona1 = new Persona('Felipe',20);
const persona2 = new Persona('Mariana',22);

console.log(persona1.nombre);
console.log(persona2.nombre);

persona1.imprimir();
persona2.imprimir();