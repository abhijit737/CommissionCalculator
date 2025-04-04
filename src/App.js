import React from "react";
import CommissionForm from "./components/CommissionForm";
import "./styles.css";

// import toast from 'react-toastify'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
    return (
        <div className="app">
            <h1>FCamara Commission Calculator</h1>
            <CommissionForm />
        </div>
    );
};

export default App;
