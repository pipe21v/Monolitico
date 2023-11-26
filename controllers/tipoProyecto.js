const { request, response } = require('express');
const TipoProyecto = require('../models/tipoProyecto');

//crear tipoequipos
const createTipoProyecto = async (
    req = request, res = response
) => {

    try {
        const { nombre } = req.body
        const tipoProyectoBD = await TipoProyecto.findOne({ nombre });
        if (tipoProyectoBD) { 
            return res.status(400).json({ msg: 'Ya existe tipo proyecto' });
        }
        const datos = {
            nombre
        };
        const tipoProyecto = new TipoProyecto(datos);

        await tipoProyecto.save();

        return res.status(201).json(tipoProyecto);
    } catch (e) {
        return res.status(500).json({ msj: e })
    }
}

//consultar todos
const getTiposProyectos = async (req, res = response) => {
    try {
        const tiposProyectosBD = await TipoProyecto.find()
        return res.json(tiposProyectosBD);
    } catch (e) {
        return res.status(500).json({ msj: e })
    }

}


//Consultar  por Id
const getTiposProyectoById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const query = { _id: id };
        const tipoProyecto = await TipoProyecto.findOne(query);
        return res.json(tipoProyecto);
    } catch (e) {
        return res.status(500).json({ msg: e });
    }
}


//Actualiza  por su ID
const updateTipoProyectoById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
        data.fechaActualizacion = new Date()
        const tipoProyecto = await TipoProyecto.findByIdAndUpdate(id, data, { new: true });
        res.status(201).json(tipoProyecto);
    } catch (e) {
        return res.status(500).json({ msg: e });
    }
}

module.exports = {

    createTipoProyecto,
    getTiposProyectos,
    getTiposProyectoById,
    updateTipoProyectoById

};