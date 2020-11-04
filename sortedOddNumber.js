/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

*/



function sortArray(array) {
 	let odd = array.filter(num => num % 2 !== 0);
 	let even = array.filter(num => num % 2 == 0);
 	let newArr = [...array]
 	odd = odd.sort((a, b) => a - b);

 	even.map(num => {
 		odd.splice(newArr.indexOf(num), 0, num);
 		newArr[[newArr.indexOf(num)]] = "done";
 		return num;
 	})

 	return odd;

}

console.log(sortArray([5, 3, 2, 8, 1, 4,2, 7,3,1,40,5,34,23,123,5435,123,54,3214])) 
// [1, 3, 2, 8, 5, 4]
