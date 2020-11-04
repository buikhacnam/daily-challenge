function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}

console.log(wave("hello"));

//["Hello", "hEllo", "heLlo", "helLo", "hellO"]

/*
const str = 'thequick';

console.log(str.slice(0,3) + str.charAt(3).toUpperCase() + str.slice(4));
// expected output: "theQuick"

*/