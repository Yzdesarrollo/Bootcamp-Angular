using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entidades;
using Infraestructura.Data.Config;
using Microsoft.EntityFrameworkCore;

namespace Infraestructura.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options): base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CompaniaConfig());
            modelBuilder.ApplyConfiguration(new EmpleadoConfig());
        }

        public DbSet<Compania> Compania { get; set; }
        public DbSet<Empleado> Empleado { get; set; }
    }
}