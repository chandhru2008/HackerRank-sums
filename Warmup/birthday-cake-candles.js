function birthdayCakeCandles(candles) {
    // Write your code here
    
    let tallCandle = Math.max(...candles);
    let count = 0;
    for(let i = 0; i < candles.length; i++){
        if(tallCandle == candles[i]){
            count++;
        }
    }
    return count;

}

console.log(birthdayCakeCandles([3, 2, 1, 3]));