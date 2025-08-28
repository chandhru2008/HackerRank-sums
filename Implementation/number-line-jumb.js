function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let jumps = (x2 - x1) / (v1 - v2)
    console.log(jumps)
    if (jumps > 0 && jumps % 1 === 0) {
        return "YES"
    }
    return "NO"
}
console.log(kangaroo(0, 3, 4, 2))