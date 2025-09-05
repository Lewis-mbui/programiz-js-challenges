console.log(dashingNumbers(0));

function dashingNumbers(num) {
    return num.toString()
    .split("")
    .join("-");
}