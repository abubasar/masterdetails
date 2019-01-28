
using EntityFactory;
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


    }
}