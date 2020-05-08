/**************
var x = "Hello World!";
var message = "in global";
console.log("global: message = "+message);

var a = function () {
	var message = "inside a";
	console.log("a: message = "+message);
	b();
}

function b(){
	console.log("b: message = "+message);
}

a();

var y;
console.log(y)

if(y==undefined){
	console.log("y is undefined");
}

console.log(undefined/5);

var a = 4, b = 4;
if(a == b)
{
	console.log("x=4 and y=4");
}

a="4";

if(a == b)
{
	console.log("x=4 and y=4");
}

if(a===b)
{
	console.log("x is strictly equal to y");
}
else{
	console.log("x is not strictly equal to y");
}

if(false||0||null||undefined||""||NaN){
	console.log("This line won't never execute");
}
else
{
	console.log("All False");
}

if(true&&"hello"&&1&&-1&&"false"){
	console.log("All True");
}


function n(){
	return{
		name: "Raghavb"
	};
}

console.log(n());

var sum = 0;
for(var i=0;i<10;i++){
	sum+=i;
}
console.log("The sum is "+ sum);

function orderFrieswith(sidedish){
	sidedish = sidedish||"Whatever!";
	console.log("Chicken with " + sidedish);
}

orderFrieswith("Noodles");
orderFrieswith();
**************/
/********Object Creation************/
/*var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";
console.log(company)
console.log("Company ceo name is: "+company.ceo.firstName);
console.log(company["name"]);

var stockProp = "$stock of company";
company[stockProp] = 110;
console.log("The stock price of company is "+ company[stockProp]);*/

/*********Simplyfying Object Creation************/ /*
var facebook ={
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	},
	$stock: 110,
	"stock of company": 120
};

console.log(facebook);

function multiply(x,y){
	return x*y;
}

console.log(multiply(5,3));
multiply.version = "v.1.0";
console.log(multiply); */

/******Function Factory********/
/*function makeMultiplier(multiplier){
	var myFunc = function (x){
		return multiplier*x;
	};
	return myFunc;
}


var multiplyby3 = makeMultiplier(3);
console.log(multiplyby3(10));

function doOperation(x,Operation){
	return Operation(x);
}

var result = doOperation(6,multiplyby3);
console.log(result);*/

/*****pass by value and pass by reference*****/
/*
var a = 7;
var b = a;
console.log("a : "+a);
console.log("b : "+b);

b=5;
console.log("a : "+a);
console.log("b : "+b);

var c = {x:7};
var d = c;
console.log(c);
console.log(d);

d.x = 5;
console.log(c);
console.log(d);

*/
/*
function changePrimitive(primValue){
	console.log("in changePrimitive...");
	console.log("before: ");
	console.log(primValue);
	primValue = 5;
	console.log("after: ");
	console.log(primValue);
}

var value = 7;
changePrimitive(value); //primvalue = value
console.log("after changePrimitive, orig value:");
console.log(value);

function changeObject(objValue){
	console.log("in changeObject...");
	console.log("before: ");
	console.log(objValue);
	objValue.x = 5;
	console.log("after: ");
	console.log(objValue);
}

count = {x: 7};
changeObject(count);
console.log("after changeObject, orig count: ");
console.log(count);
*/

/*****Constructors prototype and this keyword******/
/*
function test(){
	console.log(this);
	this.myName = "RJ";
}

test();
console.log(window.myName);

//function constructor
function Circle(radius){
	this.radius = radius;
	this.getArea = function () {
		return Math.PI * Math.pow(this.radius,2);
	};
}

var myCircle = new Circle(10);
console.log(myCircle);
console.log(myCircle.getArea());
*/

//since getArea does not required to be created again and again with each new object of Circle therefore we use prototype
/*
function Circle(radius){
	this.radius = radius;
}

Circle.prototype.getArea = 
	function() {
		return Math.PI * Math.pow(this.radius,2);
};

var myCircle = new Circle(10);
console.log(myCircle);

var myOtherCircle = new Circle(20);
console.log(myOtherCircle); */

/******Object Literal and "this" keyword******/

/*var literalCircle = {
	radius: 10,
	getArea: function(){
	//	var self = this; //(to get around the bug) as at this point this is refering to literalCircle (also replace self in place of this in this function) 
		console.log(this);

		var increaseRadius = function(){// bug in JS
			this.radius = 20;//this actually worked on global
		}
		increaseRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();*/

/*******Fake Namespaces***********/

