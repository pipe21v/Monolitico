const { request, response } = require('express');
const Universidad = require('../models/universidad');

//crear universidad
const createUniversidad = async (
    req = request, res = response
) => {

    try {
        const { nombre, direccion, telefono } = req.body
        const universidadBD = await Universidad.findOne({ nombre, direccion, telefono });
        if (universidadBD) {
            return res.status(400).json({ msg: 'Ya existe universidad' });
        }
        const datos = {
            nombre,
            direccion,
            telefono
        };
        const universidad = new Universidad(datos);

        await universidad.save();

        return res.status(201).json(universidad);
    } catch (e) {
        return res.status(500).json({ msj: e })
    }
}

//consultar todos
const getUniversidades = async (req, res = response) => {
    try {
        const universidadBD = await Universidad.find()
        return res.json(universidadBD);
    } catch (e) {
        return res.status(500).json({ msj: e })
    }

}


//Consultar  por Id
const getUniversidadById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const query = { _id: id };
        const universidad = await Universidad.findOne(query);
        return res.json(universidad);
    } catch (e) {
        return res.status(500).json({ msg: e });
    }
}


//Actualiza  por su ID
const updateUniversidadById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        data.fechaActualizacion = new Date()
        const universidad = await Universidad.findByIdAndUpdate(id, data, { new: true });
        res.status(201).json(universidad);
    } catch (e) {
        return res.status(500).json({ msg: e });
    }

}

module.exports = {

    createUniversidad,
    getUniversidades,
    getUniversidadById,
    updateUniversidadById

};