const express = require("express")
const router = express.Router()

const carController = require("../controllers/carController.js")
router.get("/add",carController.createUser)
router.post("/add",carController.addVacancy)
router.post("/remove",carController.removeUser)
router.post("/edit",carController.editUser)
router.get("/",carController.allCars)
router.get("/all",carController.showUser)
module.exports = router