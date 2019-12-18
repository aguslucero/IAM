const router = require('express').Router()
const reservaController = require('../controllers/reserva.controller');

router.get('/reservas', reservaController.getReserva);


module.exports = router;