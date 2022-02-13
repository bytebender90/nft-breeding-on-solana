import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

interface ILineChartProps {
  data: number[];
  label: string[];
}

const options = {
  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        color: 'rgb(255, 99, 132)',
      },
    },
  },
};

const LineChart = (props: ILineChartProps) => {
  const { data, label } = props;
  const chartData = useMemo(() => {
    return {
      labels: label,
      datasets: [
        {
          data: data,
          fill: false,
          borderColor: 'rgb(118, 37, 63)',
          tension: 0.1,
        },
      ],
    };
  }, [data, label]);
  return <Line data={chartData} options={options} />;
};

export default LineChart;
