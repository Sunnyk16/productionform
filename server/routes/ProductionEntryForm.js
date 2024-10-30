const express = require('express');
const router = express.Router();
const ProductionEntry = require('../models/ProductionEntryForm.js');

// POST route to create a new production entry
router.post('/', async (req, res) => {
    try {
        const { date, machineNumber, planQuantity, actualQuantity, rejectQuantity, breakdownQuantity } = req.body;
        const newEntry = new ProductionEntry({
            date,
            machineNumber,
            planQuantity,
            actualQuantity,
            rejectQuantity,
            breakdownQuantity,
        });

        await newEntry.save();
        res.status(201).json({ message: 'Production entry created successfully', data: newEntry });
    } catch (error) {
        res.status(500).json({ message: 'Error creating production entry', error: error.message });
    }
});

router.get('/entry', async (req, res) => {
    try {
        const entries = await ProductionEntry.find();
        res.status(200).json({ message: 'Production entries retrieved successfully', data: entries });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving production entries', error: error.message });
    }
});

module.exports = router;
