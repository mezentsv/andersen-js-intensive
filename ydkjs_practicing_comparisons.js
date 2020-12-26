// scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting duration (number of minutes). It should return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd); return false if the meeting violates the work day bounds.

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  let startTimeHours = startTime.split(":")[0];
  let startTimeMinutes = startTime.split(":")[1];

  let durationHours = Math.floor(durationMinutes / 60);
  let endTimeHours = Number(startTimeHours) + durationHours;
  let endTimeMinutes =
    Number(startTimeMinutes) + (durationMinutes - durationHours * 60);

  if (endTimeMinutes >= 60) {
    endTimeHours++;
    endTimeMinutes = endTimeMinutes - 60;
  }

  let meetingStartTime = `${startTimeHours
    .toString()
    .padStart(2, "0")}:${startTimeMinutes.toString().padStart(2, "0")}`;
  let meetingEndTime = `${endTimeHours
    .toString()
    .padStart(2, "0")}:${endTimeMinutes.toString().padStart(2, "0")}`;

  if (dayStart > meetingStartTime || dayEnd < meetingEndTime) {
    return false;
  }
  return true;
}

scheduleMeeting("7:00", 15); // false
scheduleMeeting("07:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:00", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false
