const Vehicle = require("./Vehicle")

class MotorCicle extends Vehicle{
    constructor(brand, model, price, engine_size) {
        super(brand, model, price)
        this.engine_size = engine_size;    
    }
    
    
    showDetail(){
        console.log("Marca:"+ this.brand + " // " +" Modelo:" + this.model+ " // " + "Cilindrada:" + this.engine_size + " // " +  "Precio: $" + new Intl.NumberFormat("de-DE").format(this.price))
    }

    
}
module.exports = MotorCicle;