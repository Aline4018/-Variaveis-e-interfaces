import{Spacecraft, Containership} from './base-ships'
import{MillenniumFalcon} from './starfighters'

import* as _ from 'lodash'
console.log(_.pad("Typescript Examples", 40,"="))

let ship = new Spacecraft(`hyperdrive`)
ship.jumpIntoHyperspace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2
console.log(`Is falcon good for The Job? ${goodForTheJob (falcon)?'YES':'NO'}`)
