const Item = require('../model/item.model.js');

// Create and Save a new Item
exports.create = (req, res) => {
    // Validate request
    if(!req.body.prodId) {
        return res.status(400).send({
            message: "product Id can not be empty"
        });
    }

    // Create a provider
    const item= new Item({
       // Id: req.body.Id || "there is no ID for this product!", 
       

         prodId:req.body.prodId,
         provider_id:req.body.provider_id,
         price:req.body.price,
         available:req.body.available,
         size:req.body.size,
         color:req.body.color
             
            });

    // Save provider in the database
    item.save()
    .then(data => {
        res.send(data);
        console.log(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Item."
        });
    });
};

// Retrieve and return all providers from the database.
exports.findAll = (req, res) => {
    console.log("hello manoj");
    Item.find()
    .then(item => {
        res.send(item);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving items."
        });
    });
};

// Find a single order with a orderId
exports.findOne = (req, res) => {
    Item.find({provider_id:req.params.provider_id})
    .then(item => {
        if(!item) {
            return res.status(404).send({
                message: "item not found with id " + req.params.provider_id
            });            
        }
        res.send(item);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "item not found with id " + req.params.provider_id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving item with id " + req.params.provider_id
        });
    });
};
//Update a provider identified by the providerId in the request
exports.update = (req, res) => {
    // Validate Request
     console.log("helloma")
    if(!req.body.item_id) {
        return res.status(400).send({
            message: "item_id can not be empty"
        });
    }

    // Find provider and update it with the request body
    Item.findOneAndUpdate({item_id:req.params.item_id}, {
        //Id: req.body.Id || "there is no ID for this order!", 
      

        prodId:req.body.prodId,
        provider_id:req.body.provider_id,
        price:req.body.price,
        available:req.body.available,
        size:req.body.size,
        color:req.body.color




    }, {new: true})
   .then(item => {
        if(item) {
            res.send(item);
            console.log("success")
        }
        
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "item not found with id " + req.params.item_id
            });                
        }
        return res.status(500).send({
            message: "Error updating item with id " + req.params.item_id
        });
    });
};

/*{new: true} option in the findByIdAndUpdate() method is used to return the modified document to the then() function instead of the original.
*/

// Delete a provider with the specified prodId in the request
exports.delete = (req, res) => {
    Item.findOneAndRemove({item_id:req.params.item_id})
    .then(item => {
        if(!item) {
            return res.status(404).send({
                message: "item not found with id " + req.params.item_id
            });
        }
        res.send({message: "item deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "item not found with id " + req.params.item_id
            });                
        }
        return res.status(500).send({
            message: "Could not delete item with id " + req.params.item_id
        });
    });
};
