const express 	= require("express");
const router 	= express.Router();

const CmsblocksController = require('../controllers/cmsblocks');

router.post('/', CmsblocksController.create_cmsblocks);

router.get('/list',CmsblocksController.list_cmsblocks);

// router.get('/:Cmsblocks', CmsblocksController.detail_Cmsblocks);

// router.put('/',CmsblocksController.update_Cmsblocks);

router.delete('/:CmsblocksID',CmsblocksController.delete_cmsblocks);





module.exports = router;