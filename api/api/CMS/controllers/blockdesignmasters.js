const mongoose	= require("mongoose");

const Blockdesignmasters = require('../models/blockdesingmasters');

exports.create_blockdesingmasters = (req,res,next)=>{
    var blockdesingmastersData = req.body.componentName;
    console.log('blockdesingmastersData ',req.body);
	Blockdesignmasters.findOne({componentName:blockdesingmastersData})
		.exec()
		.then(data =>{
			if(data){
				return res.status(200).json({
					message: ' block design masters already exists'
				});
			}else{
				const role = new Blockdesignmasters({
                    _id                 : new mongoose.Types.ObjectId(),
                    componentName       : req.body.componentName,
                    designImage         : req.body.designImage,
                    designName          : req.body.designName,
                    designImageid       : req.body.designImageid,
                    blocktype           : req.body.blocktype,
                    createdAt           : new Date()
                });
                console.log('role ',role);
                role.save()
                    .then(data=>{
                        res.status(200).json("block design masters Added");
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



exports.delete_blockdesignmasters = (req,res,next)=>{
    Blockdesignmasters.deleteOne({_id:req.params.roleID})
        .exec()
        .then(data=>{
            res.status(200).json("Block design masters deleted");
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}
