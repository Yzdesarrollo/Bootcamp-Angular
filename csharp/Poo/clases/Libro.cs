using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Namespace
{
    public class Libro
    {
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public int Paginas { get; set; }

        public Libro(string titulo, string autor, int paginas)
        {
            this.Titulo = titulo;
            this.Autor = autor;
            this.Paginas = paginas;
        }

        public string ObtenerDescripcion()
        {
            return $"{this.Titulo} escrito por {this.Autor}";
        }
    }
}