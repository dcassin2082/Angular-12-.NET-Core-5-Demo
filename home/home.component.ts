import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private router: Router, public service: UserService, private toastr: ToastrService) { }


  preHtml: string = `<pre style="padding-top:10px;padding-bottom:10px;font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">MinLength</span>(<span style="color:#569cd6;">int</span>[]&nbsp;<span style="color:#9cdcfe;">arr</span>,&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">n</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//int[]&nbsp;arr&nbsp;=&nbsp;{&nbsp;3,&nbsp;1,&nbsp;2,&nbsp;4,&nbsp;5,&nbsp;6,&nbsp;0,&nbsp;1&nbsp;};</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">left</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">sum</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">min</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:#b4b4b4;">.</span>MaxValue;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>Length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;arr[i];
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(sum&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;n)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(sum&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">7</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">break</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>Min(min,&nbsp;i&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;left);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;<span style="color:#b4b4b4;">-=</span>&nbsp;arr[left];
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left<span style="color:#b4b4b4;">++</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;min<span style="color:#b4b4b4;">.</span>Equals(<span style="color:#569cd6;">int</span><span style="color:#b4b4b4;">.</span>MinValue)&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">:</span>&nbsp;min;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</pre>`
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

  asdf: string = ` `
  max: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">MaxLength</span>(<span style="color:#569cd6;">int</span>[]&nbsp;<span style="color:#9cdcfe;">arr</span>,&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">n</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;find&nbsp;the&nbsp;maximum&nbsp;consec&nbsp;elements&nbsp;that&nbsp;add&nbsp;up&nbsp;to&nbsp;less&nbsp;than&nbsp;or&nbsp;equal&nbsp;to&nbsp;n</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//int[]&nbsp;arr&nbsp;=&nbsp;{&nbsp;3,&nbsp;1,&nbsp;2,&nbsp;4,&nbsp;5,&nbsp;-66,&nbsp;0,&nbsp;1&nbsp;};</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;n&nbsp;=&nbsp;7</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;result&nbsp;=&nbsp;3&nbsp;(3+1+2)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">left</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">sum</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">max</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>Length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;arr[i];
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(sum&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;n)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max<span style="color:#b4b4b4;">++</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;<span style="color:#b4b4b4;">-=</span>&nbsp;arr[left<span style="color:#b4b4b4;">++</span>];
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
   
   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;max;
  &nbsp;&nbsp;&nbsp;&nbsp;}
  </pre>`
  userDetails;
  safeHtml: SafeHtml;
  safeMax: SafeHtml;

  ngOnInit() {
    // this.max = this.max.replace('{', '&#123;').replace('}',' &#125;');
    // this.safeMax = this.sanitizer.bypassSecurityTrustHtml(this.max);
    // this.preHtml = this.preHtml.replace('{', '&#123;').replace('}',' &#125;');
    // this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.preHtml);

    this.isDetails1 = true;
    this.isDetails2 = true;
    this.isDetails3 = true;
    this.isDetails4 = true;
    this.isDetails5 = true;
    this.isDetails6 = true;
    this.connStringsSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.connStrings));
    this.item4Safe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.item4));
    this.item9Safe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.item9));
    this.identityModelsSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.identityModels));
    this.authenticationContextSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.authenticationContext));
    this.configurationSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.configuration));
    this.startupSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.startup));
    this.authHelperSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.authHelper));
    this.controllerSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.controller));
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
  // TODO SUNDAY
  // on customer orders - the accordion isn't accordionining right
  // on products mobile landscape is off
  // on mobile checkout landscape is off
  // also the view cart not aligned with submit button
  //   also the zip, phone fields are too wide
  showDetails(num: number) {
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
      case 6:
        this.isDetails6 = !this.isDetails6;
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
      let text = document.getElementById(val).innerText;
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

  processHtml(html: string) {
    return [html.slice(0, 12), 'padding:20px;', html.slice(12)].join('').replace('{', '&#123;').replace('}', ' &#125;');
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

  connStringsSafe: SafeHtml;
  connStrings: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;<span style="color:#d7ba7d;">&quot;ConnectionStrings&quot;</span><span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#b4b4b4;">{</span>
    &nbsp;&nbsp;<span style="color:#d7ba7d;">&quot;JungleDbConnection&quot;</span><span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#d69d85;">&quot;server=localhost;initial&nbsp;catalog=dbname;integrated&nbsp;security=true;&nbsp;MultipleActiveResultSets=true;&quot;</span><span style="color:#b4b4b4;">,</span>
    &nbsp;&nbsp;<span style="color:#d7ba7d;">&quot;MsAspConnection&quot;</span><span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#d69d85;">&quot;Data&nbsp;Source=servername;Initial&nbsp;Catalog=dbname;User&nbsp;Id=user_id;password=password&quot;</span>
  <span style="color:#b4b4b4;">}</span>
  
  <span style="color:#d7ba7d;">&quot;ApplicationSettings&quot;</span><span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#b4b4b4;">{</span>
    &nbsp;&nbsp;<span style="color:#d7ba7d;">&quot;Jwt_Secret&quot;</span><span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#d69d85;">&quot;your_secret_min_16_bytes&quot;</span><span style="color:#b4b4b4;">,</span>
    &nbsp;&nbsp;<span style="color:#d7ba7d;">&quot;ClientURL&quot;</span><span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#d69d85;">&quot;http://localhost:4200&quot;</span>
    <span style="color:#b4b4b4;">}</span>
    </pre>
  `

  dbContext = `
  PM> scaffold-dbcontext "server=(local)\sqlexpress;database=db_name;trusted_connection=true;multipleactiveresultsets=true;" 
  microsoft.entityframeworkcore.sqlserver -outputdir Models -Context DbContextName
  `
  item4Safe: SafeHtml;
  item4: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//&nbsp;Add&nbsp;to&nbsp;ConfigureServices&nbsp;method</span>
  services<span style="color:#b4b4b4;">.</span>AddControllers()
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#b4b4b4;">.</span>AddNewtonsoftJson(<span style="color:#9cdcfe;">options</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">resolver</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;options<span style="color:#b4b4b4;">.</span>SerializerSettings<span style="color:#b4b4b4;">.</span>ContractResolver;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(resolver&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:#569cd6;">null</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(resolver&nbsp;<span style="color:#569cd6;">as</span>&nbsp;DefaultContractResolver)<span style="color:#b4b4b4;">.</span>NamingStrategy&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">null</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;});
   
  <span style="color:#d8a0df;">if</span>&nbsp;(Environment<span style="color:#b4b4b4;">.</span>IsProduction())
  {
  &nbsp;&nbsp;&nbsp;&nbsp;services<span style="color:#b4b4b4;">.</span>AddDbContext&lt;JungleDbContext&gt;(<span style="color:#9cdcfe;">options</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;options<span style="color:#b4b4b4;">.</span>UseSqlServer(Configuration<span style="color:#b4b4b4;">.</span>GetConnectionString(<span style="color:#d69d85;">&quot;MsAspConnection&quot;</span>)));
  }
  <span style="color:#d8a0df;">else</span>
  {
  &nbsp;&nbsp;&nbsp;&nbsp;services<span style="color:#b4b4b4;">.</span>AddDbContext&lt;JungleDbContext&gt;(<span style="color:#9cdcfe;">options</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;options<span style="color:#b4b4b4;">.</span>UseSqlServer(Configuration<span style="color:#b4b4b4;">.</span>GetConnectionString(<span style="color:#d69d85;">&quot;JungleDbConnection&quot;</span>)));
  }
  services<span style="color:#b4b4b4;">.</span>AddCors();

 <span style="color:#57a64a;">//&nbsp;Add&nbsp;to&nbsp;Configure&nbsp;method&nbsp;</span>
app<span style="color:#b4b4b4;">.</span>UseCors(<span style="color:#9cdcfe;">builder</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;builder<span style="color:#b4b4b4;">.</span>AllowAnyMethod()<span style="color:#b4b4b4;">.</span>AllowAnyHeader()<span style="color:#b4b4b4;">.</span>AllowAnyOrigin());
  </pre>
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
  item9Safe: SafeHtml;
  item9: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;<span style="color:#569cd6;">protected</span>&nbsp;<span style="color:#569cd6;">override</span>&nbsp;<span style="color:#569cd6;">void</span>&nbsp;<span style="color:#dcdcaa;">OnConfiguring</span>(DbContextOptionsBuilder&nbsp;<span style="color:#9cdcfe;">optionsBuilder</span>)
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>optionsBuilder<span style="color:#b4b4b4;">.</span>IsConfigured)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">builder</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;ConfigurationBuilder();
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>AddJsonFile(<span style="color:#d69d85;">&quot;appsettings.json&quot;</span>,&nbsp;optional:&nbsp;<span style="color:#569cd6;">false</span>);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">config</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;builder<span style="color:#b4b4b4;">.</span>Build();
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">cs</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;config<span style="color:#b4b4b4;">.</span>GetConnectionString(<span style="color:#d69d85;">&quot;JungleDbConnection&quot;</span>);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;optionsBuilder<span style="color:#b4b4b4;">.</span>UseSqlServer(cs);
  &nbsp;&nbsp;&nbsp;&nbsp;}
  }</pre>
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
  authHelperSafe: SafeHtml;
  authHelper: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">sealed</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">AuthorizationHelper</span>
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#dcdcaa;">CreateUserAuthorizationToken</span>(<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">type</span>,&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">id</span>,&nbsp;IList&lt;<span style="color:#569cd6;">string</span>&gt;&nbsp;<span style="color:#9cdcfe;">role</span>,&nbsp;IdentityOptions&nbsp;<span style="color:#9cdcfe;">options</span>,&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">secret</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">tokenDescriptor</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;SecurityTokenDescriptor
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subject&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;ClaimsIdentity(<span style="color:#569cd6;">new</span>&nbsp;Claim[]
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Claim(type,&nbsp;id),
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Claim(options<span style="color:#b4b4b4;">.</span>ClaimsIdentity<span style="color:#b4b4b4;">.</span>RoleClaimType,&nbsp;role<span style="color:#b4b4b4;">.</span>FirstOrDefault())
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}),
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expires&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;DateTime<span style="color:#b4b4b4;">.</span>UtcNow<span style="color:#b4b4b4;">.</span>AddDays(<span style="color:#b5cea8;">1</span>),
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SigningCredentials&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;SigningCredentials(<span style="color:#569cd6;">new</span>&nbsp;SymmetricSecurityKey(Encoding<span style="color:#b4b4b4;">.</span>UTF8<span style="color:#b4b4b4;">.</span>GetBytes(secret)),
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SecurityAlgorithms<span style="color:#b4b4b4;">.</span>HmacSha256Signature)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">tokenHandler</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;JwtSecurityTokenHandler();
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">securityToken</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;tokenHandler<span style="color:#b4b4b4;">.</span>CreateToken(tokenDescriptor);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">token</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;tokenHandler<span style="color:#b4b4b4;">.</span>WriteToken(securityToken);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;token;
  &nbsp;&nbsp;&nbsp;&nbsp;}
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">void</span>&nbsp;<span style="color:#dcdcaa;">AddAuthentication</span>(IServiceCollection&nbsp;<span style="color:#9cdcfe;">services</span>,&nbsp;<span style="color:#569cd6;">byte</span>[]&nbsp;<span style="color:#9cdcfe;">key</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;services<span style="color:#b4b4b4;">.</span>AddAuthentication(<span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<span style="color:#b4b4b4;">.</span>DefaultAuthenticateScheme&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;JwtBearerDefaults<span style="color:#b4b4b4;">.</span>AuthenticationScheme;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<span style="color:#b4b4b4;">.</span>DefaultChallengeScheme&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;JwtBearerDefaults<span style="color:#b4b4b4;">.</span>AuthenticationScheme;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<span style="color:#b4b4b4;">.</span>DefaultScheme&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;JwtBearerDefaults<span style="color:#b4b4b4;">.</span>AuthenticationScheme;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#b4b4b4;">.</span>AddJwtBearer(<span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<span style="color:#b4b4b4;">.</span>RequireHttpsMetadata&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<span style="color:#b4b4b4;">.</span>SaveToken&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<span style="color:#b4b4b4;">.</span>TokenValidationParameters&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;TokenValidationParameters
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ValidateIssuerSigningKey&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">true</span>,
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IssuerSigningKey&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;SymmetricSecurityKey(key),
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ValidateIssuer&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>,
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ValidateAudience&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>,
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClockSkew&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;TimeSpan<span style="color:#b4b4b4;">.</span>Zero
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
  &nbsp;&nbsp;&nbsp;&nbsp;}
  }</pre>
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
  controllerSafe: SafeHtml;
  controller: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;[Route(<span style="color:#d69d85;">&quot;api/[controller]&quot;</span>)]
  [ApiController]
  <span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">ApplicationUserController</span>&nbsp;:&nbsp;ControllerBase
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">private</span>&nbsp;UserManager&lt;ApplicationUser&gt;&nbsp;_userManager;
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">private</span>&nbsp;SignInManager&lt;ApplicationUser&gt;&nbsp;_signInManager;
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">private</span>&nbsp;<span style="color:#569cd6;">readonly</span>&nbsp;ApplicationSettings&nbsp;_appSettings;
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#4ec9b0;">ApplicationUserController</span>(UserManager&lt;ApplicationUser&gt;&nbsp;<span style="color:#9cdcfe;">userManager</span>,&nbsp;SignInManager&lt;ApplicationUser&gt;&nbsp;<span style="color:#9cdcfe;">signInManager</span>,&nbsp;IOptions&lt;ApplicationSettings&gt;&nbsp;<span style="color:#9cdcfe;">appSettings</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_userManager&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;userManager;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_signInManager&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;signInManager;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_appSettings&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;appSettings<span style="color:#b4b4b4;">.</span>Value;
  &nbsp;&nbsp;&nbsp;&nbsp;}
   
  &nbsp;&nbsp;&nbsp;&nbsp;[HttpPost]
  &nbsp;&nbsp;&nbsp;&nbsp;[Route(<span style="color:#d69d85;">&quot;Register&quot;</span>)]
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Post:&nbsp;/api/ApplicationUser/Register</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;Task&lt;<span style="color:#569cd6;">object</span>&gt;&nbsp;<span style="color:#dcdcaa;">PostApplicationUser</span>(ApplicationUserModel&nbsp;<span style="color:#9cdcfe;">model</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model<span style="color:#b4b4b4;">.</span>Role&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;Admin&quot;</span>;
   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">applicationUser</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;ApplicationUser()
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UserName&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;model<span style="color:#b4b4b4;">.</span>UserName,
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;model<span style="color:#b4b4b4;">.</span>Email,
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FullName&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;model<span style="color:#b4b4b4;">.</span>FullName
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">try</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;_userManager<span style="color:#b4b4b4;">.</span>CreateAsync(applicationUser,&nbsp;model<span style="color:#b4b4b4;">.</span>Password);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">await</span>&nbsp;_userManager<span style="color:#b4b4b4;">.</span>AddToRoleAsync(applicationUser,&nbsp;model<span style="color:#b4b4b4;">.</span>Role);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;Ok(result);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">catch</span>&nbsp;(Exception&nbsp;<span style="color:#9cdcfe;">ex</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">throw</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Exception(ex<span style="color:#b4b4b4;">.</span>Message);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;}
   
  &nbsp;&nbsp;&nbsp;&nbsp;[HttpPost]
  &nbsp;&nbsp;&nbsp;&nbsp;[Route(<span style="color:#d69d85;">&quot;Login&quot;</span>)]
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Post:&nbsp;/api/ApplicationUser/Login</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">async</span>&nbsp;Task&lt;IActionResult&gt;&nbsp;<span style="color:#dcdcaa;">Login</span>(LoginModel&nbsp;<span style="color:#9cdcfe;">model</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">user</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;_userManager<span style="color:#b4b4b4;">.</span>FindByNameAsync(model<span style="color:#b4b4b4;">.</span>UserName);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(user&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:#569cd6;">null</span>&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;_userManager<span style="color:#b4b4b4;">.</span>CheckPasswordAsync(user,&nbsp;model<span style="color:#b4b4b4;">.</span>Password))
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;get&nbsp;roles&nbsp;assigned&nbsp;to&nbsp;user</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">role</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">await</span>&nbsp;_userManager<span style="color:#b4b4b4;">.</span>GetRolesAsync(user);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IdentityOptions&nbsp;<span style="color:#9cdcfe;">options</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;IdentityOptions();
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">token</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;AuthorizationHelper<span style="color:#b4b4b4;">.</span>CreateUserAuthorizationToken(<span style="color:#d69d85;">&quot;UserID&quot;</span>,&nbsp;user<span style="color:#b4b4b4;">.</span>Id,&nbsp;role,&nbsp;options,&nbsp;_appSettings<span style="color:#b4b4b4;">.</span>ClientSecret);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;Ok(<span style="color:#569cd6;">new</span>&nbsp;{&nbsp;token&nbsp;});
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;BadRequest(<span style="color:#569cd6;">new</span>&nbsp;{&nbsp;message&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;Username&nbsp;or&nbsp;password&nbsp;is&nbsp;incorrect&quot;</span>&nbsp;});
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;}
  }</pre>
`

  startupSafe: SafeHtml;
  startup: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//&nbsp;Inside&nbsp;Startup.cs,&nbsp;ConfigureServices&nbsp;method,&nbsp;add&nbsp;the&nbsp;following&nbsp;code</span>
  <span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">connSection</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Configuration<span style="color:#b4b4b4;">.</span>GetSection(<span style="color:#d69d85;">&quot;ConnectionStrings&quot;</span>);
  services<span style="color:#b4b4b4;">.</span>Configure&lt;ConnectionSettings&gt;(connSection);
  <span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">connSettings</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;connSection<span style="color:#b4b4b4;">.</span>Get&lt;ConnectionSettings&gt;();
   
  <span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">appSection</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Configuration<span style="color:#b4b4b4;">.</span>GetSection(<span style="color:#d69d85;">&quot;ApplicationSettings&quot;</span>);
  services<span style="color:#b4b4b4;">.</span>Configure&lt;ApplicationSettings&gt;(appSection);
  <span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">appSettings</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;appSection<span style="color:#b4b4b4;">.</span>Get&lt;ApplicationSettings&gt;();
  <span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">key</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Encoding<span style="color:#b4b4b4;">.</span>UTF8<span style="color:#b4b4b4;">.</span>GetBytes(appSettings<span style="color:#b4b4b4;">.</span>ClientSecret);
   
  <span style="color:#57a64a;">//&nbsp;Add&nbsp;default&nbsp;identity&nbsp;</span>
  services<span style="color:#b4b4b4;">.</span>AddIdentity&lt;ApplicationUser,&nbsp;IdentityRole&gt;()<span style="color:#b4b4b4;">.</span>
  &nbsp;&nbsp;&nbsp;&nbsp;AddEntityFrameworkStores&lt;AuthenticationContext&gt;()<span style="color:#b4b4b4;">.</span>
  &nbsp;&nbsp;&nbsp;&nbsp;AddDefaultTokenProviders();
   
  <span style="color:#57a64a;">//&nbsp;configure&nbsp;identity&nbsp;options&nbsp;to&nbsp;override&nbsp;default&nbsp;options&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  services<span style="color:#b4b4b4;">.</span>Configure&lt;IdentityOptions&gt;(<span style="color:#9cdcfe;">options</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
  {
  &nbsp;&nbsp;&nbsp;&nbsp;options<span style="color:#b4b4b4;">.</span>Password<span style="color:#b4b4b4;">.</span>RequireDigit&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;options<span style="color:#b4b4b4;">.</span>Password<span style="color:#b4b4b4;">.</span>RequireNonAlphanumeric&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;options<span style="color:#b4b4b4;">.</span>Password<span style="color:#b4b4b4;">.</span>RequireLowercase&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;options<span style="color:#b4b4b4;">.</span>Password<span style="color:#b4b4b4;">.</span>RequireUppercase&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;options<span style="color:#b4b4b4;">.</span>Password<span style="color:#b4b4b4;">.</span>RequiredLength&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">4</span>;
  });
   
  services<span style="color:#b4b4b4;">.</span>AddDbContext&lt;AuthenticationContext&gt;(<span style="color:#9cdcfe;">options</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;options<span style="color:#b4b4b4;">.</span>UseSqlServer(connSettings<span style="color:#b4b4b4;">.</span>IdentityConnection));
  AuthorizationHelper<span style="color:#b4b4b4;">.</span>AddAuthentication(services,&nbsp;key);</pre>
`
  configurationSafe: SafeHtml;
  configuration: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">ApplicationSettings</span>
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;ClientSecret&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
  }
   
  <span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">ConnectionSettings</span>
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;IdentityConnection&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;JungleDbConnection&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;AzureDbConnection&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
  }</pre>
`

  app = `
  app.UseAuthentication();
`
  authenticationContextSafe: SafeHtml;
  authenticationContext: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">AuthenticationContext</span>&nbsp;:&nbsp;IdentityDbContext
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#4ec9b0;">AuthenticationContext</span>(DbContextOptions&lt;AuthenticationContext&gt;&nbsp;<span style="color:#9cdcfe;">options</span>)&nbsp;:&nbsp;<span style="color:#569cd6;">base</span>(options)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;DbSet&lt;ApplicationUser&gt;&nbsp;ApplicationUsers&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">protected</span>&nbsp;<span style="color:#569cd6;">override</span>&nbsp;<span style="color:#569cd6;">void</span>&nbsp;<span style="color:#dcdcaa;">OnModelCreating</span>(ModelBuilder&nbsp;<span style="color:#9cdcfe;">builder</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">base</span><span style="color:#b4b4b4;">.</span>OnModelCreating(builder);
   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>Entity&lt;IdentityUser&gt;(<span style="color:#9cdcfe;">entity</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity<span style="color:#b4b4b4;">.</span>ToTable(name:&nbsp;<span style="color:#d69d85;">&quot;User&quot;</span>);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>Entity&lt;IdentityRole&gt;(<span style="color:#9cdcfe;">entity</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity<span style="color:#b4b4b4;">.</span>ToTable(name:&nbsp;<span style="color:#d69d85;">&quot;Role&quot;</span>);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>Entity&lt;IdentityUserRole&lt;<span style="color:#569cd6;">string</span>&gt;&gt;(<span style="color:#9cdcfe;">entity</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity<span style="color:#b4b4b4;">.</span>ToTable(<span style="color:#d69d85;">&quot;UserRoles&quot;</span>);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>Entity&lt;IdentityUserClaim&lt;<span style="color:#569cd6;">string</span>&gt;&gt;(<span style="color:#9cdcfe;">entity</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity<span style="color:#b4b4b4;">.</span>ToTable(<span style="color:#d69d85;">&quot;UserClaims&quot;</span>);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>Entity&lt;IdentityUserLogin&lt;<span style="color:#569cd6;">string</span>&gt;&gt;(<span style="color:#9cdcfe;">entity</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity<span style="color:#b4b4b4;">.</span>ToTable(<span style="color:#d69d85;">&quot;UserLogins&quot;</span>);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>Entity&lt;IdentityRoleClaim&lt;<span style="color:#569cd6;">string</span>&gt;&gt;(<span style="color:#9cdcfe;">entity</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity<span style="color:#b4b4b4;">.</span>ToTable(<span style="color:#d69d85;">&quot;RoleClaims&quot;</span>);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;builder<span style="color:#b4b4b4;">.</span>Entity&lt;IdentityUserToken&lt;<span style="color:#569cd6;">string</span>&gt;&gt;(<span style="color:#9cdcfe;">entity</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entity<span style="color:#b4b4b4;">.</span>ToTable(<span style="color:#d69d85;">&quot;UserTokens&quot;</span>);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
   
  &nbsp;&nbsp;&nbsp;&nbsp;}
  }</pre>
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

  identityModelsSafe: SafeHtml;
  identityModels: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//&nbsp;In&nbsp;Models&nbsp;folder&nbsp;</span>
  <span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">ApplicationUser</span>&nbsp;:&nbsp;IdentityUser
  {
  &nbsp;&nbsp;&nbsp;&nbsp;[Column(TypeName&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;nvarchar(150)&quot;</span>)]
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;FullName&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
  }
   
  <span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">ApplicationUserModel</span>
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;UserName&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;Email&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;Password&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;FullName&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;Role&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
  }
   
  <span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">class</span>&nbsp;<span style="color:#4ec9b0;">LoginModel</span>
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;UserName&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;Password&nbsp;{&nbsp;<span style="color:#569cd6;">get</span>;&nbsp;<span style="color:#569cd6;">set</span>;&nbsp;}
  }
  </pre>
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
