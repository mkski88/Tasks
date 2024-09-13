/*
 You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of
 odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
*/


function findOutlier(integers) {
    let result = [];

    //Loop through the input array and calculate the remainder of each number when divided by 2
    integers.forEach(num => {
        result.push(Math.abs(num) % 2);
    });

    //Find unique element (only odd or only even number)
    const uniqueElement = result.find(num => result.filter(x => x === num).length === 1);

    //Return the original number that corresponds to the unique remainder
    return integers[result.indexOf(uniqueElement)];
}

console.log(findOutlier([-92863239, 128510831, 120182962, 90475877]));


