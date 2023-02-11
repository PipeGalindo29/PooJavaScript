const persona = {
    Nombre : 'Felipe ',
    Apellido : 'Galindo',
    Edad : 20,

    // Metodo
    NombreCompleto(){
        return this.Nombre+this.Apellido
    },

    Direccion : {
        zip : '000123023',
        pais : 'Colombia',
        depart : 'Risaralda' 
    }


}

console.log(persona.NombreCompleto());
// Llamar clases anidadas
console.log(persona.Direccion.pais)