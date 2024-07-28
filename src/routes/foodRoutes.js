const express = require('express');

const {
    createFood,
    getFoods,
    getFoodById,
    updateFood,
    deleteFood
}  = require('../controllers/foodController');
const { authorize } = require('../utils/authentication');


const router = express.Router();

router.post('/',authorize(['admin', 'superadmin']), createFood);
router.get('/',authorize(['admin', 'superadmin']), getFoods);
router.get('/:id', getFoodById);
router.put('/:id', authorize(['admin', 'superadmin']), updateFood);
router.delete('/:id',authorize(['admin', 'superadmin']), deleteFood);

module.exports = router;