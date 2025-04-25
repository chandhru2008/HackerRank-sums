function miniMaxSum(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let totalSum = arr.reduce((sum, num) => sum + num, 0);


    let sumOfMin = totalSum - max; 
    let sumOfMax = totalSum - min;

    console.log(sumOfMin + " " + sumOfMax);
}
miniMaxSum([1, 2, 3, 4, 5]);