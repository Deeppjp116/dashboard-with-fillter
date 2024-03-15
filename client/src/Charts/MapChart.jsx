import { world_map } from '../data/worldMap';
import fetchData from '../data/output';

const data = fetchData();

import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  Inject,
  MapsTooltip,
  BubblesDirective,
  BubbleDirective,
  Bubble,
  Marker,
} from '@syncfusion/ej2-react-maps';
import { useEffect, useState } from 'react';

const MapChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndSetData();
  }, []);

  if (!data) {
    // Data is not yet available, return loading indicator or null
    return null;
  }

  return (
    <MapsComponent titleSettings={{ text: 'World map with intensity' }}>
      <Inject services={[Marker, Bubble, MapsTooltip]} />
      <LayersDirective>
        <LayerDirective
          tooltipSettings={{
            visible: true,
            valuePath: 'name',
          }}
          shapeData={world_map}
          shapeDataPath='country'
          shapePropertyPath='name'
          // dataSource={data}
        >
          <BubblesDirective>
            <BubbleDirective
              visible={true}
              valuePath='intensity'
              animationDuration={2}
              opacity={0.8}
              minRadius={10}
              maxRadius={30}
              dataSource={data}
              tooltipSettings={{
                visible: true,
                valuePath: 'intensity',
                template: '<div>${intensity}</div>',
              }}
            />
          </BubblesDirective>
        </LayerDirective>
      </LayersDirective>
      <Inject />
    </MapsComponent>
  );
};

export default MapChart;
