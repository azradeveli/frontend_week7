
let parallelogram = "";
var height = parseInt(prompt("Enter the height of the parallelogram."));
var baseL = parseInt(prompt("Enter the base length of the parallelogram."));

for (let i = 0; i < baseL; i++) {
    for (let k = 0; k < (baseL-i); k++) {
        parallelogram += " ";
    }

    for (k = 0; k < height; k++) {
         parallelogram+= "+";
    }
    parallelogram += "\n";
}
console.log(parallelogram);

