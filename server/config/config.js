



//==============================
//Puerto
//==============================
process.env.PORT = process.env.PORT || 5000;


//==============================
//vencimiento del token
//==============================
process.env.CADUCIDAD_TOKEN = '30d';


//==============================
//Seed de autenticacion
//==============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//==============================
//Entorno
//==============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//==============================
//Base de Datos
//==============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost/cafe';

} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//==============================
//Google Client ID
//==============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '915314993809-ne4ge0951kl8omnb9vmmm1c0oods35e8.apps.googleusercontent.com';
