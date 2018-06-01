var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/userController');

/*  POST api/v1/users    */
router.post("/", ctrl.addUser);

/*  GET api/v1/users    */
router.get("/", ctrl.getUsers);

/*  GET api/v1/users/232454353    */
router.get("/:firstName", ctrl.getSingleUser);

module.exports = router;
