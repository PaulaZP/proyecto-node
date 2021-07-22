const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

router.post('/user', userController.create);
router.get('/users', userController.getUsers)

//traer un solo usuario
router.get('/user/:id', userController.getUser);

//actualizar datos
router.put('/user/:id', userController.updateUser);


module.exports = router;