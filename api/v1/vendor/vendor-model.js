var mongoose = require("mongoose"),
    vendorSchema;

mongoose.connect("mongodb://localhost/foodApp");

vendorSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    address: {type: String, required: true},
    phone_number: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model("vendor", vendorSchema);
