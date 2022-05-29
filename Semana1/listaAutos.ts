import { IAuto, totalAutos } from "./Auto";

let coleccionAuto : IAuto [] = [
    {
        Id:1,
        Modelo: 2021,
        Marca: 'Mazda',
        Anio: 2021,
        precio: 50000
    },
    {
        Id:2,
        Modelo: 2019,
        Marca: 'Aveo',
        Anio: 2021,
        precio: '60.000.000'
    },
    {
        Id:3,
        Modelo: 2012,
        Marca: 'Hundai',
        Anio: 2022,
        precio: 80000
    }
]

let cantidadAutos = totalAutos(coleccionAuto);
console.log(`Cantidad de autos: ${cantidadAutos}`);