function gradingStudents(grades) {
    let finalGrades = [];

    for (let grade of grades) {
        if (grade < 38) {
            finalGrades.push(grade);
        } else {
            let remainder = grade % 5;
            if (remainder === 3) {
                finalGrades.push(grade + 2);
            } else if (remainder === 4) {
                finalGrades.push(grade + 1);
            } else {
                finalGrades.push(grade);
            }
        }
    }

    return finalGrades;
}
