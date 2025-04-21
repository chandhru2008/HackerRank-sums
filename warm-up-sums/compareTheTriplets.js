function compareTriplets(a, b) {
    let AliceAndBobArr = [];
    let AleicPoint = 0;
    let BobPoint = 0;
    let res = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            AleicPoint++
        } else if (a[i] < b[i]) {
            BobPoint++
        }
    }
    AliceAndBobArr.push(AleicPoint);
    AliceAndBobArr.push(BobPoint);

    return AliceAndBobArr;
}
console.log(compareTriplets([17, 28, 30],
[99, 16, 8]));