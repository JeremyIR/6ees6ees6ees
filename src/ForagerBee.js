import Bee from './Bee';

class ForagerBee extends Bee {
  // TODO..
 constructor (age, color) {
  super(age, color);
  this.age = 10;
  this.color = 'yellow';
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
 }

 eat() {
  eat.super();
 }

 forage(treasure) {
  this.treasureChest.push(treasure);
 }
}

export default ForagerBee;
