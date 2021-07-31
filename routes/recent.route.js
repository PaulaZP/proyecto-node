const express = require('express');
const router = express.Router();
const recentController = require('../controllers/recent.controller'); // Esto es para traer el archivo de controllers

//Se actualiza a la ultima cancion de reciente
router.put('/recent/:id', recentController.upsert);

//Se trae la ultima cancion de reciente
router.get('/recent/:id', recentController.getRecent);

//se utiliza para exportar los modulos y poder utilizarlo en otro archivo
module.exports = router;