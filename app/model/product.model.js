const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const ProductSchema = mongoose.Schema({
    Id1:Number,
    name: String,
    img :String,
    img1:String,
    img2:String,
    img3:String,
    prodCategory:String,
	shopCategory:String,
    rating:Number,
    shortDesc:String,
	longDesc:String,
	size:String,
    price:Number,
    sku:String,
	BrandName:String,
	discount:Number,
	tax:Number,
	shopName:String,
    prodId:Number,
	review:String,
    total:Number,
    available:Number,
    color:Array


}, {
    timestamps: true
});

ProductSchema.plugin(AutoIncrement, {inc_field: 'Id1'});
ProductSchema.plugin(AutoIncrement, {inc_field: 'prodId'});
module.exports = mongoose.model('product', ProductSchema);
