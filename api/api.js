var express = require("express");
var api     = express.Router();
var adminRouter = require("./v1/admin/admin-router.js");
var vendorRouter = require("./v1/vendor/vendor-router.js")


api.use("/admin",adminRouter);
api.use("/vendor",vendorRouter);


module.exports = api;

