import './css/style.css';

import Bowerman from './js/Bowerman';
import Daemon from './js/Daemon';
import Magician from './js/Magician';
import Swordsman from './js/Swordsman';
import Undead from './js/Undead';
import Zombie from './js/Zombie';

const Person1 = new Bowerman('Person1');
const Person2 = new Daemon('Person2');
const Person3 = new Magician('Person3');
const Person4 = new Swordsman('Person4');
const Person5 = new Undead('Person5');
const Person6 = new Zombie('Person6');

console.log(Person1);
console.log(Person2);
console.log(Person3);
console.log(Person4);
console.log(Person5);
console.log(Person6);
