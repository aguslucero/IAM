const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./databese');

//configuracion
app.set('port', 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use( require('./routes/reservas.routes'));



app.listen(app.get('port'), () => {
    console.log(' server corriendo en puerto', app.get('port'));

});
