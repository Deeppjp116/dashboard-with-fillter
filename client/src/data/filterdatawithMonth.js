// dataUtils.js

import { data } from '../data/output';

// Function to extract month from date string
function getMonthFromDate(dateString) {
  const date = new Date(dateString);
  return date.getMonth() + 1; // Adding 1 since getMonth() returns 0-indexed months
}

// Function to filter data based on month
export function filterDataByMonth(month) {
  return data.filter((entry) => getMonthFromDate(entry.added) === month);
}

// Function to generate array of filtered data for all months
export function generateMonthlyDataArray() {
  const monthlyDataArray = [];
  for (let month = 1; month <= 12; month++) {
    const filteredData = filterDataByMonth(month);
    monthlyDataArray.push(...filteredData); // Concatenating the filtered data for each month
  }
  return monthlyDataArray;
}
