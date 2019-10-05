const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');



let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} No es un rol válido'
};


let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    },//no es obligatoria
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },//va a tener una propiedad default : 'USER_ROLE'
    estado: {
        type: Boolean,
        default: true
    },//boolean
    google: {
        type: Boolean,
        default: false
    }//boolean
});

usuarioSchema.methods.toJSON = function () {//se llama cuando se quiere imprimir
    let user = this;
    let userObject = user.toObject();

    delete userObject.password;

    return userObject;
}

usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe de ser unico'
});

module.exports = model('Usuario', usuarioSchema);

