const express = require('express');

const {
    createUser,
    login,
}  = require('../controllers/userController');


const router = express.Router();

router.post('/', createUser);
router.get('/login', login);

module.exports = router;