function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
        let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";
    
    let num = 1, lc = 1, uc = 1, sp = 1; 

    for (let i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) num = 0;
        else if (lower_case.includes(password[i])) lc = 0;
        else if (upper_case.includes(password[i])) uc = 0;
        else if (special_characters.includes(password[i])) sp = 0;
    }

    let totalRequired = num + lc + uc + sp;
    return Math.max(totalRequired, 6 - n);

}
console.log(minimumNumber(3,'Ab1'));