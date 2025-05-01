
function makingAnagrams(s1, s2) {
    // Write your code here   let  minimumNumberOfDeletions = 0;
  let obj = {};
    let minimumNumberOfDeletions = 0;
    for(let s1c of s1){
        if(!obj[s1c]){
            obj[s1c] = 1;
        }else{
            obj[s1c]++;
        }
    }
    
    for(let s2c of s2){
        if(!obj[s2c]){
           minimumNumberOfDeletions++; 
        }else{
            obj[s2c]--;
        }
    }
    for(let key in obj){
       minimumNumberOfDeletions+= obj[key];
    }
    return minimumNumberOfDeletions;

}
console.log(makingAnagrams('cde','abc'));