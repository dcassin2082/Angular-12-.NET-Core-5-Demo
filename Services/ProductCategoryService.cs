using DemoApi.Models;
using DemoApi.Repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DemoApi.Services
{
    public class ProductCategoryService : ServicesBase<ProductCategory>, IProductCategoryService
    {
        public ProductCategoryService(IRepository<ProductCategory> repo) : base(repo)
        {
        }

        public async Task<List<ProductCategory>> GetProductCategories()
        {
            return await _repo.GetAll();
        }
    }
}
