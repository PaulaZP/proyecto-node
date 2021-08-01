const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller') // Esto es para traer el archivo de controllers

// Se usa para crear un nuevo usuario
router.post('/user', userController.create);

// Se usa para crear un correo y verificar si existe
router.post('/users/:email', userController.logginUser);

//Se uasa para traer todos los usuarios
router.get('/users', userController.getUsers)

//Se usa para traer un usuario especifico
router.get('/user/:id', userController.getUser);

//Se usa para actualizar algun dato del usuario
router.put('/user/:id', userController.updateUser);

//Se usa para borrar un usuario en especifico
router.delete('/user/:id', userController.deleteUser);

//Se usa para exportar los modulos y poder utilizarlo en otro archivo
module.exports = router;