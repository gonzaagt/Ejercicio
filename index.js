const MotorCicle = require("./src/MotorCicle")
const Car = require("./src/Car")
const Vehicle = require("./src/Vehicle")
const Dealer = require("./src/Dealer")

const car1 = new Car("Peugeot","206", 200000.00, 4)
const car2 = new Car("Peugeot","208", 250000.00, 5)
const motorCicle1 = new MotorCicle("Honda","Titan",60000.00, "125c")
const motorCicle2 = new MotorCicle("Yamaha","YBR",80500.50, "160c")


const dealer = new Dealer()

dealer.addVehicleToStock(car1)
dealer.addVehicleToStock(car2)
dealer.addVehicleToStock(motorCicle1)
dealer.addVehicleToStock(motorCicle2)


dealer.checkStock()

console.log("=======================================================")

dealer.findMostExpensiveVehicule()
dealer.findCheaperVehicle()
dealer.findByLetter("Y")

console.log("=======================================================")

dealer.orderByPrice()