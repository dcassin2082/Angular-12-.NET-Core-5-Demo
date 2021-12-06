using DemoApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoApi.Services
{
    public abstract class ServicesBase<T> where T : class
    {
        protected readonly IRepository<T> _repo;

        protected ServicesBase(IRepository<T> repo)
        {
            _repo = repo;
        }
    }
}
