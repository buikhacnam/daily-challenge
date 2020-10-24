function repeatStr (n, s) {
  let k = s;
  for (let i = 1; i < n; i++){
     s = s + k;
  }
  return s;
}

console.log(repeatStr(6, "I")); // "IIIIII")



//  a better way doing it
function repeatStr (n, s) {
  return s.repeat(n);
}