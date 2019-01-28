using System;
using System.Collections.Generic;
using System.Text;

namespace EntityLibrary
{
   public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }

        ICollection<Product> Products { get; set; }
    }
}
