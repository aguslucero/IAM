const reservaController = {};

reservaController.getReserva = (req , res) => {
    res.json({
        status: 'reservas'
    });
}

module.exports = reservaController;