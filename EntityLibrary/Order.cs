using System;
using System.Collections.Generic;
using System.Text;

namespace EntityLibrary
{
  public class Order
    {
        public int OrderId { get; set; }
        public string OrderNo { get; set; }
        public DateTime OrderDate { get; set; }
        public string Description { get; set; }
    }
}
