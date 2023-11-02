
namespace EStoreApp;
DBManager manager=new DBManager();
List<Product> prd=new List<Product>();
prd=manager.GetAll();
    foreach(Product p in prd){
    Console.WriteLine(p.Id);
    Console.WriteLine(p.Title);
    Console.WriteLine(p.Quantity);
    Console.WriteLine(p.Description);
    Console.WriteLine(p.UnitPrice);
    }


//DBmanager dBmanager=new DBmanager();
/*List<Product> prd=new List<Product>();
prd=dBmanager.GetAll();
foreach(Product p in prd){
Console.WriteLine(p.Id);
Console.WriteLine(p.Title);
Console.WriteLine(p.Quantity);
Console.WriteLine(p.Description);
Console.WriteLine(p.UnitPrice);
}*/


