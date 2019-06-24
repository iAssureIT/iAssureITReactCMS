const express 	= require("express");
const router 	= express.Router();

const PagedesignmastersController = require('../controllers/pagedesignmasters');

router.post('/', PagedesignmastersController.create_pagedesignmaster);

router.get('/list',PagedesignmastersController.list_pagedesignmasters);

router.get('/:pagedesignmastersID', PagedesignmastersController.fetch_pagedesignmasters);

// router.put('/',PagedesignmastersController.update_Pagedesignmasters);

router.delete('/:pagedesignmastersID',PagedesignmastersController.delete_pagedesignmaster);





module.exports = router;

