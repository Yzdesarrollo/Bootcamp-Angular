using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infraestructura.Data.Config
{
    public class EmpleadoConfig : IEntityTypeConfiguration<Empleado>
    {
        public void Configure(EntityTypeBuilder<Empleado> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p => p.Nombres).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Apellidos).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Cargo).IsRequired().HasMaxLength(100);
            builder.Property(p => p.CompaniaId).IsRequired();

            builder.HasOne(p => p.Compania).WithMany().HasForeignKey(p => p.CompaniaId);
        }
    }
}