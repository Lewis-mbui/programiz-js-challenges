// Write a function to convert a date from "dd-mm-yyyy" 
// format to "mm-dd-yyyy" format.

const date = "15-02-2020";
console.log(convertDateFormat(date));

function convertDateFormat(date) {
  const [day, month, year] = date.split("-");
  return `${month}-${day}-${year}`;
}

/*
function convertDateFormat(date) {
  // Validate using regex: ensure two digits, two digits, four digits
  if (!/^\d{2}-\d{2}-\d{4}$/.test(date)) {
    throw new Error("Invalid date format. Expected dd-mm-yyyy");
  }

  const [day, month, year] = date.split("-");
  return `${month}-${day}-${year}`;
}

*/
