function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let numOfApplesFalls = 0;
  let numOfOrangesFalls = 0;

  for (let apple of apples) {
    const positionOfTheApple = a + apple;
    if (positionOfTheApple >= s && positionOfTheApple <= t) {
      numOfApplesFalls++;
    }
  }
  console.log(numOfApplesFalls);

  for (let orange of oranges) {
    const positionOfTheOrange = b + orange;
    if (positionOfTheOrange >= s && positionOfTheOrange <= t) {
      numOfOrangesFalls++;
    }
  }
  console.log(numOfOrangesFalls);
}
