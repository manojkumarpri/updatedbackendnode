const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const OrderSchema = mongoose.Schema({
        order_id:Number,
        cust_id:Number,
        product_name:String,
		product_image: String,
		product_category:String,		
		shop_category: String,
	    rating:Number,		
		size:String,
	    price:Number,
		quantity:Number,		
	    brand_name:String,
		discount:Number,
		tax:Number,
		shop_name:String,
		product_id:Number,
		review:String,
		total:Number,
		order_status:String,
		provider_mobile_number:Number,
		customer_mobile_number:Number,
		delivery_address:String,
		provider_id:Number,
		payment_option:String,
		customer_email:String,
		invoice_number:String,
		feedback:String,
		delivered_on:String,
		color:String


}, {
    timestamps: true
});

OrderSchema.plugin(AutoIncrement, {inc_field: 'order_id'});
module.exports = mongoose.model('order', OrderSchema);