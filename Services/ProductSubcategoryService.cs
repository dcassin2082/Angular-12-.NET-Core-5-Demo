using DemoApi.Models;
using DemoApi.Repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DemoApi.Services
{
    public class ProductSubcategoryService : ServicesBase<ProductSubcategory>, IProductSubcategoryService
    {
        public ProductSubcategoryService(IRepository<ProductSubcategory> repo) : base(repo)
        {
        }

        public async Task<List<ProductSubcategory>> GetProductSubcategories(int id)
        {
            return await _repo.GetAll(p => p.ProductCategoryId.Equals(id));
        }
    }
}
