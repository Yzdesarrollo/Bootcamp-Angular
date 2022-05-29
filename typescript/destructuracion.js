var pelicula = {
    id: 1,
    titulo: 'Star Wars - Guerra de los clones',
    descripcion: 'Saga de Star Wars',
    anio: 2001,
    director: {
        nombres: 'George',
        apellido: 'Lucas'
    }
};
console.log('Pelicula: ', pelicula.titulo);
//
var titulo = pelicula.titulo, anio = pelicula.anio, director = pelicula.director;
var nombres = director.nombres;
console.log('título: ' + titulo);
console.log('Director: ' + nombres);
