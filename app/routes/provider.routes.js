module.exports = (app) => {
    const provider = require('../controllers/provider.controller.js');

    // Create a new item
    app.post('/provider', provider.create);

    // Retrieve all item
    app.get('/provider', provider.findAll);

    // // Retrieve a single Note with itemId
    app.get('/provider/:prodId', provider.findOne);

    // // Update a Note with itemId
    app.put('/provider/:provider_id', provider.update);

    // Delete a Note with itemId
    app.delete('/provider/:prodId', provider.delete);
}
