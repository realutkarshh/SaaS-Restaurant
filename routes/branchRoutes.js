const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branchController');

router.post('/', branchController.createBranch);
router.get('/', branchController.getAllBranches);
router.get('/:id', branchController.getBranch);
router.put('/:id', branchController.updateBranch);
router.delete('/:id', branchController.deleteBranch);

module.exports = router;
