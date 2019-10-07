const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let categoriaSchema = new Schema({
    descripcion: {
        type: String,
        unique: true,
        required: [true, 'La descripcion de la categoria es requerida']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

categoriaSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe ser valor unico'
})

module.exports = model('Categoria', categoriaSchema);