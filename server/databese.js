const mongoose = require('mongoose');

const URI = 'mongodb://localhost/IAM'

mongoose.connect(URI)
 .then(db => console.log('base de datos conectada'))
 .catch(err => console.log(err));

module.exports = mongoose;
