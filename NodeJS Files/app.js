const express = require("express");
const cors = require("cors");
const suppliersController = require("./suppliers-controller");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/", suppliersController);

server.listen(3000, ()=>{
    console.log("connected to localhost:3000");
});