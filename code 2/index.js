const speed = parseInt(prompt("Enter the speed of the car (in km/h):"));

const speedLimit = 70;
const demeritPointsPerUnit = 5;
const demeritPointsThreshold = 12;

if (speed < speedLimit) {
  console.log("Ok");
} else {
  const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerUnit);

  if (demeritPoints >= demeritPointsThreshold) {
    console.log(`License suspended. Total demerit points: ${demeritPoints}`);
  } else {
    console.log(`Demerit points: ${demeritPoints}`);
  }
}
