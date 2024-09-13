function findOdd(array) {
    //If array has only one element, return it
    if(array.length == 1) return array[0];

    //Create object to count the occurrences of each number
    const countObj = {};

    //Loop through the array and count each number
    array.forEach(num => {
        countObj[num] = (countObj[num] || 0) + 1;
    });

    //Loop through the count object
    for (const num in countObj) {
        //If the count of a number is odd, return it
        if (countObj[num] % 2 !== 0) {
            return Number(num); //Convert the key back to a number before returning
        }
    }
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));