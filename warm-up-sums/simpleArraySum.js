function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    for (let e of ar) {
        sum += e;
    }
    return sum;
}

console.log(simpleArraySum([1, 2, 3, 4, 5]));