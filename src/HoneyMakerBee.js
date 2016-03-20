import Bee from './Bee';

class HoneyMakerBee extends Bee {
  // TODO..
 constructor (age, color) {
  super(age, color);
  this.age = 10;
  this.color = 'yellow';
  this.job = 'make honey';
  this.honeyPot = 0;
 }

  eat() {
   eat.super();
  }

 makeHoney(honeyPot) {
  return this.honeyPot++;
 }
 giveHoney(honeyPot) {
  return this.honeyPot--;
 }
}

export default HoneyMakerBee;
