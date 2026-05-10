import React from 'react';
import ReactECharts from 'echarts-for-react';
import { ChartContainer } from './ChartContainer';
import { userDemographics } from '../data/mockData';

export const UserDemographicsChart: React.FC = () => {
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
        name: '年龄段分布',
        type: 'pie',
        radius: ['35%', '60%'],
        center: ['50%', '55%'],
        data: userDemographics.age,
        label: {
          show: true,
          color: '#cbd5e1',
          formatter: '{b}: {c}'
        },
        itemStyle: {
            borderColor: '#020617',
            borderWidth: 2,
            borderRadius: 4
        },
        // Cool spectrum
        color: ['#c084fc', '#a78bfa', '#818cf8', '#60a5fa', '#38bdf8']
      }
    ]
  };

  return (
    <ChartContainer title="用户画像 (年龄段分布)">
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </ChartContainer>
  );
};
