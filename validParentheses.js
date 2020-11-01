/*
(((((()))))) -- VALID

()()()()     -- VALID

(((((((()    -- INVALID

((()(())))   -- VALID
*/

var isValid = function(s) {
   const left = ['(', '{', '['];
    const right = [')', '}', ']'];
    const arr = s.split("");
    if (!left.includes(arr[0]) || arr.length % 2 !== 0 || !right.includes(arr[arr.length - 1])) {
      return false;
    }

    let check = [];
    for (let i = 0; i < arr.length; i++) {
      if (left.includes(arr[i])) {
         check.push(arr[i]);
      } else {
         if (left.indexOf(check[check.length - 1 ]) === right.indexOf(arr[i])) {
            check.push(arr[i]);
            check.splice(check.length - 2, 2);
         } else {
            return false;
         }
      }
    }


    return (check.length > 0) ? false : true;
};

console.log(isValid("[]"));