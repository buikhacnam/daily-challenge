/*
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value
pairs (second argument). Each name and value pair of the source object
has to be present in the object from the collection if it is to be 
included in the returned array.

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

	https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
*/



function whatIsInAName(collection, source) {
	let arr = transferArr(collection);
	let obj = transferObj(source);
	let index = [];
	let check = 0;
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < obj.length; j++){
			if(arr[i].includes(obj[j])) {
				check += 1;
				if (check == obj.length) {
					index.push(i);
				}
			}
		}
		check = 0;
	}

	return index.map(num => {
		return collection[num];
	})
	
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));

//should return [{ "apple": 1, "bat": 2, "cookie":2 }]

function transferObj(a){
	let aString = JSON.stringify(a);
	let newString = aString.slice(1, aString.length-1);
	let arr = newString.split(',');
	return arr;
}

function transferArr(arr) {
	return arr.map(obj => {
		let str = JSON.stringify(obj);
		let newStr = str.slice(1, str.length-1);
		let arr = newStr.split(",");
		return arr;
	})
}


