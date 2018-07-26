import {Person, SuperPerson} from './person';

const bob = new Person('Bob');

console.log(bob.speak('My name is Samjhana!'));

const superSarah = new SuperPerson('Sarah', 'Tip toe real quite');

superSarah.speak('Hi I\'am super Sarah.');

superSarah.saySuperpower();