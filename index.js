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

//Hello;Hello World;World
function helloWorld(num) {
  return (num % 3 === 0) && (num % 5 === 0) ? 'Hello World' : num % 3 === 0 ? 'Hello' : num % 5 === 0 ? 'World' : null ;
}
/////////Random/////
function randomInt(a, b) {
	 return Math.floor(Math.random() * (b - a) )+a 
}
/////Array Indexing///////////////
function valueAt(arr, i) {
	let int = Math.floor(i)
    return arr[int]
}
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));//4
/////////Find the Amount of Potatoes/////////////
function potatoes(str) {
	var count = (str.match(/potato/g) || []).length
    return count
}
console.log(potatoes("potatopotatopotatoorange"))//3
///////////Area of a Rectangle////////////
function area(h, w) {
   if (h<=0||w<=0) return -1;
  return h*w;
}
console.log(area(-2, -5))//-1
////////////Slice of Pie///////////////
function equalSlices(total, people, each) {
return people*each <=total ;	
}
console.log(equalSlices(20, 12, 2));
///////Tuck in Array////////
function tuckIn(arr1, arr2) {
return [arr1[0],arr2,arr1[1]].flat();	
}
consoler.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]), [[1, 2], [3, 4], [5, 6]])
function removeVowels(str) {
	let regex = '^[aeiuoAOEIU]+$' 
    return str.split('').filter(el=> !el.match(regex)).join('')
}
console.log(removeVowels("If Obama resigns from office NOW, thereby doing a great service to the country—I will give him free lifetime golf at any one of my courses!"))