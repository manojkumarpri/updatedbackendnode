const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ShopSchema = mongoose.Schema({
    //ShopSchema.plugin(AutoIncrement, {inc_field: 'id'});
     Id:Number,
     shopname:String,
	contactno:Number,
    address:String,
	latitude:Number,
	longitude:Number,
	email:String,
	url:String,
	url1:String
}, {
    timestamps: true
});
ShopSchema.plugin(AutoIncrement, {inc_field: 'Id'});

module.exports = mongoose.model('shop', ShopSchema);
