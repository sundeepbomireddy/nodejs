var obj = {
        name : "sandeep",
        id : 3149,
        cars : ["maruti","hundai","bmw"]
}

for(key in obj){
  console.log(key);
  if(Array.isArray(obj[key]))
  {
    var carsarr = obj[key];
    for (var i = 0; i < carsarr.length; i++) {
      console.log(carsarr[i]);
    }
  }
}

var person = [];
person["firstName"] = "sandeep";
console.log(person.length);
console.log(person["firstName"]);

 /*var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;         // person.length will return 0
console.log(x);
var y = person[0];             // person[0] will return undefined 
console.log(y);*/

var namesarr = obj;
console.log(namesarr instanceof Array)
if(namesarr instanceof Array)
{
  console.log('variable is an array');
}
else
{
  console.log('variable is not an array');
}

var ids = [3,5,7,9];
for (var i = 0; i < ids.length; i++) {
  console.log(ids[i]);
}
console.log('after popping');
var delval = ids.pop();
for (var i = 0; i < ids.length; i++) {
  console.log(ids[i]);
}
console.log(delval);


var ids = [2,4,6,8];

console.log('before pushing');

for (var i = 0; i < ids.length; i++) {
  console.log(ids[i]);
}
ids.push(10);
console.log('after pushing');
for (var i = 0; i < ids.length; i++) {
  console.log(i+'---'+ids[i]);
}

var fruits = ["mango","orange","apple"];
fruits[fruits.length] = "guava";
fruits[fruits.length] = "sapota";
fruits[fruits.length] = "watermelon";
var fruitsstr = fruits.toString();
console.log(fruitsstr)