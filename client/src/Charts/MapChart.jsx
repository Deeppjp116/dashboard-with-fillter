import { world_map } from '../data/worldMap';
import { data } from '../data/output';

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

const MapChart = () => {
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
