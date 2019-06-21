const mongoose	= require("mongoose");

const Pagedesignmaster = require('../models/pagedesignmasters');

exports.create_pagedesignmaster = (req,res,next)=>{
    var componentNameData = req.body.componentName;
	Pagedesignmaster.findOne({componentName:componentNameData})
		.exec()
		.then(data =>{
			if(data){
				return res.status(200).json({
					message: ' Page Design already exists'
				});
			}else{
				const pagedesignmasters = new Pagedesignmaster({
                    _id                 : new mongoose.Types.ObjectId(),
                    componentName       : req.body.componentName,
                    designImage         : req.body.designImage ,
                    designName          : req.body.designName,
                    designImageid       : req.body.designImageid,
                    pageType            : req.body.pageType,
                    createdAt           : new Date()
                });
                pagedesignmasters.save()
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

exports.fetch_pagedesignmasters = (req,res,next)=>{
    Pagedesignmaster.findOne({_id : pagedesignmastersID})
        .select()
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
    var componentNameData = req.params.componentName;
    Pagedesignmaster.findOne({componentName:componentNameData})
        
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


exports.delete_pagedesignmaster = (req,res,next)=>{
    Pagedesignmaster.deleteOne({_id:req.params.pagedesignmastersID})
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
