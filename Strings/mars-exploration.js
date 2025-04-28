function marsExploration(s) {
    let diff = 0;
    for (let i = 0; i < s.length; i++) {
      if ((i % 3 === 0 || i % 3 === 2) && s.charAt(i) !== 'S') {
        diff++;
      } else if (i % 3 === 1 && s.charAt(i) !== 'O') {
        diff++;
      }
    }
    return diff;
  }
console.log(marsExploration('SOSSPSSQSSOR'));  