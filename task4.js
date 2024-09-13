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

