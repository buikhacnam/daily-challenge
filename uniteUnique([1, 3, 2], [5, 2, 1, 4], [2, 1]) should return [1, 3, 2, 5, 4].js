function uniteUnique(arr) {
  let newArr1 = [...arguments];

  let newArr = [].concat(...newArr1);
  console.log(newArr) //[1, 3, 2, 5, 2, 1, 4, 2, 1]

   let set = new Set(newArr);
   console.log(typeof(set)) //object
   console.log(set); // Set(5) {1, 3, 2, 5, 4}
   return [...new Set(newArr)]; // [1,3,2,5,4]

}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
