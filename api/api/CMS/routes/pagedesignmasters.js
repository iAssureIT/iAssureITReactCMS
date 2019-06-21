const express 	= require("express");
const router 	= express.Router();

const PagedesignmastersController = require('../controllers/pagedesignmasters');

router.post('/', PagedesignmastersController.create_pagedesignmaster);

router.get('/list',PagedesignmastersController.list_pagedesignmasters);

// router.get('/:Pagedesignmasters', PagedesignmastersController.detail_Pagedesignmasters);

// router.put('/',PagedesignmastersController.update_Pagedesignmasters);

router.delete('/:PagedesignmastersID',PagedesignmastersController.delete_pagedesignmaster);





module.exports = router;

