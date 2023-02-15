function timeToEat(currentTime) {
  let nextMeal;
  if (currentTime.toLowerCase().includes("a.m.")) {
    if (currentTime < "7:00 a.m.") {
      nextMeal = "Breakfast";
    } else if (currentTime < "12:00 p.m.") {
      nextMeal = "Lunch";
    } else {
      nextMeal = "Dinner";
    }
  } else {
    if (currentTime < "7:00 p.m.") {
      nextMeal = "Dinner";
    } else if (currentTime < "12:00 a.m.") {
      nextMeal = "Breakfast";
    } else {
      nextMeal = "Lunch";
    }
  }
  let nextMealTime;
  switch (nextMeal) {
    case "Breakfast":
      nextMealTime = "7:00 a.m.";
      break;
    case "Lunch":
      nextMealTime = "12:00 p.m.";
      break;
    case "Dinner":
      nextMealTime = "7:00 p.m.";
      break;
  }
  return timeDiff(currentTime, nextMealTime);
}
function timeDiff(time1, time2) {
  let hours1 = parseInt(time1.split(":")[0]);
  let hours2 = parseInt(time2.split(":")[0]);
  let minutes1 = parseInt(time1.split(":")[1].split(" ")[0]);
  let minutes2 = parseInt(time2.split(":")[1].split(" ")[0]);
  let period1 = time1.split(":")[1].split(" ")[1];
  let period2 = time2.split(":")[1].split(" ")[1];
  if (period1 === "p.m." && hours1 !== 12) {
    hours1 += 12;
  }
  if (period2 === "p.m." && hours2 !== 12) {
    hours2 += 12;
  }
  if (period1 === "a.m." && hours1 === 12) {
    hours1 = 0;
  }
  if (period2 === "a.m." && hours2 === 12) {
    hours2 = 0;
  }

  let totalMinutes1 = hours1 * 60 + minutes1;
  let totalMinutes2 = hours2 * 60 + minutes2;
  let diff = Math.abs(totalMinutes2 - totalMinutes1);

  let hours = Math.floor(diff / 60);
  let minutes = diff % 60;

  return [hours, minutes];
}

console.log(timeToEat("2:00 p.m."));
