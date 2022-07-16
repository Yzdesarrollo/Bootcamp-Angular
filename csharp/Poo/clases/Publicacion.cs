using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Poo.clases
{
    public class Publicacion
    {
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public int Paginas { get; set; }

        public Publicacion(string titulo, string autor, int paginas)
        {
            this.Titulo = titulo;
            this.Autor = autor;
            this.Paginas = paginas;
        }

    /**
    VIRTUAL cuando quiero sobreescribir el comportamiento de un método el padre
    */
        public virtual string ObtenerDescripcion()
        {
            return $"{this.Titulo} autor {this.Autor}";
        }
    }
}