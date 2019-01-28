using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;

namespace RepositoryLibrary
{
  public class DataContext:DbContext
    {

        public DataContext():base("Default")
        {

        }
    }
}
