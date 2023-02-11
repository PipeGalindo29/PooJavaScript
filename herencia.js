class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    detallePersona(){
        console.log('Nombre: ',this.nombre,'\n','Edad: ',this.edad);
    }
}

// Para heredar de una clase a otra
class Empleado extends Persona{
    sueldo;
    constructor(nombre,edad,sueldo){
        super(nombre,edad); // Para inicializar las variables que estamos heredando
        this.sueldo = sueldo;
    }

    // Heredamos todo el detallePersona y usamos super para agregar solo un elemnto
    detallePersona(){
        super.detallePersona()
        console.log('Sueldo: ',this.sueldo)
    }
}

const Empleado1 = new Empleado('Felipe',20,20000000);
Empleado1.detallePersona();
console.log(Empleado1);