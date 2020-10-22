function list(names){
  let arr = names.map(name => name.name);
  if (arr.length == 1) {
  	return arr = arr.join();
  } else if (arr.length == 2 ) {
  	return arr = arr.join(" & ");
  } else if (arr.length > 2) {
  	let lastName = arr[arr.length - 1];
  	arr = arr.filter(name => name !== lastName);
  	return arr.join(", ") + " & " + lastName;
  }
  return "";
  
}

(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
//Bart, Lisa, Maggie, Homer & Marge

// creat array that contains only names; (done)
// join all the name into a string seperate them by (a coma, & or nothing); (done)
// replace the last name with "&" :
//                                  ditch the last name out of the array
// 	                                join the array with a coma and attach the "& lastname" (done)


//other way:

function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }