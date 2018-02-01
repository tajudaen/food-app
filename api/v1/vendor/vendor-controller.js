var vendorModel = require("./vendor-model.js");

exports.addVendor = function (req, res, next) {
    var merchant = req.body;

    var vendor = new vendorModel(merchant)
    vendor.save(function (err,data) {
        if (err) {
            return next(new Error("cannot add vendor"))
        }

        res.status(200).json(data)
    })
}

exports.getVendors = function (req,res,next) {
    vendorModel.find(function(err,data) {
        if (err) {
            return next(new Error("cannot get vendors"))
        }

        res.status(200).json(data)
    })
}
