using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MasterDetails.Models
{
    public class OrderRequestModel
    {
        public OrderRequestModel()
        {
            Orders = new List<OrderDetailsRequestModel>();
        }
        public string OrderNo { get; set; }
       
        public DateTime OrderDate { get; set; }
 
        public string Description { get; set; }

         public List<OrderDetailsRequestModel> Orders { get; set; }
    }
}