using DemoApi.Models;
using DemoApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoApi.Services
{
    public class StateService : ServicesBase<State>, IStateService
    {
        public StateService(IRepository<State> repo) : base(repo)
        {
        }

        public async Task<List<State>> GetStates()
        {
            return await _repo.GetAll();
        }
    }
}
