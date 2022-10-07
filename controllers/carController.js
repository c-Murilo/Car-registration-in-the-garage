const car = require("../models/car.js")
const Car = require("../models/car.js")

module.exports = class carController{
    static createUser(req,res){
        res.render("cars/add")
    }
    static async addVacancy(req,res){
        const car = {
            name: req.body.name,
            cor:req.body.cor,
            bloco:req.body.bloco,
        }
        await Car.create(car)
        res.redirect("/vagancy/add")
    }
    static async removeUser(req,res){
        const id = req.body.id
        await Car.destroy({where: {id:id}})
        res.redirect("/remove")
    }
    static async editUser(req,res){
        const id = req.params.id
        car = {
            name: req.body.name,
            bloco: req.body.bloco,
            cor: req.body.cor
        }
        await Car.findOne({where:{id:id}}) 
    }
    static async allCars(req,res){
        res.render("cars/all")
    }
    static async showUser(req,res){
        const cars = await Car.findAll({raw:true})
        res.render("cars/all",{cars})
    }
}