import React, { useState } from 'react';
import axios from 'axios';

function ReceiveGoodsForm() {
    const [formData, setFormData] = useState({
        supplier: '',
        date: '',
        product: '',
        qtyDus: 0,
        qtyPcs: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/penerimaan", formData);
            alert("Data successfully submitted!");
            console.log("Response:", response);
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            alert("Error submitting data: " + (error.response ? error.response.data.error : error.message));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="supplier" value={formData.supplier} onChange={handleChange} placeholder="Supplier" />
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
            <input type="text" name="product" value={formData.product} onChange={handleChange} placeholder="Product" />
            <input type="number" name="qtyDus" value={formData.qtyDus} onChange={handleChange} placeholder="Dus" />
            <input type="number" name="qtyPcs" value={formData.qtyPcs} onChange={handleChange} placeholder="Pcs" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ReceiveGoodsForm;