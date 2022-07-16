
using System.Collections;
using Namespace;
using Poo.clases;

Libro libro1 = new Libro("Fundamentos de C#","Clark Nathan",300);

System.Console.WriteLine(libro1.ObtenerDescripcion());

Revista revista1 = new Revista("PC World","IDG",100,30);

System.Console.WriteLine(revista1.ObtenerDescripcion());


//TODO Interfaces
Bicicleta bicicleta = new Bicicleta();
bicicleta.CambiarCarrera(1);
bicicleta.Acelerar(3);
bicicleta.ImprimirEstados();

// Todo Generics
ArrayList arr = new ArrayList();
arr.Add(1);
arr.Add(2);
arr.Add("2255");

List<int> arrGen = new List<int>();
arrGen.Add(1);