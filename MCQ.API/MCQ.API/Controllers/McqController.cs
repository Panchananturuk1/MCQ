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

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetChoice([FromRoute] Guid id)
        {
            var choices = await _mcqDbContext.Choices.FirstOrDefaultAsync(x => x.Id == id);

            if (choices == null)
            {
                return NotFound();
            }
            return Ok(choices);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateChoice([FromRoute] Guid id, Choice updateChoicesRequest)
        // public async Task<ActionResult<List<Employee>>> UpdateEmployee(Employee updateEmployeeRequest)

        {
            var choices = await _mcqDbContext.Choices.FindAsync(id);
            //   var employee = await _fullStackDbContext.Employees.FindAsync(updateEmployeeRequest.Id);

            if (choices == null)
            {
                return NotFound();
            }

            choices.Choice1 = updateChoicesRequest.Choice1;
            choices.Choice2 = updateChoicesRequest.Choice2;
            choices.Choice3 = updateChoicesRequest.Choice3;
            choices.Choice4 = updateChoicesRequest.Choice4;
          


            await _mcqDbContext.SaveChangesAsync();
            return Ok(choices);
            // return Ok(await _fullStackDbContext.Employees.ToListAsync());

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
