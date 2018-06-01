var express = require('express');
var router = express.Router();
var todoRoute = require('./todoRoute');
var userRoute = require('./userRoute');

/*   api/v1/todos    */
router.use("/v1/todos", todoRoute);

/*   api/v1/users    */
router.use("/v1/users", userRoute);

module.exports = router;
