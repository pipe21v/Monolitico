const { Router } = require('express');

const {

    createCliente,
    getClientes,
    getClienteById,
    updateClienteById

} = require('../controllers/cliente');

const router = Router();

//crear
router.post('/', createCliente);

//consultar todos
router.get('/', getClientes);

//consulta equipos por id
router.get('/:id', getClienteById);


//Actualiza un tipos de equipos por id
router.put('/:id', updateClienteById);

module.exports = router;