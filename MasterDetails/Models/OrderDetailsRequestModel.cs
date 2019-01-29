using EntityFactory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MasterDetails.Models
{
    public class OrderDetailsRequestModel
    {
        Category category = new Category();
        Product product = new Product();
        public OrderDetailsRequestModel()
        {
            
        }
        public  string CategoryName { get; set; }
        
        public string ProductName { get; set; }
        public int Quantity { get; set; }
        public Decimal Rate { get; set; }
        
    }
}