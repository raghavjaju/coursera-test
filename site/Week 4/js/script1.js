/*console.log("I'm there");

var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
	console.log("Hello "+name);
};
array[3] = {course: "HTML, CSS & JS"};

console.log(array);
console.log(array[1]);
array[2]();
console.log(array[3].course);

//short hand notation for array

var names = ['RJ','Rag','raghav'];
console.log(names);

for(var i=0;i<names.length; i++)
	console.log("Hello "+names[i]);

names[100] = "Yaakov";

for(var i=0;i<names.length; i++)
	console.log("Hello "+names[i]);
*/

/*var n = ['RJ','Rag','raghav'];

var myObj = {
	name: "Yaakov",
	course: "HTML/CSS/JS",
	Platform: "Coursera"
};

for(var prop in myObj){
	console.log(prop+": " + myObj[prop]);
}

for (var name in n){
	console.log("HELLO "+n[name]);
}

n.greetings = 'hi';//greetings beccome property of the array, and remember arrays are just as objects in JS

for (var name in n){
	console.log("HELLO "+n[name]);
}
*/

/*********CLOSURES**********/

/*function makeMultiplier(multiplier){
	return ( 
		function(x){
			return multiplier*x;
		}
	);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));*/ //the function inside return in makeMultiplier get its execution environment here
//at the time of execution of doubleAll, makeMultiplier is done, it no longer exist in execution stack. Since a
//function like doubleAll is returned from inside of makeMultiplier function, JavaScript
//preserves its outer lexical environment memory space for this function,
//so this function can go ahead and produce what it needs to produce. 
//So the multiplier is something that's still sitting in memory
//in lexical outside scope of this function.

/**********Fake Namespaces**********/

/********IIFE**********/
//Immediately Invoked Function Parameters

(function(name) {
	console.log("Hello "+name);
})();