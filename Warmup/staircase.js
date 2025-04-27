function staircase(n) {
    // Write your code here
    let pattern = "#";
for(let i = 1; i <=n; i++){
    let space = "";
    for(let j = n-i; 1<=j; j--){
        space+=" ";
    }

    console.log(space+pattern);
        pattern+="#";
}
}
staircase(4);