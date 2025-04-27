function plusMinus(arr) {
    // Write your code here
    let numOf0 = 0;
    let numOfNegativeNumber = 0;
    let numOfPositiveNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            numOfPositiveNumber++;
        } else if (arr[i] == 0) {
            numOf0++;  
        } else {
            numOfNegativeNumber++;
        }
    }

    let total = arr.length;
    console.log((numOfPositiveNumber / total).toFixed(6));
        console.log((numOfNegativeNumber / total).toFixed(6));
    console.log((numOf0 / total).toFixed(6));


}

plusMinus([-4, 3, -9, 0, 4, 1]);