using System.Collections.Generic;
using System;
using System.Linq;

namespace EStoreApp
{
    public class DBManager : IDBManager
    {
        List<Product> IDBManager.GetAll()
        {
            using (var context = new CollectionContext())
            {
             var products = from prod in context.product select prod;
             return products.ToList<Product>();
            }
        }
    }
}