class Duck {
  flyBehavior: FlyBehavior

  performFly() {
    this.flyBehavior.fly()
  }
}

class MallardDuck extends Duck {
  constructor() {
    super()
    this.flyBehavior = new FlyWithWings()
  }
}

class ModelDuck extends Duck {
  constructor() {
    super()
    this.flyBehavior = new FlyNoWay()
  }
}

interface FlyBehavior {
  fly()
}

class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('Flying with wings...')
  }
}

class FlyNoWay implements FlyBehavior {
  fly() {
    console.log('I can not fly...')
  }
}


const duck = new MallardDuck()
const anotherDuck = new ModelDuck()
duck.performFly()
anotherDuck.performFly()