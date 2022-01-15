using DemoApi.Models;
using DemoApi.Repository;
using DemoApi.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment)
        {
            Configuration = configuration;
            Environment = environment;
        }

        public IConfiguration Configuration { get; }
        public IWebHostEnvironment Environment { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers()
                .AddNewtonsoftJson(options =>
                {
                    var resolver = options.SerializerSettings.ContractResolver;
                    if (resolver != null)
                        (resolver as DefaultContractResolver).NamingStrategy = null;
                });

            if(Environment.IsProduction())
            {
                services.AddDbContext<JungleDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("AzureDbConnection")));
            }
            else
            {
                services.AddDbContext<JungleDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("JungleDbConnection")));
            }
            services.AddCors();

            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IProductCategoryService, ProductCategoryService>();
            services.AddScoped<IProductSubcategoryService, ProductSubcategoryService>();
            services.AddScoped<IStateService, StateService>();
            services.AddScoped<ICustomerService, CustomerService>();
            services.AddScoped<ICustomerOrderService, CustomerOrderService>();
            services.AddScoped<IChartService, ChartService>();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "DemoApi", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(builder => builder.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin());

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "DemoApi v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseDeveloperExceptionPage();
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
