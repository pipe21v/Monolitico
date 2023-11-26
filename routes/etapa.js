const { Router } = require('express');

const {

    createEtapa,
    getEtapas,
    getEtapaById,
    updateEtapaById

} = require('../controllers/etapa');

const router = Router();

//crear
router.post('/', createEtapa);

//consultar todos
router.get('/', getEtapas);

//consulta equipos por id
router.get('/:id', getEtapaById);


//Actualiza un tipos de equipos por id
router.put('/:id', updateEtapaById);

module.exports = router;