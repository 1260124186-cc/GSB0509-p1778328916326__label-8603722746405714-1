import React from 'react';
import ReactECharts from 'echarts-for-react';
import { ChartContainer } from './ChartContainer';
import { priceRangeData } from '../data/mockData';

export const SalesPriceChart: React.FC = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      top: '5%',
      left: 'center',
      textStyle: {
        color: '#ccc'
      }
    },
    series: [
      {
        name: '价格区间销量',
        type: 'pie',
        radius: ['35%', '60%'],
        center: ['50%', '55%'],
        itemStyle: {
          borderRadius: 4,
          borderColor: '#020617', // Match bg
          borderWidth: 2
        },
        label: {
          show: true,
          color: '#cbd5e1',
          formatter: '{b}: {c}'
        },
        // Enterprise palette
        color: ['#c084fc', '#a78bfa', '#818cf8', '#60a5fa', '#38bdf8'],
        data: priceRangeData
      }
    ]
  };

  return (
    <ChartContainer title="价格区间销售分布">
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </ChartContainer>
  );
};
