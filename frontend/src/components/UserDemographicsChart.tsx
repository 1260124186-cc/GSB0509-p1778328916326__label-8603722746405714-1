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
        radius: ['30%', '45%'],
        center: ['28%', '55%'],
        data: userDemographics.gender,
        label: {
          show: true,
          color: '#cbd5e1',
          formatter: '{b}: {c}'
        },
        labelLine: {
          length: 10,
          length2: 10
        },
        itemStyle: {
          borderColor: '#020617',
          borderWidth: 2,
          borderRadius: 4
        },
        color: ['#38bdf8', '#f472b6']
      },
      {
        name: '年龄段分布',
        type: 'pie',
        radius: ['30%', '45%'],
        center: ['72%', '55%'],
        data: userDemographics.age,
        label: {
          show: true,
          color: '#cbd5e1',
          formatter: '{b}: {c}'
        },
        labelLine: {
          length: 10,
          length2: 10
        },
        itemStyle: {
          borderColor: '#020617',
          borderWidth: 2,
          borderRadius: 4
        },
        color: ['#c084fc', '#a78bfa', '#818cf8', '#60a5fa', '#38bdf8']
      }
    ]
  };

  return (
    <ChartContainer title="用户画像 (性别 & 年龄)">
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </ChartContainer>
  );
};
