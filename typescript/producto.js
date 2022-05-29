"use strict";
exports.__esModule = true;
exports.calcularTotal = void 0;
var calcularTotal = function (productos) {
    var total = 0;
    productos.forEach(function (p) {
        total += p.precio;
    });
    return total;
};
exports.calcularTotal = calcularTotal;
