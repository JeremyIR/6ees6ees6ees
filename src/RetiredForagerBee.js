import ForagerBee from './ForagerBee';

class RetiredForagerBee extends ForagerBee {
  // TODO..
 constructor (age, color, treasureChest) {
  super(age, color, treasureChest);
  this.age = 40;
  this.color = 'grey';
  this.job = 'gamble';
  this.canFly = false;
 }

 eat() {
  eat.super();
 }

 forage(treasure) {
  return 'I am too old, let me play cards instead';
 }

 gamble(treasure) {
  this.treasureChest.push(treasure);
 }
}

export default RetiredForagerBee;

