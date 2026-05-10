import React from 'react';
import ReactECharts from 'echarts-for-react';
import { ChartContainer } from './ChartContainer';
import { flavorData } from '../data/mockData';

export const FlavorChart: React.FC = () => {
  // Sort data just in case
  const sortedData = [...flavorData].sort((a, b) => a.value - b.value);

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      splitLine: {
        lineStyle: {
          color: '#333'
        }
      },
      axisLabel: {
        color: '#ccc'
      }
    },
    yAxis: {
      type: 'category',
      data: sortedData.map(item => item.name),
      axisLabel: {
        color: '#ccc'
      }
    },
    dataZoom: [
      {
        type: 'slider',
        yAxisIndex: 0,
        filterMode: 'empty',
        start: 50, // Show top 50% by default (since sorted asc, it's the bottom visually which are top values? No, Echarts Y axis default bottom-up?)
                   // Actually for horizontal bar, index 0 is at bottom.
                   // If I sort ascending, smallest at bottom, largest at top.
                   // I want largest at top usually.
                   // Let's set start 50 to end 100.
        end: 100,
        width: 15,
        right: 10,
        fillerColor: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'transparent',
        handleStyle: {
          color: '#fff'
        },
        textStyle: {
            color: '#ccc'
        }
      },
      {
        type: 'inside',
        yAxisIndex: 0,
        start: 50,
        end: 100
      }
    ],
    series: [
      {
        name: '热度',
        type: 'bar',
        data: sortedData.map(item => item.value),
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
                offset: 0, color: '#0ea5e9' // Sky 500
            }, {
                offset: 1, color: '#22d3ee' // Cyan 400
            }],
            global: false // default is false
          },
          borderRadius: [0, 2, 2, 0]
        }
      }
    ]
  };

  return (
    <ChartContainer title="菜品口味偏好排行">
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </ChartContainer>
  );
};
