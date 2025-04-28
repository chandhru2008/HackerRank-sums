function hackerrankInString(s) {
    // Write your code here
    let hackerRank = "hackerrank";
    let res = ""; 
    let i = 0; 

    for (let c of s) {
        if (c === hackerRank[i]) {
            res += c; 
            i++;
        }
    }
    if (i === hackerRank.length) {
        return "YES";
    }
    return "NO";

}
console.log(hackerrankInString('hereiamstackerrank'));