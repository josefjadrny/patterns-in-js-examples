class Duck {
  flyBehavior: FlyBehavior

  constructor(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior
  }

  performFly() {
    this.flyBehavior.fly()
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

const flyingDuck = new Duck(new FlyWithWings())
const stupidDuck = new Duck(new FlyNoWay())
flyingDuck.performFly()
stupidDuck.performFly()