const express = require("express");
const router = express.Router();
const suppliersLogic = require("./suppliers-logic");

router.get("/suppliers", async (request, response) => {
    try {
        const suppliers = await suppliersLogic.getSuppliers();

        suppliers !== null ? response.json(suppliers) : response.status(404).json("suppliers doesn't exist");
    }
    catch (err) {
        response.status(500).json(error);
    }
});

router.get("/countries", async (request, response) => {
    try {
        const countries = await suppliersLogic.getCountries();
        response.json(countries);
    }
    catch (err) {
        response.status(500).json(error);
    }
});

router.get("/suppliers/:_id", async (request, response) => {
    try {
        const supplier = await suppliersLogic.getOneSupplier(request.params._id);
        supplier !== null ? response.json(supplier) : response.status(404).json("supplier ID: " + request.params._id + " doesn't exist");

    }
    catch (error) {
        response.status(500).json(error);
    }
})


router.post("/suppliers", async (request, response) => {
    try {
        const supplier = request.body;
        const supplierAdded = await suppliersLogic.addSupplier(supplier);
        response.json(supplierAdded);
    }
    catch (error) {
        response.status(500).json(error);
    }
});

router.put("/suppliers/:_id", async (request, response) => {
    const supplierId = request.params._id;
    const supplierBody = request.body;
    supplierBody._id = supplierId;
    try {
        const supplierEdited = await suppliersLogic.editSupplier(supplierId, supplierBody);
        
        supplierEdited !== 0 ? response.json(supplierBody) : response.status(404).json("supplier ID: " + request.params._id + " doesn't exist");
    }
    catch (error) {
        response.status(500).json(error)
    }
});

router.delete("/suppliers/:_id", async (request, response) => {
    try {
        const supplier = await suppliersLogic.deleteSupplier(request.params._id);
        console.log(supplier)
        supplier !== 0 ? response.json() : response.status(404).json("supplier ID: " + request.params._id + " doesn't exist");
    }
    catch (error) {
        reponse.status(500).json(error);
    }
});

module.exports = router;