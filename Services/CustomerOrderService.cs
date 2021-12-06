using DemoApi.Models;
using DemoApi.Repository;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace DemoApi.Services
{
    public class CustomerOrderService : ICustomerOrderService
    {
        private IConfiguration _config;
        public IWebHostEnvironment Environment { get; set; }

        public CustomerOrderService(IConfiguration config, IWebHostEnvironment environment)
        {
            _config = config;
            Environment = environment;
        }

        public IEnumerable<OrderSummary> GetOrders(int id)
        {
            List<OrderSummary> orders = new List<OrderSummary>();
            //string connString = _config.GetConnectionString("AzureSQLConnection");
            string connString = @"Server=tcp:junglesql.database.windows.net,1433;Initial Catalog=JungleDb2;Persist Security Info=False;User ID=jungleadmin;Password=Anim@te1;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            connString = _config.GetConnectionString("MyAspConnection");
            connString = @"Data Source=SQL5105.site4now.net;Initial Catalog=db_a78369_dgc2020;User Id=db_a78369_dgc2020_admin;Password=Anim@te1";
            connString = _config.GetConnectionString("JungleDbConnection");
            if(Environment.IsProduction())
            {
                connString = _config.GetConnectionString("MsAspConnection");
            }
            else
            {
                connString = _config.GetConnectionString("JungleDbConnection");
            }
            using (SqlConnection cn = new SqlConnection(connString))
            {

                cn.Open();
                string sql = "dbo.Get_customer_orders";
                using (SqlCommand cmd = new SqlCommand(sql, cn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@customerId", id);
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    DataTable dt = new DataTable();
                    da.Fill(dt);
                    foreach (DataRow dr in dt.Rows)
                    {
                        OrderSummary item = new OrderSummary
                        {
                            CustomerID = Convert.ToInt32(DataAccessMethods.GetFieldValue<int>(dr, "CustomerID")),
                            OrderID = Convert.ToInt32(DataAccessMethods.GetFieldValue<int>(dr, "OrderID")),
                            OrderDate = Convert.ToDateTime(DataAccessMethods.GetFieldValue<DateTime>(dr, "OrderDate")),
                            CreatedDate = Convert.ToDateTime(DataAccessMethods.GetFieldValue<DateTime>(dr, "CreatedDate")),
                            OrderTotal = Convert.ToDecimal(DataAccessMethods.GetFieldValue<decimal>(dr, "OrderTotal")),
                            Tax = Convert.ToDecimal(DataAccessMethods.GetFieldValue<decimal>(dr, "Tax")),
                            ShippingCharge = Convert.ToDecimal(DataAccessMethods.GetFieldValue<decimal>(dr, "ShippingCharge")),
                            Shipped = Convert.ToBoolean(DataAccessMethods.GetFieldValue<bool>(dr, "Shipped")),
                            ShipDate = Convert.ToDateTime(DataAccessMethods.GetFieldValue<DateTime>(dr, "ShipDate")),
                            CreatedBy = Convert.ToInt32(DataAccessMethods.GetFieldValue<int>(dr, "CreatedBy")),
                            Carrier = DataAccessMethods.GetFieldValue<string>(dr, "Carrier"),
                            //ItemCount = Convert.ToInt32(GetFieldValue<int>(dr, "ItemCount")),
                            FirstName = DataAccessMethods.GetFieldValue<string>(dr, "FirstName"),
                            LastName = DataAccessMethods.GetFieldValue<string>(dr, "LastName"),
                            OrderSubTotal = Convert.ToDecimal(DataAccessMethods.GetFieldValue<decimal>(dr, "OrderSubTotal")),
                        };
                        orders.Add(item);
                    }
                }
            }
            foreach (var order in orders)
            {
                List<OrderDetail> orderItems = new List<OrderDetail>();
                using (SqlConnection cn = new SqlConnection(connString))
                {
                    cn.Open();
                    string sql = "dbo.Get_order_items";
                    using (SqlCommand cmd = new SqlCommand(sql, cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@orderId", order.OrderID);
                        SqlDataAdapter da = new SqlDataAdapter(cmd);
                        DataTable dt = new DataTable();
                        da.Fill(dt);
                        foreach (DataRow dr in dt.Rows)
                        {
                            OrderDetail item = new OrderDetail
                            {
                                CustomerID = Convert.ToInt32(DataAccessMethods.GetFieldValue<int>(dr, "CustomerID")),
                                OrderID = Convert.ToInt32(DataAccessMethods.GetFieldValue<int>(dr, "OrderID")),
                                OrderItemID = Convert.ToInt32(DataAccessMethods.GetFieldValue<int>(dr, "OrderItemID")),
                                Description = DataAccessMethods.GetFieldValue<string>(dr, "Description").ToString(),
                                DetailedDescription = DataAccessMethods.GetFieldValue<string>(dr, "DetailedDescription").ToString(),
                                LineTotal = Convert.ToDecimal(DataAccessMethods.GetFieldValue<decimal>(dr, "LineTotal")),
                                ProductID = Convert.ToInt32(DataAccessMethods.GetFieldValue<int>(dr, "ProductID")),
                                SKU = DataAccessMethods.GetFieldValue<string>(dr, "SKU").ToString(),
                                ItemCount = DataAccessMethods.GetFieldValue<int>(dr, "ItemCount"),
                                LargePhoto = DataAccessMethods.GetFieldValue<byte[]>(dr, "LargePhoto"),
                                ThumbnailPhoto = DataAccessMethods.GetFieldValue<byte[]>(dr, "ThumbnailPhoto"),
                                LargePhotoFileName = DataAccessMethods.GetFieldValue<string>(dr, "LargePhotoFileName"),
                                ThumbnailPhotoFileName = DataAccessMethods.GetFieldValue<string>(dr, "ThumbnailPhotoFileName"),
                                Price = DataAccessMethods.GetFieldValue<decimal>(dr, "Price")
                            };
                            orderItems.Add(item);
                            order.OrderItems = orderItems;
                            order.ItemCount = orderItems.Count;
                        }
                    }
                }
            }
            return orders;
        }
    }
}
