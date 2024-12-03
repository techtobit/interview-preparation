// What is closure 


// var x =10

// function getY(value) {
// 	var y=value;
// 	return {
// 		getSum(value) {
// 			var z=value;
// 			var a =x+y+z;
// 			console.log(a);
// 		},
// 		getMod(value) {
// 			var z=value;
// 			var a =x+y+z;
// 			console.log(a%2);
// 		}
// 	}

// }

// const addintion = getY(10);

// addintion.getSum(40)
// addintion.getMod(101)


// sayHi();
// function sayHi() {
//     console.log("Hi!");
// }
// console.log(x);
// var x = 10;


// prototype in javascript 

const foo= {
	test1: function() {
		console.log('Foo Tested');
	},
};

const prototype=Object.create(foo);

prototype.bar=function(){
	console.log('Bar Tested');
	
}

prototype.test1();
prototype.bar();


// accessing prototype
const car={
	wheels:4
}

const sportsCar={}

Object.setPrototypeOf(sportsCar, car)
console.log(sportsCar.wheels);

console.log(Object.getPrototypeOf(sportsCar)===car);

// constructor and prototype 

function Person (name) {
	this.name=name;
}

Person.prototype.greet=function(){
	console.log(`My Name Is ${this.name}`);
}

const jhon = new Person('Jhon');





