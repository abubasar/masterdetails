
using EntityFactory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MasterDetails.Models
{
    public class CategoryProductViewModel
    {
        public Category Category { get; set; }
        public Product Product { get; set; }
    }
}