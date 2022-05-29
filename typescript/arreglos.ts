let personas:string[] = [];

personas.push("Hola");
personas.push("mundo");

console.log(personas);

//Objetos

interface IEmpleado{
    nombre:string;
    apellidos: string;
    direccion: string;
    telefonos:string[];
    sueldo: number;
    cargo?: string; // Cuando quiero no usar esta propiedad.
}

let empleado: IEmpleado = {
    nombre: "Yeison A",
    apellidos: "Zaraza Molina",
    direccion: "Cra ciega",
    telefonos: ['456-123','789-456'],
    sueldo: 5000,    
}

console.table(empleado);

