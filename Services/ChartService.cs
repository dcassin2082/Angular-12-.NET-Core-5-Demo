using DemoApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoApi.Services
{
    public class ChartService : IChartService
    {
        private readonly JungleDbContext _dbContext;

        public ChartService()
        {
            _dbContext = new JungleDbContext();
        }

        public IEnumerable<SalesData> GetColumnData()
        {
            IEnumerable<SalesData> data = _dbContext.SalesDatas;
            foreach (var d in data)
            {
                d.DateString = d.Day.Value.ToShortDateString();
            }
            return data.OrderBy(d => d.Day);
        }

        public IEnumerable<LineSery> GetLineSeries()
        {
            return _dbContext.LineSeries;
        }

        public IEnumerable<Trackball> GetTrackballData()
        {
            return _dbContext.Trackballs.OrderBy(x => x.X);
        }
    }
}
