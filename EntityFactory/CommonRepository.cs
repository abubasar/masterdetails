using EntityFactory;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EntityFactory
{
    public class CommonRepository
    {
        DataContext context = new DataContext();
        public IEnumerable<Category> GetCategories()
        {
           return context.Categories.ToList().OrderBy(x => x.CategoryName);

        }

        public List<Product> GetProducts(int categoryId)
        {
            context.Configuration.ProxyCreationEnabled = false;
            List<Product> products= context.Products.Where(x=>x.CategoryId==categoryId).ToList();
            return products;
        }
    }
}