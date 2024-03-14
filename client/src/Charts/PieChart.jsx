import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
} from '@syncfusion/ej2-react-charts';
import { data } from '../data/output';

function PieChart() {
  // Function to extract month from date string
  function getMonthFromDate(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // Adding 1 since getMonth() returns 0-indexed months
    return month;
  }

  // Function to filter data based on month
  function filterDataByMonth(month) {
    return data.filter((entry) => getMonthFromDate(entry.added) === month);
  }

  // Function to generate array of filtered data for all months
  function generateMonthlyDataArray() {
    const monthlyDataArray = [];
    for (let month = 1; month <= 12; month++) {
      const filteredData = filterDataByMonth(month);
      monthlyDataArray.push(filteredData);
    }
    return monthlyDataArray;
  }

  // Example: Generate array of filtered data for all months
  const allMonthsData = generateMonthlyDataArray();
  console.log('Filtered data for all months:', allMonthsData);
  return (
    <AccumulationChartComponent id='charts'>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={data}
          xName='topic'
          yName='intensity'
          radius='100%'
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}
export default PieChart;
