const { request, response } = require('express');
const Cliente = require('../models/cliente');

//crear clientes
const createCliente = async (
    req = request, res = response
) => {

    try {
        const { nombre, email } = req.body
        const clienteBD = await Cliente.findOne({ nombre, email });
        if (clienteBD) {
            return res.status(400).json({ msg: 'Ya existe cliente' });
        }
        const datos = {
            nombre,
            email
        };
        const cliente = new Cliente(datos);

        await cliente.save();

        return res.status(201).json(cliente);
    } catch (e) {
        return res.status(500).json({ msj: e })
    }
}

//consultar todos
const getClientes = async (req, res = response) => {
    try {
        const clienteBD = await Cliente.find()
        return res.json(clienteBD);
    } catch (e) {
        return res.status(500).json({ msj: e })
    }

}


//Consultar  por Id
const getClienteById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findById(id);

        if (!cliente) {
            return res.status(404).json({ msg: 'Cliente no encontrado' });
        }

        return res.json(cliente);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
};


//Actualiza  por su ID
const updateClienteById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        data.fechaActualizacion = new Date();

        const cliente = await Cliente.findByIdAndUpdate(id, data, { new: true });

        if (!cliente) {
            return res.status(404).json({ msg: 'Cliente no encontrado' });
        }

        res.json(cliente);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
};

module.exports = {

    createCliente,
    getClientes,
    getClienteById,
    updateClienteById

};