module.exports = (app) => {
    const admin = require('../controllers/admin.controlller.js');

    // Create a new order
    app.post('/orders', admin.create);

    // Retrieve all order
    app.get('/count', admin.findAll);

    // Retrieve a single order with orderId
    app.get('/orders/:order_id', admin.findOne);

    // Update a order with orderId
    app.put('/orders/:order_id', admin.update);

    // Delete a order with orderId
    app.delete('/orders/:order_id', admin.delete);
}
