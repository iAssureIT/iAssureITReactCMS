const mongoose = require('mongoose');

const blockdesignmasterSchema = mongoose.Schema({
	_id			        : mongoose.Schema.Types.ObjectId,
    createdAt           : Date,
    componentName       : String,
    designImage         : String ,
    designName          : String,
    designImageid       : String,
    pageType            : String,
});

module.exports = mongoose.model('blockdesignmaster',blockdesignmasterSchema);


