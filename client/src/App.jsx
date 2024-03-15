import BarChart from './Charts/BarChart';
import MapChart from './Charts/MapChart';
import PieChart from './Charts/PieChart';
import { useState } from 'react';
import './App.css';
import GridMap from './Charts/GridMap';

function App() {
  const [selectedMonth, setSelectedMonth] = useState(1); // Default to January

  const handleMonthChange = (event) => {
    const month = parseInt(event.target.value);
    setSelectedMonth(month);
  };

  return (
    <>
      <div className='parent'>
        <div className='Mapchart'>
          <MapChart month={selectedMonth} />
        </div>
        <div className='BarChart'>
          <BarChart month={selectedMonth} />
        </div>
        {/* <div className='Piechart'>
          <PieChart month={selectedMonth} />
        </div> */}
      </div>

      <select value={selectedMonth} onChange={handleMonthChange}>
        <option value={1}>January</option>
        <option value={2}>February</option>
        <option value={3}>March</option>
        <option value={4}>April</option>
        <option value={5}>MAy</option>
        <option value={6}>jun</option>
        <option value={7}>July</option>
        <option value={8}>ogest</option>
        <option value={9}>september</option>
        <option value={10}>Otomber</option>
        <option value={11}>November</option>
        <option value={12}>desember</option>
      </select>
      <div style={{ marginTop: '300px' }}>
        <GridMap />
      </div>
    </>
  );
}

export default App;
