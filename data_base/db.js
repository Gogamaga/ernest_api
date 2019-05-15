const mongoose = require("mongoose");
const DB_CONFIG = require("./config");
mongoose.connect(DB_CONFIG.DB_URL,{useNewUrlParser: true},() => console.log('db'));

module.exports = mongoose;