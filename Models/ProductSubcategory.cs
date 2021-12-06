using System;
using System.Collections.Generic;

#nullable disable

namespace DemoApi.Models
{
    public partial class ProductSubcategory
    {
        public int ProductSubcategoryId { get; set; }
        public string SubCategoryName { get; set; }
        public int ProductCategoryId { get; set; }
    }
}
