import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/shared/user.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public service: UserService, private toastr: ToastrService) { }

  div1: string = "../../assets/img/pexels-photo-1578248.jpeg";
  div2: string = "../../assets/img/pexels-photo-2680270.jpeg";
  div3: string = "../../assets/img/pexels-photo-924824.jpeg";
  divtools: string = "../../assets/img/pexels-photo-3062948.jpeg";
  isReadMore: boolean;
  isDetails1: boolean;
  isDetails2: boolean;
  isDetails3: boolean;
  isDetails4: boolean;
  isDetails5: boolean;
  isDetails6: boolean;

  userDetails;

  ngOnInit() {
    this.isDetails1 = true;
    this.isDetails2 = true;
    this.isDetails3 = true;
    this.isDetails4 = true;
    this.isDetails5 = true;
    this.isDetails6 = true;
    // this.service.loggedIn = true;
    // this.service.getUserProfile().subscribe(
    //   res => {
    //     this.userDetails = res;
    //     this.service.loggedIn = true; 
    //   },
    //   err => {
    //     console.log(err);
    //   } 
    // )
  }
  showDetails(num: number) {
    debugger;
    switch (num) {
      case 1:
        this.isDetails1 = !this.isDetails1;
        break;
      case 2:
        this.isDetails2 = !this.isDetails2;
        break;
      case 3:
        this.isDetails3 = !this.isDetails3;
        break;
      case 4:
        this.isDetails4 = !this.isDetails4;
        break;
      case 5:
        this.isDetails5 = !this.isDetails5;
        break;
    }
    this.isReadMore = !this.isReadMore
  }
  showDetails1() {
    this.isReadMore = !this.isReadMore
  }
  showDiv: boolean = false;
  linkText: string = this.showDiv ? 'READ LESS' : 'READ MORE';

  navigate(route: string) {
    this.router.navigate([route]);
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

  toggle(p: string, b: string) {
    let elem = document.getElementById(p);
    let btn = document.getElementById(b);
    if (elem.style.display === "none") {
      elem.style.display = "block";
      this.linkText = "READ LESS";
    }
    else {
      elem.style.display = "none";
      // btn.innerHTML = "READ MORE";
      this.linkText = "READ MORE";
    }
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
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

  addAuth = `
AuthorizationHelper.AddAuthentication(services, key);
`
  authHelper = `
public sealed class AuthorizationHelper
{
    public static string CreateUserAuthorizationToken(string type, string id, IList<string> role, 
        IdentityOptions options, string secret)
    {
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
                            {
                    new Claim(type, id),
                    new Claim(options.ClaimsIdentity.RoleClaimType, role.FirstOrDefault())
                            }),
            Expires = DateTime.UtcNow.AddDays(1),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret)),
                            SecurityAlgorithms.HmacSha256Signature)
        };
        var tokenHandler = new JwtSecurityTokenHandler();
        var securityToken = tokenHandler.CreateToken(tokenDescriptor);
        var token = tokenHandler.WriteToken(securityToken);
        return token;
    }

    public static void AddAuthentication(IServiceCollection services, byte[] key)
    {
        services.AddAuthentication(x =>
        {
            x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        })
                    .AddJwtBearer(x =>
                    {
                        x.RequireHttpsMetadata = false;
                        x.SaveToken = false;
                        x.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuerSigningKey = true,
                            IssuerSigningKey = new SymmetricSecurityKey(key),
                            ValidateIssuer = false,
                            ValidateAudience = false,
                            ClockSkew = TimeSpan.Zero
                        };
                    });
    }
}
`

  token = ` 
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJVc2VySUQiOiIyMTRmMDQ3Yi1hOTkyLTRlNjctOTMxNS1kODllMDYyMWIxYzEiLCJyb2xlIjoiYWRtaW4iLCJuYmYiOjE1OTM5ODI5NzUsImV4cCI6MTU5NDA2OTM3NSwiaWF0IjoxNTkzOTgyOTc1fQ.
Fg4cWQOtnGqfiLaKgrG7keQxFtL4LlQnUxa0ma-H4LU"
`
  jsonBody = `
{
  "username":"danc",
  "password":"12345"
}
`
  controller = `
[Route("api/[controller]")]
[ApiController]
public class ApplicationUserController : ControllerBase
{
    private UserManager<ApplicationUser> _userManager;
    private SignInManager<ApplicationUser> _signInManager;
    private readonly ApplicationSettings _appSettings;

    // Do not use shortcut to generate constructor as it will not implement IOptions 
    public ApplicationUserController(UserManager<ApplicationUser> userManager, 
        SignInManager<ApplicationUser> signInManager, IOptions<ApplicationSettings> appSettings)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _appSettings = appSettings.Value;
    }

    [HttpPost]
    [Route("Register")]
    // Post: /api/ApplicationUser/Register
    public async Task<object> PostApplicationUser(ApplicationUserModel model)
    {
        model.Role = "Admin";

        var applicationUser = new ApplicationUser()
        {
            UserName = model.UserName,
            Email = model.Email,
            FullName = model.FullName
        };
        try
        {
            var result = await _userManager.CreateAsync(applicationUser, model.Password);
            await _userManager.AddToRoleAsync(applicationUser, model.Role);
            return Ok(result);
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    [HttpPost]
    [Route("Login")]
    // Post: /api/ApplicationUser/Login
    public async Task<IActionResult> Login(LoginModel model)
    {
        var user = await _userManager.FindByNameAsync(model.UserName);
        if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
        {
            // get roles assigned to user
            var role = await _userManager.GetRolesAsync(user);
            IdentityOptions options = new IdentityOptions();
            string token = AuthorizationHelper.CreateUserAuthorizationToken("UserID", user.Id, role, 
                            options, _appSettings.ClientSecret);
            return Ok(new { token });
        }
        else
        {
            return BadRequest(new { message = "Username or password is incorrect" });
        }
    }
}
`

  startup = `
// Inside Startup.cs, ConfigureServices method, add the following code
var connSection = Configuration.GetSection("ConnectionStrings");
services.Configure<ConnectionSettings>(connSection);
var connSettings = connSection.Get<ConnectionSettings>();

var appSection = Configuration.GetSection("ApplicationSettings");
services.Configure<ApplicationSettings>(appSection);
var appSettings = appSection.Get<ApplicationSettings>();
var key = Encoding.UTF8.GetBytes(appSettings.ClientSecret);

// Add default identity 
services.AddIdentity<ApplicationUser, IdentityRole>().
    AddEntityFrameworkStores<AuthenticationContext>().
    AddDefaultTokenProviders();

// configure identity options to override default options            
services.Configure<IdentityOptions>(options =>
{
    options.Password.RequireDigit = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireLowercase = false;
    options.Password.RequireUppercase = false;
    options.Password.RequiredLength = 4;
});

services.AddDbContext<AuthenticationContext>(options => options.UseSqlServer(connSettings.IdentityConnection));
`
  configuration = `
// Add Configuration folder and inside it add the following classes:
public class ApplicationSettings
{
    public string ClientSecret { get; set; }
}

public class ConnectionSettings
{
    public string IdentityConnection { get; set; }
    public string JungleDbConnection { get; set; }
    public string AzureDbConnection { get; set; }
}
`

  app = `
  app.UseAuthentication();
`
  authenticationContext = `
// This class will override the Identity.EntityFrameworkCore.IdentityDbContext
public class AuthenticationContext : IdentityDbContext
  {
      public AuthenticationContext(DbContextOptions options) : base(options)
      {
      }
      public DbSet<ApplicationUser> ApplicationUsers { get; set; }

      protected override void OnModelCreating(ModelBuilder builder)
      {
          base.OnModelCreating(builder);

          builder.Entity<IdentityUser>(entity =>
          {
              entity.ToTable(name: "User");
          });
          builder.Entity<IdentityRole>(entity =>
          {
              entity.ToTable(name: "Role");
          });
          builder.Entity<IdentityUserRole<string>>(entity =>
          {
              entity.ToTable("UserRoles");
          });

          builder.Entity<IdentityUserClaim<string>>(entity =>
          {
              entity.ToTable("UserClaims");
          });

          builder.Entity<IdentityUserLogin<string>>(entity =>
          {
              entity.ToTable("UserLogins");
          });

          builder.Entity<IdentityRoleClaim<string>>(entity =>
          {
              entity.ToTable("RoleClaims");
          });

          builder.Entity<IdentityUserToken<string>>(entity =>
          {
              entity.ToTable("UserTokens");
          });

      }
  }
`

  asdfh = `
1  using System;
2  using System.Collections.Generic;
3  using System.Linq;
4  using System.Threading.Tasks;
5  using Microsoft.AspNetCore.Http;
6  using Microsoft.AspNetCore.Mvc;
7  using Microsoft.EntityFrameworkCore;
8  using DemoApi.Models;
9  using DemoApi.Services;
10
11 namespace DemoApi.Controllers
12 {
13    [Route("api/[controller]")]
14    [ApiController]
15    public class ProductsController : ControllerBase
16    {
17        private readonly IProductService _productService;
18
19        public ProductsController(IProductService productService)
20        {
21            _productService = productService;
22        }
23
24        // GET: api/Products
25        [HttpGet("products")]
26        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
27        {
28            return await _productService.GetProducts();
29        }
30
31        [HttpGet("products/{id}/{sort}")]
32        public async Task<ActionResult<IEnumerable<Product>>> GetProducts(int id, string sort)
33        {
34            return await _productService.GetProducts(id, sort);
35        }
36    }
37  }
`

  identityModels = `
// In Models folder 
public class ApplicationUser : IdentityUser
{
    [Column(TypeName = "nvarchar(150)")]
    public string FullName { get; set; }
}

public class ApplicationUserModel
{
    public string UserName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string FullName { get; set; }
    public string Role { get; set; }
}

public class LoginModel
{
    public string UserName { get; set; }
    public string Password { get; set; }
}
`
  connString = `
"IdentityConnection": "data source=(local)\\sqlexpress;initial catalog=JwtIdentity;integrated security=true;MultipleActiveResultSets=true;"
`

  appSettings = `
"ApplicationSettings": {
"ClientSecret": "0123456789abcdef"
}
`
}