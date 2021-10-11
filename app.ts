class Spacecraft{

  constructor(public propulsor: string){}

  jumpIntoHyperspace(){
    console.log(`Entering hyperspace ${this.propulsor}`)
  }
}

let ship = new Spacecraft(`hyperdrive`)
ship.jumpIntoHyperspace()

class MillenniumFalcon extends Spacecraft implements Containership{

cargoContaners: number

  constructor(){
    super(`Hypedrive`)
    this.cargoContaners= 4
  }

jumpIntoHyperspace(){
  if(Math.random()>=0.5){
    super.jumpIntoHyperspace()
  }else{console.log(`Failed to Jjump into hyperspace`)}
}
}

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

interface Containership{
  cargoContaners: number
}

let goodForTheJob = (ship: Containership) => ship.cargoContaners > 2
console.log(`Is falcon good for The Job? ${goodForTheJob (falcon)?'YES':'NO'}`)
