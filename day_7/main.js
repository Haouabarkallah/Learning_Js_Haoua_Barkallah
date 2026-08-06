// fonction for even numbers
// function evenNumbers(arr) {
//   let evenArr = []; 
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenArr.push(arr[i]);
//         }
//     }
//     return evenArr;
// }
let x = parseInt(prompt("Enter a number: "));
console.log(typeof (x))

// function evenNumbers(num){
//     if (num % 2 === 0) {
//         console.log("even number");
//     } 
//      else{
//             console.log("odd number");
//         }
    
// }
function evenNumbers(num){
    console.log(typeof (num), isNaN(num))
    if (num % 2 === 0) {
        console.log("even number");
    } 
     else{
            console.log("odd number");
        }
    
}

evenNumbers(5) // "even number"
 // "odd number"

// fonction for odd numbers
// function oddNumbers(arr) {
//   let oddArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             oddArr.push(arr[i]);
//         }
//     }
//     return oddArr;
// }
