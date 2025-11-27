// Write a function to calculate duration in minutes 
// between a starting time and a final time.

const startTime = "13:00";
const finalTime = "14:30";
console.log(calculateDuration(startTime, finalTime));

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

/*
function calculateDuration(startTime, finalTime) {

  const getHour = (timeStr) => parseInt(timeStr.slice(0, 2));
  const getMinutes = (timeStr) => parseInt(timeStr.slice(3, 5));
  const hoursToMinutes = (hours) => hours * 60;

  const hStart = getHour(startTime);
  const mStart = getMinutes(startTime);
  const hFinal = getHour(finalTime);
  const mFinal = getMinutes(finalTime);
  let mDifference = 0;
  let hDifference = 0;
  
  if (hFinal < hStart || (hFinal === hStart && mFinal < mStart)) 
    throw new Error('Final time cannot be less than start time');

  if (mFinal < mStart) {
    mDifference = (mFinal + 60) - mStart;
    hDifference = (hFinal - 1) - hStart;
    return hoursToMinutes(hDifference) + mDifference;
  }

  hDifference = hFinal - hStart;
  mDifference = mFinal - mStart;
  return hoursToMinutes(hDifference) + mDifference;
}
*/

/*
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
*/

