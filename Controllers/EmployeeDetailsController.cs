using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DemoApi.Models;

namespace DemoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeDetailsController : ControllerBase
    {
        private readonly JungleDbContext _context;

        public EmployeeDetailsController(JungleDbContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeDetail>>> GetEmployeeDetails()
        {
            string[] departments = { "Sales South", "Sales North", "Sales East", "Sales West" };

            return await _context.EmployeeDetails.Where(d => departments.Any(e => e == d.Department)).OrderBy(f => f.FirstName).ToListAsync();
        }

        [HttpGet("saleshistory")]
        public async Task<ActionResult<IEnumerable<SalesHistory>>> GetSalesHistories()
        {
            return await _context.SalesHistories.ToListAsync();
        }

    }
}
