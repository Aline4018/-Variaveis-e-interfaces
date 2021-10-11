import{Spacecraft, Containership} from './base-ships'

export class MillenniumFalcon extends Spacecraft implements Containership{

cargoContainers: number

  constructor(){
    super('Hypedrive')
    this.cargoContainers= 4
  }
  jumpIntoHyperspace(){
    if(Math.random()>=0.5){
      super.jumpIntoHyperspace()
    }else{console.log('Failed to Jjump into hyperspace')}
  }
  }
