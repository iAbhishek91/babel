import * as data from './simpleDataFile';

export class SimpleClass {
  constructor(){
    this.name = data.name;
    this.age = data.age;
    this.address = data.address;
  }
}

let simpleClass = new SimpleClass();
console.log(simpleClass.name);