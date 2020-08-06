const Vehicle = require("./Vehicle")

class Car extends Vehicle{
    constructor(brand, model, price, doors) {
        super(brand, model, price)
        this.doors = doors;    
    }
    

    showDetail(){
        console.log("Marca:"+ this.brand + " // " +" Modelo:" + this.model+ " // " + "Puertas:" + this.doors + " // " +  "Precio: $" + new Intl.NumberFormat("de-DE").format(this.price))
    }

}
module.exports = Car;
