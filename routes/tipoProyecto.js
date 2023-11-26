const { Router } = require('express');

const {

    createTipoProyecto,
    getTiposProyectos,
    getTiposProyectoById,
    updateTipoProyectoById

} = require('../controllers/tipoProyecto');

const router = Router();

//crear tipoProyectos
router.post('/', createTipoProyecto);
//router.get('/user-activo', getTiposEquipoUserActivo);

//consultar todos
router.get('/', getTiposProyectos);

//consultar por id
router.get('/:id', getTiposProyectoById);

//Actualizar por id
router.put('/:id', updateTipoProyectoById);

module.exports = router;