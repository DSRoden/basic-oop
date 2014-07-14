/* global prompt:true */

/*
var dog = {};
dog.name = 'fido';
dog.age = 3;
dog.gender = 'male';
dog.breed = 'labrador';
console.log(dog);

var dog2= {name: 'sam', age:4};
console.log(dog2);
*/

/* Exercise 1 */
//prompt the user for a dog's name, age, breed
//create dog object based on user input
//print dog out 

/*var prompt =require('sync-prompt').prompt;

var name = prompt('What is the dog\'s name? ');
var age = prompt('What is the dog\'s age? ');
var breed = prompt('What is the dog\'s breed? ');

age = parseInt(age);

var userDog = {dogName: name, dogAge: age, dogBreed: breed};

console.log(userDog);
*/

/* Exercise 2 */
//create array of dogs
//create while loop
//want to create a dog
//what's the dog's name, age, breed
//push the dog object into the array
//when user quits print out the list of dogs created


var prompt =require('sync-prompt').prompt;
var dogs = [];

var add = prompt('Do you want to add a dog Y/N? or (Q)uit ');

while (add !== 'q' ){
  var name = prompt('Dog name: ');
  var breed = prompt('Dog breed: ');
  var age = prompt('Dog age: ');

  var dog = {name:name, breed:breed, age:age};
  
  dogs.push(dog);

  add = prompt('Do you want to add a dog Y/N? or (Q)uit ');
}

console.log(dogs);
