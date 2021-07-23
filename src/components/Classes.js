export class Vacation {
    constructor (destination, length) {
      this.length = length
      this.destination = destination
    }
  
    print () {
      console.log(`${this.destination} | ${this.length} day`)
    }
  }
  
  export class Expedition extends Vacation {
    constructor (destination, length, gear) {
      super(destination, length)
      this.gear = gear
    }
  
    print () {
      //super.print()
      console.log(`Bring your ${this.gear.join(' and your ')}`)
    }
  }
  export class Triangle {
    constructor (side1,side2,side3){
      this.side1=side1
      this.side2=side2
      this.side3=side3
    }
    perimetr(){
        return (this.side1+this.side2+this.side3)
    }
  }