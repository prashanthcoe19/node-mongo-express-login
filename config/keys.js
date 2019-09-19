const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pwd");

module.exports = mongoose;
