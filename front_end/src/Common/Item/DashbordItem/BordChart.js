import React from 'react';
import styled from 'styled-components';
import ChartistGraph from 'react-chartist';

const DashbordChart = styled.div`
  & .ct-series-a .ct-bar, .ct-series-a .ct-line, .ct-series-a .ct-point, .ct-series-a .ct-slice-donut {
    stroke: #1DE6BA;
  }
`

export default () => {
  
  var chartData = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    series: [
      {
        data: [300, 200, 340, 400, 200, 600, 800]
      }
    ]
  };

  var options = {
    high: 800,
    low: 0,
    color: "black",
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 1 === 0 ? value : null;
      }
    }
  };

  var type = 'Line'

  return (
    <DashbordChart>
      <ChartistGraph data={chartData} options={options} type={type} style={{height: 300, borderWidth: 1, borderColor: "red"}} />
    </DashbordChart>
  )
}