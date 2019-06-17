const express 	= require("express");
const router 	= express.Router();

const CmspageController = require('../controllers/cmspage');

router.post('/', CmspageController.create_cmspage);

router.get('/list',CmspageController.list_Cmspage);

// router.get('/:Pagedesignmasters', CmspageController.detail_Pagedesignmasters);

// router.put('/',CmspageController.update_Pagedesignmasters);
router.patch('/:info/:action', CmspageController.update_cmspage);


router.delete('/:cmspageID',CmspageController.delete_cmspage);





module.exports = router;



