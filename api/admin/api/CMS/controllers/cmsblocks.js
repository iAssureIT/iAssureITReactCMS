const mongoose	= require("mongoose");

const Cmsblocks = require('../models/cmsblocks');

exports.create_cmsblocks = (req,res,next)=>{
    var componentNameData = req.body.componentName;
	Cmsblocks.findOne({componentName:componentNameData.toLowerCase()})
		.exec()
		.then(data =>{
			if(data){
				return res.status(200).json({
					message: ' Role already exists'
				});
			}else{
				const role = new Cmsblocks({
                    _id                 : new mongoose.Types.ObjectId(),
                  
                    blocktitle          : req.body.blocktitle,
                    blocksubtitle       : req.body.blocksubtitle,
                    blockbody           : req.body.blockbody ,
                    componentName       : req.body.componentName,
                    blockimage          : req.body.blockimage,
                    blocktype           : req.body.blocktype,
                    blockbackgroundimage : req.body.blockbackgroundimage,
                    blockvideo           : req.body.blockvideo,
                    blockbackgroundvideo : req.body.blockbackgroundvideo,
                    createdAt           : new Date()
                });
                role.save()
                    .then(data=>{
                        console.log('data ',data);
                        res.status(200).json("Cmsblocks Added");
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

exports.list_cmsblocks = (req,res,next)=>{
    Cmsblocks.find()
        .exec()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.detail_cmsblocks = (req,res,next)=>{
    var roleData = req.params.role;
    Cmsblocks.findOne({role:roleData.toLowerCase()})
        
        .exec()
        .then(data=>{
            if(data){
                res.status(200).json(data);
            }else{
                res.status(404).json('Pagedesignmaster not found');
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.update_cmsblocks = (req,res,next)=>{
    var roleData = req.body.role;
    Cmsblocks.updateOne(
            { _id:req.body.id},  
            {
                $set:{
                    "role" : roleData.toLowerCase()
                }
            }
        )
        .exec()
        .then(data=>{
            console.log('data ',data);
            if(data){
                res.status(200).json("Pagedesignmaster Updated");
            }else{
                res.status(401).json("Pagedesignmaster Not Found");
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.delete_cmsblocks = (req,res,next)=>{
    Cmsblocks.deleteOne({_id:req.params.roleID})
        .exec()
        .then(data=>{
            res.status(200).json("Cmsblocks deleted");
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}
