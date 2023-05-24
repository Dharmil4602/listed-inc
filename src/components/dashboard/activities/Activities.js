import React from "react";
import "./activities.css";
import Chart from 'react-google-charts'

const LineData = [
  ['x', 'Guest', 'User'],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
]
const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'Popularity',
  },
  series: {
    1: { curveType: 'function' },
  },
}

function Activities() {
  return (
    <div className="activities-container">
      <h2>Activities</h2>
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
    </div>
  );
}

export default Activities;
