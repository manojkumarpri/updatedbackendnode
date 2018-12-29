const Provider = require('../model/provider.model.js');

// Create and Save a new provider
exports.create = (req, res) => {
    // Validate request
    if(!req.body.provider_name) {
        return res.status(400).send({
            message: "provider name can not be empty"
        });
    }

    // Create a provider
    const provider= new Provider({
       // Id: req.body.Id || "there is no ID for this product!", 
       

         prodId:req.body.prodId,
        provider_name:req.body.provider_name,
        provider_id:req.body.provider_id,
        provider_address: req.body.provider_address,
        lat:req.body.lat,        
        lon: req.body.lon,
        zoom:req.body.zoom,      
        price:req.body.price,
        tax:req.body.tax,
        today_status:req.body.today_status,
        provider_mobile_number:req.body.provider_mobile_number,
        available:req.body.available,
        
        isActive:req.body.isActive     
            });

    // Save provider in the database
    provider.save()
    .then(data => {
        res.send(data);
        console.log(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the provider."
        });
    });
};

// Retrieve and return all providers from the database.
exports.findAll = (req, res) => {
    console.log("hello manoj");
    Provider.find()
    .then(provider => {
        res.send(provider);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

// Find a single provider with a providerId
exports.findOne = (req, res) => {
    console.log("hello viki");
    var prodId=req.params.prodId;
    Provider.find({})
    .then(provider => {
        if(!provider) {
            return res.status(404).send({
                message: "provider not found with id " + req.params.provider_id
            });            
        }
        provider=(provider.filter(a=>((a.prodId.includes(parseInt(prodId))))));
        var provider1=[];
        var t;
        provider.map(m=>{let a=m;
        console.log(a);
        provider1.push(Object.assign({},a._doc,{indexOf:m.prodId.indexOf(parseInt(prodId))}));
        });
        res.json(provider1);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "provider not found with id " + req.params.provider_id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving provider with id " + req.params.provider_id

        });
    });
};
//Update a provider identified by the providerId in the request
exports.update = (req, res) => {
    // Validate Request
     console.log("helloma")
    if(!req.body.provider_name) {
        return res.status(400).send({
            message: "provider_namecan not be empty"
        });
    }

    // Find provider and update it with the request body
    Provider.findOneAndUpdate({provider_id:req.params.provider_id}, {
        //Id: req.body.Id || "there is no ID for this order!", 
      
       prodId:req.body.prodId,
        provider_name:req.body.provider_name,
        provider_id:req.body.provider_id,
        provider_address: req.body.provider_address,
        lat:req.body.lat,        
        lon: req.body.lon,
        zoom:req.body.zoom,      
        price:req.body.price,
        tax:req.body.tax,
        today_status:req.body.today_status,
        provider_mobile_number:req.body.provider_mobile_number,
        available:req.body.available,
        
        isActive:req.body.isActive    




    }, {new: true})
   .then(provider => {
        if(provider) {
            res.send(provider);
            console.log("success")
        }
        
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

// Delete a provider with the specified prodId in the request
 exports.delete = (req, res) => {
     Provider.findOneAndRemove({prodId:req.params.provider_id})
     .then(provider => {
         if(!provider) {
             return res.status(404).send({
                 message: "provider not found with id " + req.params.provider_id
             });
         }
         res.send({message: "provider deleted successfully!"});
     }).catch(err => {
         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
             return res.status(404).send({
                 message: "provider not found with id " + req.params.provider_id
             });                
         }
         return res.status(500).send({
             message: "Could not delete provider with id " + req.params.prodId
         });
     });
 };
