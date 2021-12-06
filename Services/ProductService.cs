using DemoApi.Models;
using DemoApi.Repository;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace DemoApi.Services
{
    public class ProductService : ServicesBase<Product>, IProductService
    {
        public ProductService(IRepository<Product> repo) : base(repo)
        {
        }

        public async Task<List<Product>> GetProducts()
        {
            var products = await _repo.GetAll(p => !p.ThumbnailPhotoFileName.Contains("no_image"));
          
            return products;
        }

        public async Task<List<Product>> GetProducts(int id, string sort)
        {
            var products = await _repo.GetAll(p => p.ProductSubcategoryId.Equals(id));
            if (sort == "sort-asc")
            {
                return products.OrderBy(p => p.Price).ToList();
            }
            else if (sort == "sort-desc")
            {
                return products.OrderByDescending(p => p.Price).ToList();
            }
            else
            {
                return products;
            }
        }
    }
}
