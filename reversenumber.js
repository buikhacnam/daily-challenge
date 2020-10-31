const load = document.getElementById('load');
const percentage = document.getElementById("percentage")

load.addEventListener("click", loading);

function loading(){
	percentage.style.width = "100%";
}



var reverse = function(x) {
	 let str = x.toString();
   let arr = str.split("");
   arr = arr.reverse();
   if (arr.length > 1) {
   	 for (let i = 0; i < arr.length; i++) {
   	 	if (arr[i] === 0 & i === 0) {
   	 		arr.splice(0, 1);
   	 	}
   	 }
   }

   let result = parseInt(arr.join(""));
    if (result < (Math.pow(2, 31) * -1) || result > Math.pow(2, 31) - 1){
        return 0;
    } 

   return (x < 0)? 0 - result : result;
};


console.log(reverse(-32000))