const mongoose = require('mongoose');

const pagedesignmasterSchema = mongoose.Schema({
	_id			        : mongoose.Schema.Types.ObjectId,
    createdAt           : Date,
    componentName       : String,
    designImage         : String ,
    designName          : String,
    designImageid       : String,
    pageType            : String,
});

module.exports = mongoose.model('pagedesignmaster',pagedesignmasterSchema);
