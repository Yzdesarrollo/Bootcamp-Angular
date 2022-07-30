using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Core.Entidades;
using Infraestructura.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompaniaController : ControllerBase
    {
        private readonly AppDbContext _db;

        public CompaniaController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Compania>>> GetAll()
        {
            var lista = await _db.Compania.ToListAsync();
            return Ok(lista);
        }

        [HttpGet("id")]
        public async Task<ActionResult<Compania>> GetOne(int id)
        {
            var compania = await _db.Compania.FindAsync(id);
            return Ok(compania);
        }

    }
}