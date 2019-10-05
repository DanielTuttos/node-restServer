



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
    urlDB = 'mongodb+srv://base-cafe:axxULmMYYipXhNIQ@cluster0-exovf.mongodb.net/cafe?retryWrites=true&w=majority'
}

process.env.URLDB = urlDB;



