module.exports = (app) => {
    const items = require('../controllers/item.controller.js');

    // Create a new order
    app.post('/items', items.create);

    // Retrieve all order
    app.get('/items', items.findAll);

    // Retrieve a single order with orderId
    app.get('/items/:provider_id', items.findOne);

    // Update a order with orderId
    app.put('/items/:item_id', items.update);

    // Delete a order with orderId
    app.delete('/items/:item_id', items.delete);
}
