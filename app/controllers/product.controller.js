const Product = require('../model/product.model.js');

// Create and Save a new product
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "product name can not be empty"
        });
    }

    // Create a product
    const product= new Product({
       // Id: req.body.Id || "there is no ID for this product!", 
        Id1:req.body.Id1,
        name: req.body.name,
        img :req.body.img,
        img1 :req.body.img1,
        img2 :req.body.img2,
        img3 :req.body.img3,
        prodCategory:req.body.prodCategory,
	    shopCategory:req.body.shopCategory,
        rating:req.body.rating,
        shortDesc:req.body.shortDesc,
	    longDesc:req.body.longDesc,
	    size:req.body.size,
        price:req.body.price,
        sku:req.body.sku,
	    BrandName:req.body.BrandName,
	    discount:req.body.discount,
	    tax:req.body.tax,
    	shopName:req.body.shopName,
        prodId:req.body.prodId,
	    review:req.body.review,
        total:req.body.total,
        available:req.body.available,
        color:req.body.color,

    });

    // Save Product in the database
    product.save()
    .then(data => {
        res.send(data);
        console.log(        res.send(data)
        )
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Product."
        });
    });
};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
    Product.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};

// Find a single product with a productId
exports.findOne = (req, res) => {
    Product.findOne({Id1:req.params.productId})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.productId
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.productId
        });
    });
};
// Update a product identified by the productId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "product name can not be empty"
        });
    }

    // Find product and update it with the request body
    Product.findOneAndUpdate({Id1:req.params.productId}, {
        Id1: req.body.Id1, 
        name: req.body.name,
        img :req.body.img,
        img1 :req.body.img1,
        img2 :req.body.img2,
        img3 :req.body.img3,
        prodCategory:req.body.prodCategory,
	    shopCategory:req.body.shopCategory,
        rating:req.body.rating,
        shortDesc:req.body.shortDesc,
	    longDesc:req.body.longDesc,
	    size:req.body.size,
        price:req.body.price,
        sku:req.body.sku,
	    BrandName:req.body.BrandName,
	    discount:req.body.discount,
	    tax:req.body.tax,
    	shopName:req.body.shopName,
        prodId:req.body.prodId,
	    review:req.body.review,
        total:req.body.total,
        available:req.body.available,
        color:req.body.color
        
    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "product not found with id " + req.params.productId
            });
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error updating product with id " + req.params.productId
        });
    });
};

/*{new: true} option in the findByIdAndUpdate() method is used to return the modified document to the then() function instead of the original.
*/

// Delete a product with the specified productId in the request
exports.delete = (req, res) => {
    Product.findOneAndRemove({Id1:req.params.productId})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "product not found with id " + req.params.productId
            });
        }
        res.send({message: "product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Could not delete product with id " + req.params.productId
        });
    });
};
