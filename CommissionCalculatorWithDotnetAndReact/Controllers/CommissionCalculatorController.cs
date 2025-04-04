using CommissionCalculatorWithDotnetAndReact.Models;
using CommissionCalculatorWithDotnetAndReact.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CommissionCalculatorWithDotnetAndReact.Controllers
{
    [Route("api/[controller]")]


    [ApiController]

    public class CommissionCalculatorController : ControllerBase
    {
        private readonly ICommissionCalculatorRepository _commissionRepository;

        public CommissionCalculatorController(ICommissionCalculatorRepository commissionRepository)
        {
            _commissionRepository = commissionRepository;
        }

        [HttpPost("calculate")]
        public IActionResult CalculateCommission([FromBody] CommissionRequest request)
        {
            if (request == null || request.AverageSaleAmount <= 0 || request.LocalSalesCount < 0 || request.ForeignSalesCount < 0)
            {
                return BadRequest("Invalid input values.");
            }

            var result = _commissionRepository.CalculateCommission(
                request.LocalSalesCount,
                request.ForeignSalesCount,
                request.AverageSaleAmount
            );

            return Ok(result);
        }
    }

}


