var mongoose = require("mongoose"),
    adminSchema;

mongoose.connect("mongodb://localhost/foodApp");

AdminSchema = new mongoose.Schema({
    firstname:  {type: String, required: true},
    lastname:   {type: String, required: true},
    email:      {type: String, required: true},
    username:   {type: String, required: true, unique: true},
    password:   {type: String, required: true}
})


module.exports = mongoose.model("personel", AdminSchema);
