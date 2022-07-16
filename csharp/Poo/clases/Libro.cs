using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Poo.clases;

namespace Namespace
{
    public class Libro: Publicacion
    {

       // public string Descripcion { get => $"Libro: {this.Titulo} escrito por {this.Autor}"; } //Propiedad de solo lectura

        /**
            BASE cuando quiero enviarle propiedades al constructor del padre
        */
        public Libro(string titulo, string autor, int paginas):base(titulo,autor,paginas)
        {
            this.Titulo = titulo;
            this.Autor = autor;
            this.Paginas = paginas;
        }

        public override string ObtenerDescripcion()
        {
            return $"Libro: {this.Titulo} escrito por {this.Autor} con {this.Paginas} pag.";
        }
    }
}