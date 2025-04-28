function pangrams(s) {
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) !== ' ') {
        set.add(s.charAt(i).toLowerCase());
      }
    }
    return set.size === 26 ? "pangram" : "not pangram";
  }
console.log(pangrams('We promptly judged antique ivory buckles for the prize'));