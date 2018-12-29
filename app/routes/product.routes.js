module.exports = (app) => {
    const products = require('../controllers/product.controller.js');

    // Create a new item
    app.post('/products', products.create);

    // Retrieve all item
    app.get('/products', products.findAll);

    // Retrieve a single Note with itemId
    app.get('/products/:productId', products.findOne);

    // Update a Note with itemId
    app.put('/products/:productId', products.update);

    // Delete a Note with itemId
    app.delete('/products/:productId', products.delete);
}
