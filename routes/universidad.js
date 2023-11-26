const { Router } = require('express');

const {

    createUniversidad,
    getUniversidades,
    getUniversidadById,
    updateUniversidadById

} = require('../controllers/universidad');

const router = Router();

//crear universidad
router.post('/', createUniversidad);

//consultar todos
router.get('/', getUniversidades);

//consultar por id
router.get('/:id', getUniversidadById);


//Actualizar id
router.put('/:id', updateUniversidadById);

module.exports = router;