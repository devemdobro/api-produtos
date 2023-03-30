const Product = require('../models/productModel');

async function getProducts(req, res) {
	try {
		const products = await Product.findAll();

		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(products));
	} catch (error) {
		console.log(error);
	}
}

async function getProduct(req, res) {
	try {
		const product = await Product.findById(req.params.id);

		if (!product) {
			res.writeHead(404, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ message: 'Product Not Found' }));
		} else {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(product));
		}
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	getProducts,
	getProduct,
};
