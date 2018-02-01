var express = require("express");
var router  = express.Router();
var controller  = require("./vendor-controller.js");

router.route("/")
    .post(controller.addVendor)
    .get(controller.getVendors)

module.exports = router;
