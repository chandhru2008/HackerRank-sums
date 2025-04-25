function diagonalDifference(arr) {
    // Write your code here
    let left = 0;
    let right = 0;
    for (let i = 0; i < arr.length; i++) {
        left += arr[i][i];
        right += arr[i][arr.length - i - 1];
        console.log(left, right);
    }
    return Math.abs(left - right);
}
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));