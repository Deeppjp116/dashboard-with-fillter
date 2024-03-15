import React, { useState, useEffect } from 'react';
import {
  GridComponent,
  Filter,
  Inject,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-grids';
import './gridcss.css';
import fetchData from '../data/output';

const GridMap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
        console.log(fetchedData); // You can log the fetched data here
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAndSetData();
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <>
      <GridComponent dataSource={data} allowFiltering={true}>
        <ColumnsDirective>
          <ColumnDirective field='start_year' headerText='Start Year' />
          <ColumnDirective field='end_year' headerText='End Year' />
          <ColumnDirective field='topic' headerText='Topic' />
          <ColumnDirective field='sector' headerText='Sector' />
          <ColumnDirective field='region' headerText='Region' />
          <ColumnDirective field='pestle' headerText='PESTLE' />
          <ColumnDirective field='source' headerText='Source' />
          <ColumnDirective field='swot' headerText='SWOT' />
          <ColumnDirective field='country' headerText='Country' />
          <ColumnDirective field='city' headerText='City' />
        </ColumnsDirective>
        <Inject services={[Filter]} />
      </GridComponent>
    </>
  );
};

export default GridMap;
