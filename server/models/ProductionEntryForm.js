const mongoose = require('mongoose');

const ProductionEntrySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    machineNumber: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5],  // Limits the values to 1-5
    },
    planQuantity: {
        type: Number,
        required: true,
    },
    actualQuantity: {
        type: Number,
        required: true,
    },
    rejectQuantity: {
        type: Number,
        required: true,
    },
    breakdownQuantity: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('ProductionEntry', ProductionEntrySchema);
