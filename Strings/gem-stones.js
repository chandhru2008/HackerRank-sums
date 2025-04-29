function gemstones(arr) {
    // Initialize a set with characters from the first string
    let commonChars = new Set(arr[0]);
  
    // Iterate through the remaining strings
    for (let i = 1; i < arr.length; i++) {
      let currentSet = new Set(arr[i]);
  
      // Keep only characters that are also in the current string
      commonChars = new Set([...commonChars].filter(char => currentSet.has(char)));
    }
  
    // Return the number of common characters
    return commonChars.size;
  }
console.log(gemstones(['abcdde', 'baccd', 'eeabg']));  