using DemoApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoApi.Services
{
    public interface IChartService
    {
        IEnumerable<LineSery> GetLineSeries();
        IEnumerable<SalesData> GetColumnData();
        IEnumerable<Trackball> GetTrackballData();
    }
}
