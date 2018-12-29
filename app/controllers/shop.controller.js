const Shop = require('../model/shop.model.js');

// Create and Save a new Shop
exports.create = (req, res) => {
    // Validate request
    if(!req.body.shopname) {
        return res.status(400).send({
            message: "Shop name can not be empty"
        });
    }

    // Create a Shop
    const shop= new Shop({
       // Id: req.body.Id || "there is no ID for this product!", 
        Id:req.body.Id,
        shopname:req.body.shopname,
       contactno:req.body.contactno,
       address:req.body.address,
       latitude:req.body.latitude,
       longitude:req.body.longitude,
       email:req.body.email,
       url:req.body.url,
       url1:req.body.url1

    });

    // Save Shop in the database
    shop.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Shop."
        });
    });
};

// Retrieve and return all Shops from the database.
exports.findAll = (req, res) => {
    Shop.find()
    .then(shops => {
        res.send(shops);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Shops."
        });
    });
};

// Find a single product with a ShopId
exports.findOne = (req, res) => {
    Shop.findOne({Id:req.params.shopId})
    .then(shop => {
        if(!shop) {
            return res.status(404).send({
                message: "Shop not found with id " + req.params.shopId
            });            
        }
        res.send(shop);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Shop not found with id " + req.params.shopId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Shop with id " + req.params.shopId
        });
    });
};
// Update a Shop identified by the ShopId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.shopname) {
        return res.status(400).send({
            message: "shop name can not be empty"
        });
    }

    // Find shop and update it with the request body
   Shop.findOneAndUpdate({Id:req.params.shopId}, {
        //Id: req.body.Id || "there is no ID for this product!", 
        Id:req.body.Id,
        shopname:req.body.shopname,
       contactno:req.body.contactno,
       address:req.body.address,
       latitude:req.body.latitude,
       longitude:req.body.longitude,
       email:req.body.email,
       url:req.body.url,
       url1:req.body.url1
    }, {new: true})
    .then(shop => {
        if(!shop) {
            return res.status(404).send({
                message: "shop not found with id " + req.params.shopId
            });
        }
        res.send(shop);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "shop not found with id " + req.params.shopId
            });                
        }
        return res.status(500).send({
            message: "Error updating shop with id " + req.params.shopId
        });
    });
};

/*{new: true} option in the findByIdAndUpdate() method is used to return the modified document to the then() function instead of the original.
*/

// Delete a shop with the specified shopId in the request
exports.delete = (req, res) => {
    Shop.findOneAndDelete({Id:req.params.shopId})
    .then(shop => {
        if(!shop) {
            return res.status(404).send({
                message: "shop not found with id " + req.params.shopId
            });
        }
        res.send({message: "shop deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "shop not found with id " + req.params.shopId
            });                
        }
        return res.status(500).send({
            message: "Could not delete shop with id " + req.params.shopId
        });
    });
};
