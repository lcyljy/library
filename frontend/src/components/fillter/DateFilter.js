const today = new Date();

const month = today.getMonth() + 1;
const year = today.getFullYear();
const day = today.getDate();

const checkMonth = String(month).padStart(2, "0");
const checkDay = String(day).padStart(2, "0");
const startDt = `startDt=${year}-${checkMonth}-${checkDay}`;
const endDt = `endtDt=${year}-${checkMonth}-${checkDay}`;

const DateFilter = (props) => {};

export { month, year, day, checkMonth, checkDay, startDt, endDt };
export default DateFilter;
