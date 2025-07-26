const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Import your routes
const userRoutes = require('./routes/userRoutes');
// ... Import other routers as you make them

// Use the routers
app.use('/api/users', userRoutes);
// ... app.use('/api/products', productRoutes), etc.

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch(err => console.log(err));
