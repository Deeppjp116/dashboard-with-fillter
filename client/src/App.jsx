import BarChart from './Charts/BarChart';
import MapChart from './Charts/MapChart';
import PieChart from './Charts/PieChart';
import './App.css';
import { useState } from 'react';

function App() {
  const [selectedMonth, setSelectedMonth] = useState(1); // Default to January

  const handleMonthChange = (event) => {
    const month = parseInt(event.target.value);
    setSelectedMonth(month);
  };
  console.log(selectedMonth);
  return (
    <>
      <div>
        <BarChart month={selectedMonth} />
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
          {/* Add options for other months */}
        </select>

        {/* <PieChart />
          <MapChart /> */}
      </div>
    </>
  );
}

export default App;
