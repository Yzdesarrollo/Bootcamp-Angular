export interface IAuto{
    Id:number, 
    Modelo:number, 
    Marca:string, 
    Anio:number, 
    precio:number | string
}


export const totalAutos = (autos:IAuto[]) =>{
    let totalPrecio = 0;
    autos.forEach(auto => {
        totalPrecio ++;
    });
    return totalPrecio;
}






