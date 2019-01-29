
using EntityFactory;
using MasterDetails.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MasterDetails.Controllers
{
    public class HomeController : Controller
    {
        CommonRepository repository = new CommonRepository();
        public ActionResult Index()
        {
            var list = repository.GetCategories();
            ViewBag.CategoryList = new SelectList(list, "CategoryId", "CategoryName");
            return View();
        }

      
        public JsonResult GetProducts(int categoryId)
        {
            
            return Json(repository.GetProducts(categoryId),JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult SaveAll(OrderRequestModel o)
        {
            Product product = new Product();
            Order order = new Order();
           
            return RedirectToAction("Index");
        }


    }
}