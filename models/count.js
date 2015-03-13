var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var countSchema = new Schema({
	key: ObjectId,
	page: {type: String, default: ''},
	count: {type: Number}
});

module.exports = mongoose.model('Count', countSchema);