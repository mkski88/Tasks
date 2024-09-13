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


