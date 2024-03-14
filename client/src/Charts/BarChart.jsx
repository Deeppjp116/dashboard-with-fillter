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
import { data } from '../data/output';

import { filterDataByMonth } from '../data/filterdatawithMonth';

function BarChart({ month }) {
  // Filter data for the selected month
  const filteredData = filterDataByMonth(month);
  const primaryxAxis = { valueType: 'Category' };
  const legendSettings = { visible: true };

  return (
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
  );
}

export default BarChart;
