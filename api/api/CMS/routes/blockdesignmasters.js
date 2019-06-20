const express 	= require("express");
const router 	= express.Router();

const BlockdesignmastersController = require('../controllers/blockdesignmasters');

router.post('/', BlockdesignmastersController.create_blockdesingmasters);

router.get('/list',BlockdesignmastersController.list_blockdesingmasters);

// router.get('/:Pagedesignmasters', BlockdesignmastersController.detail_Pagedesignmasters);

// router.put('/',BlockdesignmastersController.update_Pagedesignmasters);

router.delete('/:blockdesignmastersID',BlockdesignmastersController.delete_blockdesignmasters);





module.exports = router;