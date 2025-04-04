using CommissionCalculatorWithDotnetAndReact.Models;

namespace CommissionCalculatorWithDotnetAndReact.Repositories
{
    public class CommissionCalculatorRepository : ICommissionCalculatorRepository
    {
        public CommissionResult CalculateCommission(int localSales, int foreignSales, decimal averageSaleAmount)
        {
            decimal fcLocal = 0.20m * localSales * averageSaleAmount;
            decimal fcForeign = 0.35m * foreignSales * averageSaleAmount;
            decimal compLocal = 0.02m * localSales * averageSaleAmount;
            decimal compForeign = 0.0755m * foreignSales * averageSaleAmount;

            return new CommissionResult
            {
                FCamaraCommission = fcLocal + fcForeign,
                CompetitorCommission = compLocal + compForeign
            };
        }
    }
}
