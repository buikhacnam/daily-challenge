function descendingOrder(n){
  let str = n.toString(10);
  let arr = str.split("");
  arr = arr.map(num => parseInt(num));
  arr.sort((a,b) => b - a);
  let num = parseInt(arr.join(""));
  return num;

}

console.log(descendingOrder(14432213)); //4433221