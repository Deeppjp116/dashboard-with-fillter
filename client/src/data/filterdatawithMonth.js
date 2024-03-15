// dataUtils.js

import fetchData from './output';

// Function to extract month from date string
function getMonthFromDate(dateString) {
  const date = new Date(dateString);
  return date.getMonth() + 1; // Adding 1 since getMonth() returns 0-indexed months
}

// Function to fetch data and return it
export async function getData() {
  const fetchedData = await fetchData();
  // console.log(fetchedData);
  return fetchedData;
}

// Function to filter data based on month
export async function filterDataByMonth(month) {
  const data = await getData(); // Wait for data to be fetched
  // console.log(data);
  return data.filter((entry) => getMonthFromDate(entry.added) === month);
}

// Function to generate array of filtered data for all months
export async function generateMonthlyDataArray() {
  const monthlyDataArray = [];
  for (let month = 1; month <= 12; month++) {
    const filteredData = await filterDataByMonth(month); // Wait for filtered data
    monthlyDataArray.push(...filteredData); // Concatenating the filtered data for each month
  }
  return monthlyDataArray;
}
