// Write a function to calculate duration in minutes 
// between a starting time and a final time.

const startTime = "13:00";
const finalTime = "14:30";
console.log(calculateDuration(startTime, finalTime));

function calculateDuration(startTime, finalTime) {
  const [sh, sm] = startTime.split(':').map(Number);
  const [eh, em] = finalTime.split(':').map(Number);

  if (eh < sh || (eh === sh && em < sm)) {
    return "Invalid time range";
  }

  let hourDiff = eh - sh;
  let minDiff = em - sm;

  if (minDiff < 0) {
    minDiff += 60;
    hourDiff -= 1;
  }

  return hourDiff * 60 + minDiff;
}

/*
function calculateDuration(startTime, finalTime) {
  const isValid = (t) => /^\d{2}:\d{2}$/.test(t);

  if (!isValid(startTime) || !isValid(finalTime)) {
    throw new Error("Invalid time format, expected HH:MM");
  }

  const toMinutes = (t) => {
    const [h, m] = t.split(":").map(Number);
    if (h < 0 || h > 23 || m < 0 || m > 59)
      throw new Error("Hour or minute out of range");
    return h * 60 + m;
  };

  const start = toMinutes(startTime);
  const end = toMinutes(finalTime);

  if (end < start) throw new Error("Final time cannot be earlier");

  return end - start;
}

*/

