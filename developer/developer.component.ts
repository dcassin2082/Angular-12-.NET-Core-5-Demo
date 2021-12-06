import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: [
  ]
})
export class DeveloperComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) { }

  navigate(url: any) {
    this.router.navigate([url]);
  }

  copyText(val: string) {
    try {
      let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      let text = document.getElementById(val).innerHTML;
      selBox.value = text;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      this.toastr.success('Copied Successfully', 'Copy Text')
    }
    catch {
      this.toastr.error('Unable to copy', 'Copy Text')
    }
  }

  jsonOptions = `
      services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
          .AddJsonOptions(options =>
           {
               var resolver = options.SerializerSettings.ContractResolver;
               if (resolver != null)
                  (resolver as DefaultContractResolver).NamingStrategy = null;
                });
  `
  nuget = `
  Microsoft.EntityFrameworkCore.SqlServer
  Microsoft.EntityFrameworkCore.Tools
  Bricelam.EntityFrameworkCore.Pluralizer
  Microsoft.AspNetCore.Mvc.NewtonsoftJson
  Microsoft.Extensions.Configuration
  Microsoft.Extensions.Configuration.FileExtensions
  Microsoft.Extensions.Configuration.Json
  `

  connStrings = `
  "ConnectionStrings": {
    "IdentityConnection": "data source=(local)\\sqlexpress;initial catalog=identity_db_name;integrated security=true;MultipleActiveResultSets=true;",
    "JungleDbConnection": "data source=(local)\\sqlexpress;initial catalog=db_name;integrated security=true;MultipleActiveResultSets=true;",
  },
  "ApplicationSettings": {
    "Jwt_Secret": "your_secret_min_16_bytes",
    "ClientURL": "http://localhost:4200"
  }
  `

  dbContext = `
  PM> scaffold-dbcontext "server=(local)\sqlexpress;database=db_name;trusted_connection=true;multipleactiveresultsets=true;" 
  microsoft.entityframeworkcore.sqlserver -outputdir Models -Context DbContextName
  `
  item4 = `
  // Add to ConfigureServices method
  
  services.AddDbContext<AuthenticationContext>(options => options.UseSqlServer(connSettings.IdentityConnection));
  services.AddDbContext<JungleDbContext>(options => options.UseSqlServer(connSettings.JungleDbConnection));
  services.AddCors();

  // In order to avoid automatic camel-casing of json objects alter the line services.AddControllers() as follows
  services.AddControllers().AddNewtonsoftJson(options =>
  {
      var resolver = options.SerializerSettings.ContractResolver;
      if (resolver != null)
          (resolver as DefaultContractResolver).NamingStrategy = null;
  });
    
  // Add to Configure method 
  app.UseCors(builder => builder.WithOrigins(Configuration["ApplicationSettings:ClientURL"]
    .ToString().AllowAnyMethod().AllowAnyHeader());
  app.UseAuhentication(); 

  `
  item5 = `
  services.AddCors();
  `
  item6 = `
  // Add this at the top of the Configure method
  app.UseCors(builder => builder.WithOrigins(Configuration["ApplicationSettings:ClientURL"]
    .ToString().AllowAnyMethod().AllowAnyHeader());
`
  item7 = `
  "ApplicationSettings": {
    "Jwt_Secret": "your_secret_min_16_bytes",
    "ClientURL": "http://localhost:4200"
  }
`

  item8 = `
services.AddControllers().AddNewtonsoftJson(options =>
{
    var resolver = options.SerializerSettings.ContractResolver;
    if (resolver != null)
        (resolver as DefaultContractResolver).NamingStrategy = null;
});
`
  item9 = `
var builder = new ConfigurationBuilder();
builder.AddJsonFile("appsettings.json", optional: false);
 
var configuration = builder.Build();
 
connectionString = configuration.GetConnectionString("ConnectionStringName");
`





  html = `
  <div class="card-header div-center">
  <span class="api-title">
      <h4>
          <i class="fa fa-suitcase "></i> Sales Tracker
      </h4>
  </span>
</div>
  `
  typescript = `
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  `
  snippet = `
  using System;
  using System.Collections.Generic;
  using System.Data;
  using System.Data.SqlClient;
  using System.Linq;
  using System.Threading.Tasks;
  using JungleApi.Services.Models;
  using JungleApi.Web.Models;
  using Microsoft.AspNetCore.Http;
  using Microsoft.AspNetCore.Mvc;
  
  namespace JungleApi.Web.Controllers
  {
      [Route("api/[controller]")]
      [ApiController]
      public class EmployeeDetailController : ControllerBase
      {
          private JungleDbContext db = new JungleDbContext();
  
          public IEnumerable<Services.Models.EmployeeDetail> GetEmployees()
          {
              string[] departments = { "Sales South", "Sales North", "Sales East", "Sales West" };
  
              return db.EmployeeDetails.Where(d => departments.Any(e => e == d.Department)).OrderBy(f => f.FirstName).ToList();
          }
  
          [Route("saleshistory")]
          [HttpGet]
          public IEnumerable<SalesHistory> GetSalesHistories()
          {
              return db.SalesHistories;
          }
  
          public static T GetFieldValue<T>(DataRow dr, string fieldname)
          {
              if (dr[fieldname] == null || dr[fieldname] == DBNull.Value)
                  return default;
              else
                  return (T)Convert.ChangeType(dr[fieldname], typeof(T));
          }
      }
  }
 `
  sql = `
 CREATE TYPE [dbo].[NameTableType] AS TABLE(
  [Id] [int] NOT NULL,
  [FirstName] [nvarchar](50) NULL,
  [LastName] [nvarchar](50) NULL
)
GO
 `

  ngOnInit(): void {

  }
}