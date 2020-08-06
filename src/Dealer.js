const MotorCicle = require("./MotorCicle")
const Car = require("./Car")
const Vehicle = require("./Vehicle")

class Dealer{

    constructor() {
      this.vehiclesStocks = []  
    }


addVehicleToStock(vehicle) {
    this.vehiclesStocks.push(vehicle)
}

checkStock() {
    this.vehiclesStocks.forEach(vehicle => vehicle.showDetail())
}

findMostExpensiveVehicule() {
    let price = 0
    let mostExpensive = null

    for (let index = 0; index < this.vehiclesStocks.length; index++) {
        const element = this.vehiclesStocks[index];
    
        if (element.price > price) {
            price = element.price
            mostExpensive = element
        } else {
            index++
        }
    }
    console.log("Vehículo más caro:" + mostExpensive.brand + " " + mostExpensive.model)
}

findCheaperVehicle() {
    let cheaperVehicule = this.vehiclesStocks[0];;
    let price = this.vehiclesStocks[0].price;

    for (let index = 0; index < this.vehiclesStocks.length; index++) {
        const element = this.vehiclesStocks[index]; 
        if (element.price < price) {
            price = element.price
            cheaperVehicule = element
        } else {
            index++
        }
    }
    console.log("Vehículo más barato:" + cheaperVehicule.brand + " " + cheaperVehicule.model)
}



findByLetter(char) {
    const finded = this.vehiclesStocks.filter(Vehicle => Vehicle.model.includes(char));
    for (let index = 0; index < finded.length; index++) {
        const element = finded[index];
        console.log("Vehículo que contiene en el modelo la letra ‘Y’:" + element.brand + " " + element.model + " " + new Intl.NumberFormat("de-DE").format(element.price))
    }
    
}


orderByPrice() {
    const mostsExpensives = this.vehiclesStocks.sort((a,b)=>b.price-a.price)
    mostsExpensives.forEach(vehicle => console.log(vehicle.brand + " "+ vehicle.model))
}
}

module.exports = Dealer;