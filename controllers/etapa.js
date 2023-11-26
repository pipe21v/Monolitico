const { request, response } = require('express');
const Etapa = require('../models/etapa');

//crear etapa
const createEtapa = async (
    req = request, res = response
) => {

    try {
        const { nombre } = req.body
        const etapaBD = await Etapa.findOne({ nombre });
        if (etapaBD) {
            return res.status(400).json({ msg: 'Ya existe etapa' });
        }
        const datos = {
            nombre
        };
        const etapa = new Etapa(datos);

        await etapa.save();

        return res.status(201).json(etapa);
    } catch (e) {
        return res.status(500).json({ msj: e })
    }
}

//consultar todos
const getEtapas = async (req, res = response) => {
    try {
        const etapaBD = await Etapa.find()
        return res.json(etapaBD);
    } catch (e) {
        return res.status(500).json({ msj: e })
    }

}


//Consultar  por Id
const getEtapaById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const query = { _id: id };
        const etapa = await Etapa.findOne(query);
        return res.json(etapa);
    } catch (e) {
        return res.status(500).json({ msg: e });
    }
}


//Actualiza  por su ID
const updateEtapaById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        data.fechaActualizacion = new Date()
        const etapa = await Etapa.findByIdAndUpdate(id, data, { new: true });
        res.status(201).json(etapa);
    } catch (e) {
        return res.status(500).json({ msg: e });
    }

}

module.exports = {

    createEtapa,
    getEtapas,
    getEtapaById,
    updateEtapaById

};