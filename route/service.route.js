const express = require('express');
const router = express.Router();

const {
    createService,
    getAllServicesShort,
    getServiceLong,
    editService,
    deleteService
} = require('../controllers/services.controller');

router
    .route('/service')
    .post(createService);
    
router.route('/sd').get(getAllServicesShort);
router.route('/sld/:id').get(getServiceLong);
router.route('/service/:id').put(editService).delete(deleteService);



module.exports = router;