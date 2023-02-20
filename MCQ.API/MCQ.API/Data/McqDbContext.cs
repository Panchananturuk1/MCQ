using MCQ.API.Models;
using Microsoft.EntityFrameworkCore;

namespace MCQ.API.Data
{
    public class McqDbContext : DbContext
    {
        public McqDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Choice> Choices { get; set; }
    }
}
