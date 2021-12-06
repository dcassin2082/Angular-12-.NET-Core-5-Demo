using DemoApi.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace DemoApi.Repository
{
    public abstract class RepositoryBase<T> : IDisposable where T : class
    {
        protected internal readonly JungleDbContext _dbContext;
        protected internal readonly DbSet<T> _dbSet;

        protected RepositoryBase(JungleDbContext dbContext)
        {
            _dbContext = dbContext;
            _dbSet = _dbContext?.Set<T>();
        }

        public void Dispose()
        {
            _dbContext?.Dispose();
        }
    }
}
