function funnyString(s) {
    let reversedString = s.split('').reverse().join('');
    
    let list1 = [];
    let list2 = [];
  
    for (let i = 0; i < s.length - 1; i++) {
      list1.push(Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)));
      list2.push(Math.abs(reversedString.charCodeAt(i) - reversedString.charCodeAt(i + 1)));
    }
  
    let isFunny = list1.every((val, index) => val === list2[index]) ? "Funny" : "Not Funny";
    return isFunny;
  }
console.log(funnyString('acxz'));  