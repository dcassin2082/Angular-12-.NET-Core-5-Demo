using System;
using System.Collections.Generic;

#nullable disable

namespace DemoApi.Models
{
    public partial class Employee
    {
        public int EmployeeId { get; set; }
        public string FullName { get; set; }
        public string Empcode { get; set; }
        public string Mobile { get; set; }
        public string Position { get; set; }
    }
}
