const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const UserSchema = mongoose.Schema({
    
     uid:Number,
	 name:String,
	 password:String,
	 email:String,
	 phno:Number,
	 address:String,
	 securityquestion:String,
	 securityanswer:String


}, {
    timestamps: true
});

UserSchema.plugin(AutoIncrement, {inc_field: 'uid'});
module.exports = mongoose.model('user', UserSchema);