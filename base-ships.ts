class Spacecraft{

  constructor(public propulsor: string){}

  jumpIntoHyperspace(){
    console.log(`Entering hyperspace ${this.propulsor}`)
  }
}

 interface Containership{
  cargoContaners: number
}
export{Spacecraft, Containership}
