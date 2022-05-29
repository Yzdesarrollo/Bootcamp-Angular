import { calcularTotal, IProducto } from "./producto";

const listaProductos: IProducto[] = [
    {
        id:1,
        descripcion: 'Tablet',
        precio: 2000
    },
    {
        id:2,
        descripcion: 'Laptop',
        precio: 3000
    },
    {
        id:3,
        descripcion: 'Tv',
        precio: 4000
    }
];

const totalLista = calcularTotal(listaProductos);

console.log('Total productos: '+totalLista);
