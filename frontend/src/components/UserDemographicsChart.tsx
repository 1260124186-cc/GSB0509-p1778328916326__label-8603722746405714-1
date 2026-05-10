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
      top: '2%',
      left: 'center',
      textStyle: {
        color: '#ccc'
      }
    },
    series: [
      {
        name: '性别分布',
        type: 'pie',
        radius: ['20%', '35%'],
        center: ['28%', '60%'],
        data: userDemographics.gender,
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
        color: ['#60a5fa', '#f472b6']
      },
      {
        name: '年龄段分布',
        type: 'pie',
        radius: ['35%', '55%'],
        center: ['72%', '60%'],
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
        color: ['#c084fc', '#a78bfa', '#818cf8', '#38bdf8', '#2dd4bf']
      }
    ]
  };

  return (
    <ChartContainer title="用户画像 (性别 & 年龄段)">
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </ChartContainer>
  );
};
