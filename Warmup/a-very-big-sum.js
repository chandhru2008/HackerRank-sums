function aVeryBigSum(ar) {
    // Write your code here
let sum = 0;
for(let e of ar){
    sum+=e;
}
return sum;
}
console.log(aVeryBigSum([1,23,4,5,67,8]));
