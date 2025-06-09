function stringConstruction(s) {

    let obj = {};
    let count = 0;
    for (let c of s) {
        if (!obj[c]) {
            obj[c] = 1;
            count++;
        }
    }
    return count;


}

console.log(stringConstruction('abcd'));
console.log(stringConstruction('abab'));