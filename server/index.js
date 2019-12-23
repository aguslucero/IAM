const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./databese');
const multer = require('multer');
const path = require('path');

//configuracion
app.set('port', 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(multer({dest: path.join(__dirname, 'public/Img')}).single('image'));

//Routes
app.use( require('./routes/reservas.routes'));
app.use(require('./routes/galeria.routes'));

//front

app.use(express.static(path.join(__dirname, '../front/dist/front')));

app.get('/', (req, res) => {
    res.send('invalid page');
})

app.listen(app.get('port'), () => {
    console.log(' server corriendo en puerto', app.get('port'));

});
