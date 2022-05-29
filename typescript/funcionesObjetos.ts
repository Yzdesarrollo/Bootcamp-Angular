interface ICliente{
    nombres:string;
    apellidos:string;
    credito:number;
    mostrarCliente: () => void;
    direccion:IDireccion // OBJETOS DENTRO DE INTERFACES
}


interface IDireccion{
    numeroCalle: string;
    nombreCalle: string;
    ciudad: string;
}


const deuda = (cliente:ICliente, monto:number):void => {
    cliente.credito += monto;
};


const nuevoCliente: ICliente ={
    nombres:"Carlos",
    apellidos: "Piedra",
    credito: 2000,
    mostrarCliente(){
        console.log(`Credito cliente: ${this.nombres} ${this.apellidos} es ${this.credito}`);
        
    },
    direccion: {
        numeroCalle:'324',
        nombreCalle: 'Cll Izquierda',
        ciudad: 'Buenos Aires'
    }
}

deuda(nuevoCliente, 200);
nuevoCliente.mostrarCliente();