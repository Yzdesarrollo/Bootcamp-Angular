"use strict";
exports.__esModule = true;
var Auto_1 = require("./Auto");
var coleccionAuto = [
    {
        Id: 1,
        Modelo: 2021,
        Marca: 'Mazda',
        Anio: 2021,
        precio: 50000
    },
    {
        Id: 2,
        Modelo: 2019,
        Marca: 'Aveo',
        Anio: 2021,
        precio: 60000
    },
    {
        Id: 3,
        Modelo: 2012,
        Marca: 'Hundai',
        Anio: 2022,
        precio: 80000
    }
];
var cantidadAutos = (0, Auto_1.totalAutos)(coleccionAuto);
console.log("Cantidad de autos: ".concat(cantidadAutos));
