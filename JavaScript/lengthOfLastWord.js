// var lengthOfLastWord = function(s) {
//     s = s.trim()
//     let lastwordlength = 0
//     for(let i = s.length-1 ; i >= 0 ; i--){
//         if(s[i] !== " "){
//             lastwordlength++
//         }else if (lastwordlength > 0){
//             return lastwordlength
//         }
//     }
//     return lastwordlength
// };

// console.log(lengthOfLastWord("Hello     world   "))

// let s = "Hello     world       "
// console.log(s[0])


var lengthOfLastWord = function(s) {
    s=s.trim()
    s=s.split(' ')
    return s[s.length-1].length
    
};

console.log(lengthOfLastWord("Hello     world   "))