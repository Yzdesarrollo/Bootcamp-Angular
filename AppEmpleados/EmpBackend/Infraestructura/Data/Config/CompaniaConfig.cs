using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infraestructura.Data.Config
{
    public class CompaniaConfig : IEntityTypeConfiguration<Compania>
    {
        public void Configure(EntityTypeBuilder<Compania> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p => p.NombreCompania).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Direccion).IsRequired().HasMaxLength(150);
            builder.Property(p => p.Telefono).IsRequired().HasMaxLength(40);
            builder.Property(p => p.Telefono2).IsRequired(false).HasMaxLength(40);
        }
    }
}