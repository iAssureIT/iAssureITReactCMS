const mongoose	= require("mongoose");

const Blockdesignmasters = require('../models/blockdesingmasters');

exports.create_blockdesingmasters = (req,res,next)=>{
    var blockdesingmastersData = req.body.componentName;
	Blockdesignmasters.findOne({componentName:blockdesingmastersData.toLowerCase()})
		.exec()
		.then(data =>{
			if(data){
				return res.status(200).json({
					message: ' blockdesingmasters already exists'
				});
			}else{
				const role = new Blockdesignmasters({
                    _id         : new mongoose.Types.ObjectId(),
                   
                    componentName       : req.body.componentName,
                    designImage         : req.body.designImage ,
                    designName          : req.body.designName,
                    designImageid       : req.body.designImageid,
                    blocktype           : req.body.blocktype,
                    createdAt           : new Date()
                });
                role.save()
                    .then(data=>{
                        res.status(200).json("blockdesingmasters Added");
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

exports.list_blockdesingmasters = (req,res,next)=>{
    Blockdesignmasters.find()
       
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

exports.detail_blockdesingmasters = (req,res,next)=>{
    var roleData = req.params.role;
    Blockdesignmasters.findOne({role:roleData.toLowerCase()})
       
        .exec()
        .then(data=>{
            if(data){
                res.status(200).json(data);
            }else{
                res.status(404).json('Role not found');
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.update_blockdesingmasters = (req,res,next)=>{
    var roleData = req.body.role;
    Blockdesignmasters.updateOne(
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
                res.status(200).json("Role Updated");
            }else{
                res.status(401).json("Role Not Found");
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.delete_blockdesignmasters = (req,res,next)=>{
    Blockdesignmasters.deleteOne({_id:req.params.roleID})
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
