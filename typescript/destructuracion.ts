interface IPelicula{
    id:number;
    titulo: string;
    descripcion: string;
    anio: number;
    director: IDirector;
}

interface IDirector{
    nombres:string;
    apellido:string;
}

const pelicula: IPelicula = {
    id:1,
    titulo: 'Star Wars - Guerra de los clones',
    descripcion: 'Saga de Star Wars',
    anio: 2001,
    director:{
        nombres: 'George',
        apellido: 'Lucas'
    }
}

console.log('Pelicula: ', pelicula.titulo);

//

const {titulo, anio, director} = pelicula;
const {nombres} = director;

console.log('título: ' +titulo);
console.log('Director: '+ nombres);


