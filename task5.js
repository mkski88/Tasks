/*
     Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
     which is the number of times you must multiply the digits in num until you reach a single digit.
*/
function persistence(num) {
    let count = 0;

    //Repeat process while the number has more than one digit
    while (num >= 10) {
        let product = 1; //Reset product

        //Multiply the digits of the number
        while (num > 0) {
            product *= num % 10;  //Get and multiply  last digit
            num = Math.floor(num / 10);  //Remove the last digit
        }

        //Set num to the product of its digits
        num = product;
        count++; //Increment the count for each multiplication
    }

    return count;
}

console.log(persistence(999)); // 4
console.log(persistence(732)); // 2
console.log(persistence(19));  // 3