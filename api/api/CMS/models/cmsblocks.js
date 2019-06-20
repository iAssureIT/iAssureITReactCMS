const mongoose = require('mongoose');

const cmsblocksSchema = mongoose.Schema({
	_id			        : mongoose.Schema.Types.ObjectId,
   
    blocktitle          : String,
    blocksubtitle       : String,
    blockbody           : String ,
    componentName       : String,
    blockimage          : String,
    blocktype           : String,
    blockbackgroundimage : String,
    blockvideo           : String,
    blockbackgroundvideo : String
});

module.exports = mongoose.model('cmsblocks',cmsblocksSchema);
