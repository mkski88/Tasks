var uniqueInOrder = function(iterable) {
    //Convert the input to an array if it's not already an array
    let array = Array.isArray(iterable) ? iterable : iterable.split('');

    let iteration = array.length;

    //Loop through the array
    for (let i = 0; i < iteration; i++) {
        //Check if the current element is the same as the next one
        if (array[i] == array[i + 1]) {
            //If they are the same, remove the next element
            array.splice(i + 1, 1);
            //Decrease the index and length to check the next element correctly
            i--; iteration--;
        }
    }

    return array;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));         // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3]));   // [1, 2, 3]
