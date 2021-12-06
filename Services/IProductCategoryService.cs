using DemoApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DemoApi.Services
{
    public interface IProductCategoryService
    {
        Task<List<ProductCategory>> GetProductCategories();
    }
}
