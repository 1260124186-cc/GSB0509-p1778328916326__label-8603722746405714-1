import React from 'react';
import ReactECharts from 'echarts-for-react';
import { ChartContainer } from './ChartContainer';
import { salesTrendData } from '../data/mockData';

export const SalesTrendChart: React.FC = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: salesTrendData.dates,
      axisLabel: {
        color: '#ccc'
      },
      axisLine: {
        lineStyle: {
          color: '#333'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#ccc'
      },
      splitLine: {
        lineStyle: {
          color: '#333'
        }
      }
    },
    series: [
      {
        name: '销售额',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 3,
          color: '#38bdf8' // Sky 400
        },
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
            color: '#020617',
            borderColor: '#38bdf8',
            borderWidth: 2
        },
        areaStyle: {
          opacity: 0.3,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(56, 189, 248, 0.5)'
            }, {
                offset: 1, color: 'rgba(56, 189, 248, 0.0)'
            }],
            global: false
          }
        },
        data: salesTrendData.values
      }
    ]
  };

  return (
    <ChartContainer title="近七日销售趋势">
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </ChartContainer>
  );
};
