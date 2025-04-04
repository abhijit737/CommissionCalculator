import React, { useState } from "react";
import { calculateCommission } from "../api/commissionService";
import CommissionResult from "./CommissionResult";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommissionForm = () => {
    const [formData, setFormData] = useState({
        localSalesCount: "",
        foreignSalesCount: "",
        averageSaleAmount: ""
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate input fields
        if (!formData.localSalesCount || !formData.foreignSalesCount || !formData.averageSaleAmount) {
            toast.error("Please fill in all fields.");
            return;
        }

        try {
            const response = await calculateCommission({
                localSalesCount: parseInt(formData.localSalesCount, 10),
                foreignSalesCount: parseInt(formData.foreignSalesCount, 10),
                averageSaleAmount: parseFloat(formData.averageSaleAmount)
            });

            setResult(response);
            toast.success("Commission calculated successfully!");
        } catch (error) {
            toast.error("Failed to calculate commission. Please try again.");
        }
    };

    return (
        <div className="container">
            <h2>Commission Calculator</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Local Sales Count:</label>
                    <input
                        type="number"
                        name="localSalesCount"
                        value={formData.localSalesCount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Foreign Sales Count:</label>
                    <input
                        type="number"
                        name="foreignSalesCount"
                        value={formData.foreignSalesCount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Average Sale Amount:</label>
                    <input
                        type="number"
                        step="0.01"
                        name="averageSaleAmount"
                        value={formData.averageSaleAmount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Calculate</button>
            </form>

            {/* Show commission result only if available */}
            {result && <CommissionResult result={result} />}

            {/* Toast Notification Container */}
            <ToastContainer />
        </div>
    );
};

export default CommissionForm;
