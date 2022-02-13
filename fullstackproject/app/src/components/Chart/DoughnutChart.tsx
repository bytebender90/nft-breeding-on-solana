import React, { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';

interface IDoughnutChartProps {
  data: number[];
  label: string[];
}

const options = {
  borderColor: 'rgba(0, 0, 0, 0.1)',
  plugins: {
    legend: {
      display: false,
      labels: {
        color: 'rgb(255, 99, 132)',
      },
    },
  },
};

const DoughnutChart = (props: IDoughnutChartProps) => {
  const { data, label } = props;
  const chartData = useMemo(() => {
    return {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: ['#B0B0B0', '#000000', '#767676'],
          hoverOffset: 4,
        },
      ],
    };
  }, [data, label]);
  return <Doughnut data={chartData} options={options} />;
};

export default DoughnutChart;
