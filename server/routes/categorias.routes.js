






const express = require('express');

let { verificaToken, verificaAdmin_Role } = require('../middlewares/autentiacion');

const _ = require('underscore');

let app = express();

let Categoria = require('../models/categoria.model');


//mostrar todas las categorias
app.get('/categoria', verificaToken, (req, res) => {

    Categoria.find({})
    .sort('descripcion')
    .populate('usuario', 'nombre email')
    .exec((err, categorias) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        Categoria.countDocuments((err, contados) => {
            res.json({
                ok: true,
                conteo: contados,
                categorias
            });
        });
    });
});

//mostrar una categoria por ID
app.get('/categoria/:id', verificaToken, (req, res) => {
    let id = req.params.id;
    Categoria.findById(id, (err, categoriaSola) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: { message: 'Categoria no encontrada' }
            });
        }
        if (!categoriaSola) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            categoria: categoriaSola
        });
    });
});

//Crear nueva categoria
app.post('/categoria', verificaToken, (req, res) => {
    //regresa nueva categoria
    //req.usuario._id
    let body = req.body;

    let categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: req.usuario._id
    });

    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            categoria: categoriaDB
        });

    });
});

//Actualiza una categoria
app.put('/categoria/:id', verificaToken, (req, res) => {

    let id = req.params.id;
    let body = _.pick(req.body, ['descripcion']);

    Categoria.findByIdAndUpdate(id, body, { new: true }, (err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });

});

//borrar una categoria
app.delete('/categoria/:id', [verificaToken, verificaAdmin_Role], (req, res) => {
    //solo un administrador puede borrar

    let id = req.params.id;

    Categoria.findByIdAndDelete(id, (err, categoriaBorrada) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        if (!categoriaBorrada) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            categoria: categoriaBorrada
        });
    });
});


module.exports = app;