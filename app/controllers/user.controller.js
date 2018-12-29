const User = require('../model/user.model.js');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "customer name can not be empty"
        });
    }

    // Create a User
    const user= new User({
       // Id: req.body.Id || "there is no ID for this product!", 
        uid:req.body.uid,
     name:req.body.name,
     password:req.body.password,
     email:req.body.email,
     phno:req.body.phno,
     address:req.body.address,
     securityquestion:req.body.securityquestion,
     securityanswer:req.body.securityanswer
    });

    // Save user in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the users."
        });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

// Find a single order with a orderId
exports.findOne = (req, res) => {
    User.findOne({uid:req.params.userId})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
};
// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "user name can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findOneAndUpdate({uid:req.params.userId}, {
        //Id: req.body.Id || "there is no ID for this order!", 
       uid:req.body.uid,
     name:req.body.name,
     password:req.body.password,
     email:req.body.email,
     phno:req.body.phno,
     address:req.body.address,
     securityquestion:req.body.securityquestion,
     securityanswer:req.body.securityanswer    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        });
    });
};

/*{new: true} option in the findByIdAndUpdate() method is used to return the modified document to the then() function instead of the original.
*/

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findOneAndRemove({uid:req.params.userId})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });
        }
        res.send({message: "user deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
};
