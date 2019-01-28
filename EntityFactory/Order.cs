using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EntityFactory
{
  public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderId { get; set; }
        [Required]
        [MaxLength(50)]
        [Index]
        public string OrderNo { get; set; }
        [Required]
        public DateTime OrderDate { get; set; }
        [Required]
        [MaxLength(150)]
        [Index]
        public string Description { get; set; }
        public virtual ICollection<OrderDetails> OrderDetails { get; set; }
    }
}
