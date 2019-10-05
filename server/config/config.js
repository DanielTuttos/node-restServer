



//==============================

//Puerto

//==============================

process.env.PORT = process.env.PORT || 5000;





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



