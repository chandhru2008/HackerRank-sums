function gameOfThrones(s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        map.set(char, (map.get(char) || 0) + 1);
    }

    let count = 0;
    for (let value of map.values()) {
        if (value % 2 !== 0) {
            count++;
        }
    }

    return count > 1 ? "NO" : "YES";
}
console.log(gameOfThrones('aaabbbb'));