const mongoose = require('mongoose');

const blockdesignmastersSchema = mongoose.Schema({
	_id			        : mongoose.Schema.Types.ObjectId,
    createdAt           : Date,
    componentName       : String,
    designImage         : String,
    designName          : String,
    designImageid       : String,
    blocktype           : String
});

module.exports = mongoose.model('blockdesignmasters',blockdesignmastersSchema);
