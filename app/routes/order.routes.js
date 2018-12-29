module.exports = (app) => {
    const orders = require('../controllers/order.controller.js');

    // Create a new order
    app.post('/orders', orders.create);

    // Retrieve all order
    app.get('/orders', orders.findAll);

    // Retrieve a single order with orderId
    app.get('/orders/:order_id', orders.findOne);

    // Update a order with orderId
    app.put('/orders/:order_id', orders.update);

    // Delete a order with orderId
    app.delete('/orders/:order_id', orders.delete);
}
