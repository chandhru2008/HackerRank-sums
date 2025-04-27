function alternate(s) {
    let uniqueCharacters = new Set(s);
    let maxLength = 0;

    let uniqueCharsArr = [...uniqueCharacters];

    for (let i = 0; i < uniqueCharsArr.length; i++) {
        for (let j = i + 1; j < uniqueCharsArr.length; j++) {
            let firstChar = uniqueCharsArr[i];
            let secondChar = uniqueCharsArr[j];
            let validLength = checkValidString(s, firstChar, secondChar);
            maxLength = Math.max(maxLength, validLength);
        }
    }

    return maxLength;
}

function checkValidString(s, firstChar, secondChar) {
    let previousChar = '';
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === firstChar || s[i] === secondChar) {
            if (s[i] !== previousChar) {
                count++;
                previousChar = s[i];
            } else {
                return 0; 
            }
        }
    }

    return count;
}

console.log(alternate('beabeefeab'));