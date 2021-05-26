export function displayTime(timestamp) {
  let date = new Date(+timestamp);
  let dateNow = new Date();
  let deltaT = dateNow.getTime() - date.getTime();
  let differenceInHours = deltaT / (1000 * 3600);

  if (differenceInHours < 24) {
    return `Today: ${date.toLocaleTimeString()}`;
  } else {
    return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
  }
}
