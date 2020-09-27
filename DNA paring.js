function pairElement(str) {
  let arr = str.split("");
  let newArr = arr.map(element => {
  	return [element];
  })
  for (let i = 0; i < newArr.length; i++) {
  	let test = newArr[i][0];
  	(test == "A") ? newArr[i].push("T") : 
  	(test == "T") ? newArr[i].push("A") : 
  	(test == "C") ? newArr[i].push("G") :
  	newArr[i].push("C");
  }
  return newArr;
}

console.log(pairElement("ATCGA"));
//should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]