using DemoApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DemoApi.Services
{
    public interface IProductSubcategoryService
    {
        Task<List<ProductSubcategory>> GetProductSubcategories(int id);
    }
}
