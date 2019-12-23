const { Router } = require ('express');
const router = Router();

router.get('/galeria', (req, res) => {
    console.log('entra');
});

module.exports = router;