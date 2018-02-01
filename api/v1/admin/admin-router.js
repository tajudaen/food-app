var express = require("express");
var router  = express.Router();
var controller = require("./admin-controller.js");

router.route("/")
    .post(controller.addAdmin)

module.exports = router;
