const mongoose	= require("mongoose");

const Cmspage = require('../models/cmspages');

exports.create_cmspage = (req,res,next)=>{
    var componentNameData = req.body.componentName;
	Cmspage.findOne({componentName:componentNameData.toLowerCase()})
		.exec()
		.then(data =>{
           
			if(data){
				return res.status(200).json({
					message: ' CMS page already exists'
				});
			}else{
				const role = new Cmspage({
                    _id			                : new mongoose.Types.ObjectId(),
                    createdAt                   : Date,
                    componentName               : req.body.componentName,
                    pageurl                     : req.body.pageurl ,
                    designpattern               : req.body.designpattern,
                    pageimage                   : req.body.pageimage,
                    pagebackgroundimage         : req.body.pagebackgroundimage,
                    pagevideo                   : req.body.pagevideo,
                    pagebackgroundvideo         : req.body.pagebackgroundvideo,
                    
                    pagehead                    :   [
                                                        {
                                                            pagekeyword           : req.body.pagekeyword,
                                                            pagediscription       : req.body.pagediscription,
                                                            pageauthor            : req.body.pageauthor
                                                        }
                                                    ],
                    pagebody                    :   [
                                                        {
                                                            pagetitle            : req.body.pagetitle,
                                                            pagediscription      : req.body.pagediscription
                                                        }
                                                    ],
                    blocks                      :   [
                                                        {
                                                            block_id            : req.body. block_id,
                                                            componentName       : req.body.componentName,
                                                        }
                                                    ]
                });
                role.save()
                    .then(data=>{
                        console.log('data ',data);
                        res.status(200).json("CMS Page Added");
                    })
                    .catch(err =>{
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
			}
		})
		.catch(err =>{
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
};

exports.detail_Cmspage = (req,res,next)=>{
    Companysettings.findOne({companyId:req.params.companyId})
        .exec()
        .then(data=>{
            if(data){
                res.status(200).json(data);
            }else{
                res.status(404).json('Company Details not found');
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.list_Cmspage = (req,res,next)=>{
    console.log('list');
    Cmspage.find({})
        .exec()
        .then(data=>{
            if(data){
                res.status(200).json(data);
            }else{
                res.status(404).json('CMS page not found');
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.update_cmspage = (req,res,next)=>{
    var info = req.params.info;
    var action = req.params.action;
    switch(action){
        case 'add' :
            switch(info){
                case 'pagehead':
                Cmspage.updateOne(
                        { _id : req.body.cmspageID},  
                        {
                            $push:{
                                pagehead    :               [
                                    {
                                        pagekeyword           : req.body.pagekeyword,
                                        pagediscription       : req.body.pagediscription,
                                        pageauthor            : req.body.pageauthor,
                                    }
                                ],
                            }
                        }
                    )
                    .exec()
                    .then(data=>{
                        if(data.nModified == 1){
                            res.status(200).json("Page head added");
                        }else{
                            res.status(401).json("Page head Not found");
                        }
                    })
                    .catch(err =>{
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });  
                    break;              
                case 'pagebody' :
                Cmspage.updateOne(
                    { _id : req.body.cmspageID},  
                        {
                            $push:{
                                pagebody : {
                                    pagekeyword           : req.body.pagekeyword,
                                    pagediscription       : req.body.pagediscription,
                                    pageauthor            : req.body.pageauthor
                                }
                            }
                        }
                    )
                    .exec()
                    .then(data=>{
                        console.log('data ',data);
                        if(data.nModified == 1){
                            res.status(200).json("Page body  added");
                        }else{
                            res.status(401).json("Page body  Not found");
                        }
                    })
                    .catch(err =>{
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });  
                    break;
                case 'blocks' :
                Cmspage.updateOne(
                        { _id : req.body.cmspageID},  
                        {
                            $push:{
                                blocks : {
                                    block_id            : req.body. block_id,
                                    componentName       : req.body.componentName,
                                }
                            }
                        }
                    )
                    .exec()
                    .then(data=>{
                        console.log('data ',data);
                        if(data.nModified == 1){
                            res.status(200).json("Blocks added");
                        }else{
                            res.status(401).json("Blocks Not found");
                        }
                    })
                    .catch(err =>{
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });  
                    break;
                default :
                    res.status(404).json('This Information is not captured yet.')
            };
            break;
        case 'remove' :
            switch(info){
                case 'pagehead':
                    console.log('pagehead remove ',req.body);
                    Cmspage.updateOne(
                                        { _id : req.body.cmspageID},  
                                        {
                                            $pull:{
                                                pagehead : {
                                                    // _id        : req.body.locationID,
                                                     _id : req.body.pageheadID,  
                                                }
                                            }
                                        }
                                    )
                                    .exec()
                                    .then(data=>{
                                        if(data.nModified == 1){
                                            res.status(200).json("Page head removed");
                                        }else{
                                            res.status(401).json("Page head Not found");
                                        }
                                    })
                                    .catch(err =>{
                                        console.log(err);
                                        res.status(500).json({
                                            error: err
                                        });
                                    });  
                    break;
                case 'pagebody' :
                    console.log('pagebody remove ',req.body);
                    Cmspage.updateOne(
                                        { _id : req.body.cmspageID},  
                                        {
                                            $pull:{
                                                pagebody : {
                                                    _id : req.body.pagebodyID,
                                                }
                                            }
                                        }
                                    )
                                    .exec()
                                    .then(data=>{
                                        if(data.nModified == 1){
                                            res.status(200).json("Company Tax Settings removed");
                                        }else{
                                            res.status(401).json("Company Not found");
                                        }
                                    })
                                    .catch(err =>{
                                        console.log(err);
                                        res.status(500).json({
                                            error: err
                                        });
                                    });  
                    break;
                case 'blocks' :
                    console.log('blocks remove ',req.body);
                    Cmspage.updateOne(
                                        { _id : req.body.cmspageID},  
                                        {
                                            $pull:{
                                                blocks : {
                                                    _id : req.body.blocksID,
                                                }
                                            }
                                        }
                                    )
                                    .exec()
                                    .then(data=>{
                                        if(data.nModified == 1){
                                            res.status(200).json("Blocks Details removed");
                                        }else{
                                            res.status(401).json("Blocks Not found");
                                        }
                                    })
                                    .catch(err =>{
                                        console.log(err);
                                        res.status(500).json({
                                            error: err
                                        });
                                    });  
                    break;
                default :
                    res.status(404).json('This Information is not captured yet.')
            };
            break;
        case 'edit' :
            switch(info){
                case 'pagehead':
                    console.log('pagehead edit ',req.body);
                    Cmspage.updateOne(
                                        { "cmspageID" : req.body.cmspageID, "pagehead._id":req.body.pageheadID},  
                                        {
                                            $set:{
                                                "pagehead.$.pagekeyword"           : req.body.pagekeyword,
                                                "pagehead.$.pagediscription"       : req.body.pagediscription,
                                                "pagehead.$.pageauthor"            : req.body.pageauthor,
                                            }
                                        }
                                    )
                                    .exec()
                                    .then(data=>{
                                        if(data.nModified == 1){
                                            res.status(200).json("Page head updated");
                                        }else{
                                            res.status(401).json("Page head Not found");
                                        }
                                    })
                                    .catch(err =>{
                                        console.log(err);
                                        res.status(500).json({
                                            error: err
                                        });
                                    });  
                    break;
                case 'pagebody' :
                    console.log('pagebody edit ',req.body);
                    Cmspage.updateOne(
                                        { "cmspageID" : req.body.cmspageID, "pagebody._id":req.body.pagebodyID},  
                                        {
                                            $set:{
                                                "pagebody.$.pagekeyword"           : req.body.pagekeyword,
                                                "pagebody.$.pagediscription"       : req.body.pagediscription,
                                                "pagebody.$.pageauthor"            : req.body.pageauthor
                                            }
                                        }
                                    )
                                    .exec()
                                    .then(data=>{
                                        if(data.nModified == 1){
                                            res.status(200).json("Page body  updated");
                                        }else{
                                            res.status(401).json("Page body Not found");
                                        }
                                    })
                                    .catch(err =>{
                                        console.log(err);
                                        res.status(500).json({
                                            error: err
                                        });
                                    });  
                    break;
                case 'blocks' :
                    console.log('blocks edit ',req.body);
                    Cmspage.updateOne(
                                        { "cmspageID" : req.body.cmspageID, "blocksdetails._id":req.body.blocksID},  
                                        {
                                            $set:{
                                                "blocksdetails.$.block_id"            : req.body. block_id,
                                                "blocksdetails.$.componentName"       : req.body.componentName
                                            }
                                        }
                                    )
                                    .exec()
                                    .then(data=>{
                                        if(data.nModified == 1){
                                            res.status(200).json("Company Bank Details updated");
                                        }else{
                                            res.status(401).json("Company Not found");
                                        }
                                    })
                                    .catch(err =>{
                                        console.log(err);
                                        res.status(500).json({
                                            error: err
                                        });
                                    });  
                    break;
                default :
                    res.status(404).json('This Information is not captured yet.')
            };
        break;
        default :
            res.status(404).json('Action Not found');
            break;
    }
}

exports.delete_cmspage = (req,res,next)=>{
    Cmspage.deleteOne({_id : req.body.cmspageID})
        .exec()
        .then(data=>{
            res.status(200).json("Cms page deleted");
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}
