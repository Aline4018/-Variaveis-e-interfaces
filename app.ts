import{Spacecraft, Containership} from './base-ships'
import{MillenniumFalcon} from './starfighters'

let ship = new Spacecraft(`hyperdrive`)
ship.jumpIntoHyperspace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: Containership) => ship.cargoContaners > 2
console.log(`Is falcon good for The Job? ${goodForTheJob (falcon)?'YES':'NO'}`)
