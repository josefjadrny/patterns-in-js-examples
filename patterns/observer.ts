interface Subject {
  registerObserver(observer: Observer): void
  removeObserver(observer: Observer): void
  notifyObservers(): void
}

interface Observer {
  update(data: Object): void
}

interface DisplayElement {
  display(): void
}

class DataProvider implements Subject {
  private _data: Object = {}
  observes: Array<Observer> = []

  notifyObservers() {
    this.observes.forEach(observer => {
      observer.update(this._data)
    })
  }

  registerObserver(observer: Observer) {
    this.observes.push(observer)
  }

  removeObserver(observer: Observer) {
    this.observes = this.observes.filter(element => {
      return element !== observer})
  }

  set data(value: Object) {
    this._data = value
    this.notifyObservers()
  }
}

abstract class DisplayData implements Observer, DisplayElement {
  subject: Subject
  protected data: Object = {}

  constructor(subject: Subject) {
    this.subject = subject
    subject.registerObserver(this)
  }

  abstract display(): void

  update(data: Object): void {
    this.data = data
    this.display()
  }
}

class DisplayObject extends DisplayData {
  display(): void {
    console.log(this.data)
  }
}

class DisplayJSON extends DisplayData {
  display(): void {
    console.log(`${JSON.stringify(this.data)}`)
  }
}

const dataProvider = new DataProvider()
const display1 = new DisplayObject(dataProvider)
const display2 = new DisplayJSON(dataProvider)
dataProvider.data = {name: "JOE"}