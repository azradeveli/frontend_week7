function studentStatus() {
    var vize = parseFloat(prompt("Enter Your Midterm Exam Grade: "));
    var final = parseFloat(prompt("Enter Your Final Exam Grade: "));
    var avg = (vize * 0.4) + (final * 0.6);
    if (avg < 50) {
        alert("The student has failed the course with an average of " + avg);
    } else {
        alert("The student passed the course with an average of " + avg);
    }
}
studentStatus();