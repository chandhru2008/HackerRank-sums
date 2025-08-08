function twoStrings(string1, string2) {
    // Create a hash map to store characters from the first string
    const characterMap = {};
    
    // Populate the hash map with characters from the first string
    for (let char of string1) {
        if (!characterMap[char]) {
            characterMap[char] = 1;
        } else {
            characterMap[char]++;
        }
    }
    
    // Check if any character from the second string exists in the hash map
    for (let char of string2) {
        if (characterMap[char]) {
            return "YES";
        }
    }
    
    return "NO";
}

// Test cases
console.log(twoStrings("hello", "world")); // YES
console.log(twoStrings("hi", "world")); // NO
console.log(twoStrings("abc", "def")); // NO
console.log(twoStrings("abc", "cba")); // YES
