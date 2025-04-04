// import axios from "axios";

// const API_BASE_URL = process.env.REACT_APP_API_URL || "https://localhost:5001/api";

// export const calculateCommission = async (data) => {
//     try {
//         const response = await axios.post(`${API_BASE_URL}/CommissionCalculator/calculate`, data);
//         return response.data;
//     } catch (error) {
//         console.error("Error calculating commission:", error);
//         throw error;
//     }
// };


import axios from "axios";

const API_BASE_URL = "https://localhost:7028/api/CommissionCalculator";

export const calculateCommission = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/calculate`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: false,  
    });
    return response.data;
  } catch (error) {
    console.error("Error calculating commission:", error);
    throw error;
  }
};
