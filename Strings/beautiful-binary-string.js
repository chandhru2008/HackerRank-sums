function beautifulBinaryString(b) {
    return b.split("010").length - 1;
  }
console.log(beautifulBinaryString('0101010'));  