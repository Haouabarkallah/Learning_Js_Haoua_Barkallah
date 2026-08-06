// fonction for even numbers
function evenNumbers(arr) {
  let evenArr = []; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }
    return evenArr;
}

// fonction for odd numbers
function oddNumbers(arr) {
  let oddArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddArr.push(arr[i]);
        }
    }
    return oddArr;
}