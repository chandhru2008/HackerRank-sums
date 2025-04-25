function timeConversion(s) {
    // Write your code here
       let e_array = [];
    let a = s.split(":");
    let b = Number(a[0]);
    let c = "PM";
    let c1 = "AM";
    let d = a[2].slice(0, 2); // Extract only the "XX" seconds part
    let e = a[2];

    // Handle 12 AM case (midnight)
    if (b == 12 && e.includes(c1)) {
        let b1 = b - 12; // Convert 12 to 00 for midnight
        let b2 = b1.toString().padStart(2, '0'); // Ensure 00 is returned
        e_array.push(b2, ":", a[1], ":", d);
        return e_array.join("");
    }
    
    // Handle PM case (convert 12-hour to 24-hour format)
    else if (b < 12 && e.includes(c)) {
        let f = b + 12; // Convert hours to 24-hour format
        let g = f.toString(); // Convert the number back to a string
        e_array.push(g, ":", a[1], ":", d);
        return e_array.join(""); // Properly join the array into a string
    }
    // Handle the AM case where no conversion is needed
    else {
        let i = s.slice(0, 8); // Ensure full "hh:mm:ss" is returned
        return i;
    }
}
console.log(timeConversion("07:05:45PM"));