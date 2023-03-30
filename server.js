const express = require('express');
const app = express();

const { getProducts, getProduct } = require('./controllers/productController');

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
