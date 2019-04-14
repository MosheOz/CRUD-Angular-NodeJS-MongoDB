const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    goods:String,
    country: { type: mongoose.Schema.Types.ObjectId, ref:"Country"}
});

const Supplier = mongoose.model("Supplier", supplierSchema, "suppliers");

module.exports = Supplier;