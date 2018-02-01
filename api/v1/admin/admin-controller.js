var adminModel = require("./admin-model.js");

exports.addAdmin = function(req,res,next) {
    var adminData = req.body;
    console.log(adminData);

    var personel = new adminModel(adminData);
    personel.save(function(err,data) {
        if (err) {
            return next(new Error("cannot add personel"))
        }

        res.status(200).json(data);
    })
}
