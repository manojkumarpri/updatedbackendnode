const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const itemSchema = mongoose.Schema({
    //ShopSchema.plugin(AutoIncrement, {inc_field: 'id'});
    prodId:Number,
    item_id:Number,
    provider_id:Number,
    price:Array, 
    size:String,
    available:Array,
    color:Array
});
itemSchema.plugin(AutoIncrement, {inc_field: 'item_id'});
module.exports = mongoose.model('item', itemSchema);
