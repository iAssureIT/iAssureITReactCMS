const mongoose	= require("mongoose");

const Pagedesignmaster = require('../models/pagedesignmasters');

exports.create_pagedesignmaster = (req,res,next)=>{
    var componentNameData = req.body.componentName;
	Pagedesignmaster.findOne({componentName:componentNameData.toLowerCase()})
		.exec()
		.then(data =>{
			if(data){
				return res.status(200).json({
					message: ' Role already exists'
				});
			}else{
				const role = new Pagedesignmaster({
                    _id                 : new mongoose.Types.ObjectId(),
                    componentName       : req.body.componentName,
                    designImage         : req.body.designImage ,
                    designName          : req.body.designName,
                    designImageid       : req.body.designImageid,
                    pageType            : req.body.pageType,
                    createdAt           : new Date()
                });
                role.save()
                    .then(data=>{
                        console.log('data ',data);
                        res.status(200).json("Page Design Masters Added");
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

exports.list_pagedesignmasters = (req,res,next)=>{
    Pagedesignmaster.find()
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

exports.detail_pagedesignmaster = (req,res,next)=>{
    var roleData = req.params.role;
    Pagedesignmaster.findOne({role:roleData.toLowerCase()})
        
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

exports.update_pagedesignmaster = (req,res,next)=>{
    var roleData = req.body.role;
    Pagedesignmaster.updateOne(
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

exports.delete_pagedesignmaster = (req,res,next)=>{
    Pagedesignmaster.deleteOne({_id:req.params.roleID})
        .exec()
        .then(data=>{
            res.status(200).json("Pagedesignmaster deleted");
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}
