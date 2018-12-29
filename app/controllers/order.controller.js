const Order = require('../model/order.model.js');

// Create and Save a new order
exports.create = (req, res) => {
    // Validate request
    if(!req.body.product_name) {
        return res.status(400).send({
            message: "customer name can not be empty"
        });
    }

    // Create a order
    const order= new Order({
       // Id: req.body.Id || "there is no ID for this product!", 
       

         // order_id:req.body.order_id,
        cust_id:req.body.cust_id,
        product_name:req.body.product_name,
        product_image: req.body.product_image,
        product_category:req.body.product_category,        
        shop_category: req.body.shop_category,
        rating:req.body.rating,      
        size:req.body.size,
        price:req.body.price,
        quantity:req.body.quantity,        
        brand_name:req.body.brand_name,
        discount:req.body.discount,
        tax:req.body.tax,
        shop_name:req.body.shop_name,
        product_id:req.body.product_id,
        review:req.body.review,
        total:req.body.total,
        order_status:req.body.order_status,
        provider_mobile_number:req.body.provider_mobile_number,
        customer_mobile_number:req.body.customer_mobile_number,
        delivery_address:req.body.delivery_address,
        provider_id:req.body.provider_id,
        payment_option:req.body.payment_option,
        customer_email:req.body.customer_email,
        invoice_number:req.body.invoice_number,
        delivered_on:req.body.delivered_on,
        feedback:req.body.feedback,
        color:req.body.color
    });

    // Save order in the database
    order.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the orders."
        });
    });
};

// Retrieve and return all orders from the database.
exports.findAll = (req, res) => {
    Order.find()
    .then(orders => {
        res.send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving orders."
        });
    });
};

// Find a single order with a orderId
exports.findOne = (req, res) => {
    Order.find({cust_id:req.params.order_id})
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "order not found with id " + req.params.order_id
            });            
        }
        res.send(order);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "order not found with id " + req.params.order_id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving order with id " + req.params.order_id
        });
    });
};
// Update a order identified by the orderId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.product_name) {
        return res.status(400).send({
            message: "product name can not be empty"
        });
    }

    // Find order and update it with the request body
    Order.findOneAndUpdate({order_id:req.params.order_id}, {
        //Id: req.body.Id || "there is no ID for this order!", 
      //  order_id:req.body.order_id;
        cust_id:req.body.cust_id,
        product_name:req.body.product_name,
        product_image: req.body.product_image,
        product_category:req.body.product_category,        
        shop_category: req.body.shop_category,
        rating:req.body.rating,      
        size:req.body.size,
        price:req.body.price,
        quantity:req.body.quantity,        
        brand_name:req.body.brand_name,
        discount:req.body.discount,
        tax:req.body.tax,
        shop_name:req.body.shop_name,
        product_id:req.body.product_id,
        review:req.body.review,
        total:req.body.total,
        order_status:req.body.order_status,
        provider_mobile_number:req.body.provider_mobile_number,
        customer_mobile_number:req.body.customer_mobile_number,
        delivery_address:req.body.delivery_address,
        provider_id:req.body.provider_id,
        payment_option:req.body.payment_option,
        customer_email:req.body.customer_email,
        invoice_number:req.body.invoice_number,
        orderd_on:req.body.orderd_on,
        delivered_on:req.body.delivered_on,
        feedback:req.body.feedback,
        color:req.body.color
            }, {new: true})
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "order not found with id " + req.params.order_id
            });
        }
        res.send(order);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "order not found with id " + req.params.order_id
            });                
        }
        return res.status(500).send({
            message: "Error updating order with id " + req.params.order_id
        });
    });
};

/*{new: true} option in the findByIdAndUpdate() method is used to return the modified document to the then() function instead of the original.
*/

// Delete a order with the specified orderId in the request
exports.delete = (req, res) => {
    Order.findOneAndRemove({cust_id:req.params.order_id})
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "order not found with id " + req.params.order_id
            });
        }
        res.send({message: "order deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "order not found with id " + req.params.order_id
            });                
        }
        return res.status(500).send({
            message: "Could not delete order with id " + req.params.order_id
        });
    });
};
