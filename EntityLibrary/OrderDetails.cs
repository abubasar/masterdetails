using System;
using System.Collections.Generic;
using System.Text;

namespace EntityLibrary
{
    public class OrderDetails
    {
        public int OrderDetailsId { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }

        public Decimal Rate { get; set; }
        public int Quantity { get; set; }
    }
}
