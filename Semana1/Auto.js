"use strict";
exports.__esModule = true;
exports.totalAutos = void 0;
var totalAutos = function (autos) {
    var totalPrecio = 0;
    autos.forEach(function (auto) {
        totalPrecio++;
    });
    return totalPrecio;
};
exports.totalAutos = totalAutos;
