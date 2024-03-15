import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
} from '@syncfusion/ej2-react-charts';

import { filterDataByMonth } from '../data/filterdatawithMonth';
import { useEffect, useState } from 'react';

function PieChart({ month }) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchDataAndFilter = async () => {
      try {
        const data = await filterDataByMonth(month);
        setFilteredData(data);
      } catch (error) {
        console.error('Error fetching or filtering data:', error);
      }
    };

    fetchDataAndFilter();
  }, [month]); // Call fetchDataAndFilter whenever the month prop changes

  return (
    <AccumulationChartComponent id='charts'>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={filteredData}
          xName='topic'
          yName='intensity'
          radius='100%'
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}
export default PieChart;
