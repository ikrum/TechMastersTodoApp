var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/todoController');

router.get("/v1/todos", ctrl.getTodos);
router.get("/v1/todos/:todoID", ctrl.getSingleTodo);
router.post("/v1/todos", ctrl.addTodo);

module.exports = router;
