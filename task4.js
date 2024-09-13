/*
    Given an array of ones and zeroes, convert the equivalent binary value to an integer.
    Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

const binaryArrayToNumber = arr => {
    let result = 0;

    //Loop through the array
    for (let i = 0; i < arr.length; i++) {
        //Multiply each binary digit by 2 raised to the power of its position (from right to left)
        result += arr[i] * (Math.pow(2, arr.length - i - 1));
    }

    return result;
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
console.log(binaryArrayToNumber([0, 1, 0, 1])); // 5

