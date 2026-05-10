import React from 'react';
import ReactECharts from 'echarts-for-react';
import { ChartContainer } from './ChartContainer';
import { userDemographics } from '../data/mockData';

export const UserDemographicsChart: React.FC = () => {
  const genderOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      bottom: '5%',
      left: 'center',
      textStyle: {
        color: '#ccc'
      }
    },
    series: [
      {
        name: '性别比例',
        type: 'pie',
        radius: ['40%', '65%'],
        center: ['50%', '45%'],
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
      }
    ]
  };

  const ageOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      bottom: '5%',
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
        center: ['50%', '45%'],
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
        color: ['#c084fc', '#a78bfa', '#818cf8', '#60a5fa', '#38bdf8']
      }
    ]
  };

  return (
    <ChartContainer title="用户画像">
      <div className="h-full flex flex-col md:flex-row gap-2">
        <div className="flex-1 min-h-0">
          <ReactECharts option={genderOption} style={{ height: '100%', width: '100%' }} />
        </div>
        <div className="flex-1 min-h-0">
          <ReactECharts option={ageOption} style={{ height: '100%', width: '100%' }} />
        </div>
      </div>
    </ChartContainer>
  );
};
