const mongoose = require('mongoose');
const cmspageSchema = mongoose.Schema({
    _id			                : mongoose.Schema.Types.ObjectId,
    createdAt                   : Date,
    componentName               : String,
    pageurl                     : String ,
    designpattern               : String,
    pageimage                   : String,
    pagebackgroundimage         : String,
    pagevideo                   : String,
    pagebackgroundvideo         : String,
        pagehead    :           [
                                    {
                                        pagekeyword           : String,
                                        pagediscription       : String,
                                        pageauthor            : String
                                    }
                                ],
    pagebody                    :[
                                {
                                    pagetitle            : String,
                                    pagediscription      : String,
                                }
                            ],
    blocks             : [
                                {
                                    block_id            : String,
                                    componentName       : String,
                                }
                            ]
});

module.exports = mongoose.model('cmspage',cmspageSchema);
