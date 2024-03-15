import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from '@syncfusion/ej2-react-charts';

import { filterDataByMonth } from '../data/filterdatawithMonth';
import { useEffect, useState } from 'react';

function BarChart({ month }) {
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

  const primaryxAxis = { valueType: 'Category' };
  const legendSettings = { visible: true };

  return (
    <div>
      <ChartComponent
        id='charts'
        primaryXAxis={primaryxAxis}
        legendSettings={legendSettings}
      >
        <Inject
          services={[ColumnSeries, Tooltip, LineSeries, Legend, Category]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={filteredData}
            xName='topic'
            yName='intensity'
            name='Intensity'
            type='Column'
          />
          <SeriesDirective
            dataSource={filteredData}
            xName='topic'
            yName='likelihood'
            name='Likelihood'
            type='Column'
          />
          <SeriesDirective
            dataSource={filteredData}
            xName='topic'
            yName='relevance'
            name='Relevance'
            type='Column'
          />
          <SeriesDirective
            dataSource={filteredData}
            xName='topic'
            yName='relevance'
            name='gas'
            type='Column'
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default BarChart;
