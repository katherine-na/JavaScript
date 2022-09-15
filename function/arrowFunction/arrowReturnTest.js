const convertYearToWeeks = (year) => {
  const monthInYear = 12;
  const weeksInMonth = 4.34;
  const result = year * (weeksInMonth * monthInYear);
  return Math.round(result);
};

const convertYearToWeeks2 = (year) => {
  const monthInYear = 12;
  const weeksInMonth = 4;
  const result = year * (weeksInMonth * monthInYear);
};

console.log(difference(5, 3));
console.log(convertYearToWeeks(1));
console.log(convertYearToWeeks2(1));
