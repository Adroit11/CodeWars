function formatDuration(seconds) {
  // Complete this function
  const sec = seconds;
  if (seconds <= 0) return "now";
  const years = Math.floor(seconds / 31536000);
  seconds -= years * 31536000;
  const days = Math.floor(seconds / 86400);
  seconds -= days * 86400;
  const hrs = Math.floor(seconds / 3600);
  seconds -= hrs * 3600;
  const mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  let res = "";
  if (years > 0) res += years === 1 ? `${years} year` : `${years} years`;
  if (years > 0 && seconds % 31536000) res += `, `;
  if (years > 0 && seconds === 0) res += `, `;
  if (days > 0) res += days === 1 ? `${days} day` : `${days} days`;
  if (days > 0 && seconds % 86400) res += `, `;
  if (days > 0 && seconds === 0) res += `, `;
  if (hrs > 0) res += hrs === 1 ? `${hrs} hour` : `${hrs} hours`;
  if (hrs > 0 && seconds % 3600) res += `, `;
  if (hrs > 0 && seconds === 0 && seconds % 3600 === 0) res += ` and `;
  if (hrs > 0 && mins === 0) res += ` and`;
  if (mins > 0) res += mins === 1 ? `${mins} minute` : `${mins} minutes`;
  if (sec > 60 && sec % 60 && mins != 0) res += " and";
  if (seconds > 0)
    res +=
      seconds === 1 && sec > 60
        ? ` ${seconds} second`
        : seconds === 1
        ? `${seconds} second`
        : ` ${seconds} seconds`;
  return res;
}
