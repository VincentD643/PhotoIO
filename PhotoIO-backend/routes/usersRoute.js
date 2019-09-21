var express = require('express');
var router = express.Router();


var UsersController = require('../controllers/usersController');

router.get('/:id?', UsersController.GetUser);

router.post('/', UsersController.PostUser);

router.put('/:id', UsersController.UpdateUser);

router.delete('/:id', UsersController.DeleteUser);

module.exports = router;
