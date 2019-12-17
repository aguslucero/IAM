const express = require('express');
const app = express();

//configuracion
app.set('port', 3000);
// middlewares

//Routes



app.listen(app.get('port'), () => {
    console.log(' server corriendo en puerto 3000');

});
