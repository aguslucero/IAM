const mongoose = require ('moongose');
const {schema} = mongoose;

const reservaSchema = new Schema({
    nombre: { type: String, require: true},
    personas:{type: Number}
})

module.exports = mongoose.model('reserva', reservaSchema);