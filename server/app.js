const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js');
const productionEntryRoutes = require('./routes/ProductionEntryForm');

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

const corsOptions = {
    origin: 'https://productionform.vercel.app/',  // Replace with your frontend's hosted URL7
    optionsSuccessStatus: 200
  };

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Routes
app.use('/api/production-entry', productionEntryRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
