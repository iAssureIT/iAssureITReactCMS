const express 	= require("express");
const router 	= express.Router();

const CmsblocksController = require('../controllers/cmsblocks');

router.post('/', CmsblocksController.create_cmsblocks);

router.get('/list',CmsblocksController.list_cmsblocks);

router.get('/:cmsblocksID', CmsblocksController.fetch_cmsblocks);

router.patch('/',CmsblocksController.update_cmsblocks);

router.delete('/:cmsblocksID',CmsblocksController.delete_cmsblocks);





module.exports = router;