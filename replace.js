function myReplace(str, before, after) {
  let replacingIndex;
  let arr = str.split(" ");
  arr.map(word => {
  	if(word == before) {
  		replacingIndex = arr.indexOf(word);
  	}
  	return word;
  }) 


  if (before[0] == before[0].toUpperCase()) {
  	after = after[0].toUpperCase() + after.slice(1);
  } else {
  	after = after[0].toLowerCase() + after.slice(1);
  }

  
  arr.splice(replacingIndex, 1, after);
  return arr.join(" ");
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));

