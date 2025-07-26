const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Import your routes
const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');
const productRoutes  = require('./routes/productRoutes');
const branchRoutes   = require('./routes/branchRoutes');
const orderRoutes    = require('./routes/orderRoutes');
// ...and other routes as you create them

app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/branches', branchRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);
// ...etc


// Use the routers
// ... app.use('/api/products', productRoutes), etc.

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch(err => console.log(err));
