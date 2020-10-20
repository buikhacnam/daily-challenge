function sumFibs(num) {
  if (num <= 1){
  	return 0;
  } else if (num == 2) {
  	return 1;
  } else {
  	let initArr = [1, 1];
  	for (let i = 2; initArr[initArr.length - 1] <= num; i++) {
  		initArr.push(initArr[i-1] + initArr[i-2]);
  	}
  let newArr = initArr.slice(0,-1);
  return newArr.filter(num => num % 2 !== 0)
  .reduce((total, num) => total + num)
  }
}

(sumFibs(10)); //1 + 1 + 3 + 5 = 10 
