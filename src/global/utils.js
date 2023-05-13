export function getExperienceString({ start, end = undefined }) {
  const startedAt = new Date();
  const endedAt = new Date();

  startedAt.setDate(start.day);
  startedAt.setMonth(getMonthId(start.month));
  startedAt.setFullYear(start.year);
  if (end) {
    endedAt.setDate(end.day);
    endedAt.setMonth(getMonthId(end.month));
    endedAt.setFullYear(end.year);
  }

  const formattedAnswer = {
    startedAt: [
      getMonthName(startedAt.getMonth()),
      startedAt.getFullYear(),
    ].join(" "),
    endedAt: end
      ? [getMonthName(endedAt.getMonth()), endedAt.getFullYear()].join(" ")
      : "present",
  };

  let duration = calculateDateDifference(startedAt, endedAt);

  return { period: Object.values(formattedAnswer).join(" — "), duration };
}

export function getMonthName(monthId) {
  const monthsName = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  return monthsName[monthId];
}

export function getMonthId(monthName) {
  const monthsIds = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  return monthsIds[monthName];
}

export function calculateDateDifference(startDate, endDate) {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();

  const response = [];

  // Adjust for negative differences
  if (days < 0) {
    const daysInLastMonth = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      0
    ).getDate();
    months--;
    days += daysInLastMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years > 1) {
    response.push(`${years} years`);
  } else if (years === 1) {
    response.push(`${years} year`);
  }

  if (months > 1) {
    response.push(`${months} months`);
  } else if (months === 1) {
    response.push(`${months} month`);
  }

  return response.join(", ");
}
