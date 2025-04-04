import React from "react";

const CommissionResult = ({ result }) => {
    if (!result) return null; // Don't render if result is null

    return (
        <div className="result-container">
            <h3>Commission Calculation Result</h3>
            <p><strong>F. Camara Commission:</strong> ${result.fCamaraCommission.toFixed(2)}</p>
            <p><strong>Competitor Commission:</strong> ${result.competitorCommission.toFixed(2)}</p>
        </div>
    );
};

export default CommissionResult;
