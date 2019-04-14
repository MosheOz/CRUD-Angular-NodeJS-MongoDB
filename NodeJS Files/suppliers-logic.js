const dal = require("./dal");
const Supplier = require("./supplier");
const Country = require("./country");

function getSuppliers() {
    return new Promise((resolve, reject) => {
        Supplier.find({}).populate("country").exec((err, suppliers) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(suppliers);
            }
        });
    });
};

function getCountries() {
    return new Promise((resolve, reject) => {
        Country.find({}, (err, countries) => {
            if (err) {
                reject(err);
            }
            resolve(countries)
        });
    });
};

function getOneSupplier(_id) {
    return new Promise((resolve, reject) => {
        Supplier.findOne({ _id: _id }).populate("country").exec((err, suppliers) => {
            if (err || null) {
                reject(err);
            }
            else {
                resolve(suppliers);
            }
        });
    });
};

function addSupplier(s) {
    return new Promise((resolve, reject) => {
        const supplier = new Supplier(s);
        supplier.save((err, info) => {
            if (err) {
                reject(err);
            }
            resolve(info);
        })
    })
};

function editSupplier(_id, s) {

    return new Promise((resolve, reject) => {
        const supplier = new Supplier(s);
        Supplier.updateOne({ _id: _id }, supplier, (err, info) => {
            if (err) {
                reject(err);
            }
            console.log(info)
            resolve(info.nModified);
        })
    })
}


function deleteSupplier(_id) {
    return new Promise((resolve, reject) => {
        Supplier.deleteOne({_id: _id}, (err, info) => {
            if(err) {
                reject(err);
            }
            resolve(info.deletedCount);
        })
    })
}


module.exports = {
    getSuppliers,
    getOneSupplier,
    getCountries,
    addSupplier,
    editSupplier,
    deleteSupplier
}