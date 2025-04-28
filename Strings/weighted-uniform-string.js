function weightedUniformStrings(s, queries) {
    let weights = new Set();
    let result = [];
  
    let consecutiveCount = 0;
    let prevChar = ' ';
  
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === prevChar) {
        consecutiveCount++;
      } else {
        consecutiveCount = 1;
        prevChar = s.charAt(i);
      }
  
      let weight = (s.charCodeAt(i) - 'a'.charCodeAt(0) + 1) * consecutiveCount;
      weights.add(weight);
    }
  
    for (let query of queries) {
      result.push(weights.has(query) ? "Yes" : "No");
    }
  
    return result;
  }
console.log(weightedUniformStrings('abccddde',[6,1,3,12,5,9,10]));  