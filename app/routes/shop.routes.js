module.exports = (app) => {
    const shops = require('../controllers/shop.controller.js');

    // Create a new shops
    app.post('/shops', shops.create);

    // Retrieve all shops
    app.get('/shops', shops.findAll);

    // Retrieve a single shops with itemId
    app.get('/shops/:shopId', shops.findOne);

    // Update a shops with itemId
    app.put('/shops/:shopId', shops.update);

    // Delete a shops with itemId
    app.delete('/shops/:shopId', shops.delete);
}
