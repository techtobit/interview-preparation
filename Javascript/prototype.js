

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





