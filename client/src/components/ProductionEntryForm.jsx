
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import img1 from "../image/Jaisingh alloys logo1.png"

const ProductionEntryForm = () => {
    const [formData, setFormData] = useState({
        date: '',
        machineNumber: '',
        planQuantity: '',
        actualQuantity: '',
        rejectQuantity: '',
        breakdownQuantity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Use environment variable for API URL

        try {
            // const apiUrl = https://productionform.onrender.com/api/production-entry ;

            const response = await fetch(`https://productionform.onrender.com/api/production-entry`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
            toast.success('Form submitted successfully');

            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Error submitting form');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-gradient-to-r from-zinc-900 to-neutral-700 ">


            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-10 py-8 w-full max-w-lg border border-gray-300">

                <div className="flex justify-start  mb-6">
                    <img src={img1} alt="Company Logo" className="h-12 " />
                    <h1 className=" text-2xl text-center font-bold  text-gray-800 mb-4 mx-4">Jaisingh Alloys Pvt. Ltd.</h1>
                </div>

                {/* Company Name */}
                
                <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Production <span className='text-blue-500'>Entry</span> Form</h2>

                {/* Date Field */}
                <label className="text-gray-700 text-sm font-medium mb-2 flex" htmlFor="date">Date</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
                />

                {/* Machine Number Field */}
                <label className="block text-gray-700 text-sm font-medium mb-2 flex" htmlFor="machineNumber">Machine Number</label>
                <select
                    name="machineNumber"
                    id="machineNumber"
                    value={formData.machineNumber}
                    onChange={handleChange}
                    className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
                >
                    <option value="">Select Machine</option>
                    <option value="1">M1</option>
                    <option value="2">M2</option>
                    <option value="3">M3</option>
                    <option value="4">M4</option>
                    <option value="5">M5</option>
                </select>

                {/* Plan Quantity */}
                <label className="block text-gray-700 text-sm font-medium mb-2 flex" htmlFor="planQuantity">Plan Quantity</label>
                <input
                    type="number"
                    name="planQuantity"
                    id="planQuantity"
                    value={formData.planQuantity}
                    onChange={handleChange}
                    className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
                />

                {/* Actual Quantity */}
                <label className="text-gray-700 text-sm font-medium mb-2 flex" htmlFor="actualQuantity">Actual Quantity</label>
                <input
                    type="number"
                    name="actualQuantity"
                    id="actualQuantity"
                    value={formData.actualQuantity}
                    onChange={handleChange}
                    className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
                />

                {/* Reject Quantity */}
                <label className="flex text-gray-700 text-sm font-medium mb-2" htmlFor="rejectQuantity">Reject Quantity</label>
                <input
                    type="number"
                    name="rejectQuantity"
                    id="rejectQuantity"
                    value={formData.rejectQuantity}
                    onChange={handleChange}
                    className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
                />

                {/* Breakdown Quantity */}
                <label className="flex text-gray-700 text-sm font-medium mb-2" htmlFor="breakdownQuantity"> breakdown (in minutes) </label>
                <input
                    type="number"
                    name="breakdownQuantity"
                    id="breakdownQuantity"
                    value={formData.breakdownQuantity}
                    onChange={handleChange}
                    className="shadow-md appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-6"
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg w-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Submit
                </button>
            </form>
            <ToastContainer />
        </div >
    );
};

export default ProductionEntryForm;
