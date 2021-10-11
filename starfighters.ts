import{Spacecraft, Containership} from './base-ships'

export class MillenniumFalcon extends Spacecraft implements Containership{

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
