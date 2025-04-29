// function anagram(s) {
//     if (s.length % 2 !== 0) return -1;
  
//     const half = s.length / 2;
//     const s1 = s.substring(0, half);
//     const s2 = s.substring(half);
//     const map = new Map();
  
//     // Count characters in s2
//     for (let char of s2) {
//       map.set(char, (map.get(char) || 0) + 1);
//     }
  
//     // Try to match s1's characters with s2
//     for (let char of s1) {
//       if (map.has(char) && map.get(char) > 0) {
//         map.set(char, map.get(char) - 1);
//       }
//     }
  
//     // Sum remaining values in map (these are unmatched characters from s2)
//     let res = 0;
//     for (let value of map.values()) {
//       res += value;
//     }
  
//     return res;
//   }
// console.log(anagram('aaabbb'));  