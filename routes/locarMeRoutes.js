var express = require('express');
var router = express.Router();

var locarMeController = require('../controllers/locarMeController');

// router.get('/locarme', (req, res) => res.render('pages/locarme'))

router.get('/driver/cadastro' , locarMeController.driverCadastro);
router.get('/driver/alugue' , locarMeController.driverAlugue);
router.get('/carowner/cadastro' , locarMeController.CarOwnerCadastro);
router.post('/driver/createmethod', locarMeController.driver_createMethod_post);
router.post('/carowner/createmethod', locarMeController.carowner_createMethod_post);
router.put('/locarme/:id',   locarMeController.driver_update_post);
router.delete('/locarme/:id',  locarMeController.driver_delete_post);

module.exports = router;

