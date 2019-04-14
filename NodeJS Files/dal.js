const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Suppliers",
    { useNewUrlParser: true },
    (err, mongoClient) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("DB: " + mongoClient.name);
    }
);

module.exports = mongoose;