using DemoApi.Models;
using DemoApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DemoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductSubcategoriesController : ControllerBase
    {
        private readonly IProductSubcategoryService _productSubcategoryService;

        public ProductSubcategoriesController(IProductSubcategoryService productSubcategoryService)
        {
            _productSubcategoryService = productSubcategoryService;
        }

        // GET: api/ProductSubcategories
        [HttpGet("subcategories/{id}")]
        public async Task<ActionResult<IEnumerable<ProductSubcategory>>> GetProductSubcategories(int id)
        {
            return await _productSubcategoryService.GetProductSubcategories(id);
        }
    }
}
