function findLargest (arr) {
    let answer = [];
    arr.forEach(function(array){
      answer.push(Math.max(...array))
    })
    return answer
}
function reverseString (word) {
    return word.split("").reverse().join("");
}
reverseString("Time");