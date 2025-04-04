using CommissionCalculatorWithDotnetAndReact.Models;

namespace CommissionCalculatorWithDotnetAndReact.Repositories
{
    public interface ICommissionCalculatorRepository
    {
        public CommissionResult CalculateCommission(int localSalesCount, int foreignSalesCount, decimal averageSaleAmount);

       

     }
}
    

