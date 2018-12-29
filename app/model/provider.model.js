const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const providerSchema = mongoose.Schema({
    //ShopSchema.plugin(AutoIncrement, {inc_field: 'id'});
    prodId:Array,
    provider_name:String,
    provider_id:Number,
    provider_address: String,
    lat:Number,
    lon:Number,
    zoom:Number,
    price:Array, 
    tax:Number,
     today_status:Boolean,
     provider_mobile_number:Number,
     available:Array,
     isActive:Boolean
});
providerSchema.plugin(AutoIncrement, {inc_field: 'provider_id'});
module.exports = mongoose.model('provider', providerSchema);