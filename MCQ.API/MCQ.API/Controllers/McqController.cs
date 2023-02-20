using MCQ.API.Data;
using MCQ.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MCQ.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class McqController : Controller
    {
        private readonly McqDbContext _mcqDbContext;
        public McqController(McqDbContext mcqDbContext) 
        {
            _mcqDbContext = mcqDbContext;
        }  

        [HttpGet]
        
        public async Task<IActionResult> GetAllChoices() 
        {
          var choices = await  _mcqDbContext.Choices.ToListAsync();
            return Ok(choices);

        }

        [HttpPost]

        public async Task<IActionResult> AddChoice([FromBody] Choice choicesRequest)
        {
            choicesRequest.Id = Guid.NewGuid();

            await _mcqDbContext.Choices.AddAsync(choicesRequest);
            await _mcqDbContext.SaveChangesAsync();


            return Ok(choicesRequest);

        }

        [HttpDelete]
        [Route("{id:guid}")]

        public async Task<IActionResult> DeleteChoices(Guid id)
        {
            var choices = await _mcqDbContext.Choices.FindAsync(id);

            if (choices == null)
            {
                return NotFound(id);
            }

            _mcqDbContext.Choices.Remove(choices);
            await _mcqDbContext.SaveChangesAsync();

            return Ok(choices);
        }



    }

   
}
