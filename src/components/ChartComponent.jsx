import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

export default function ChartComponent({ history }) {
  const labels = history.map((_, i) => `${(i + 1) * 10}s ago`).reverse();

  const data = {
    labels,
    datasets: [
      {
        label: 'CO₂ (ppm)',
        data: history.map(d => d.co2).reverse(),
        borderColor: '#f44336',
        backgroundColor: 'rgba(244, 67, 54, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
      },
      {
        label: 'Temperature (°C)',
        data: history.map(d => d.temperature).reverse(),
        borderColor: '#2196f3',
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
      },
      {
        label: 'Humidity (%)',
        data: history.map(d => d.humidity).reverse(),
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 20,
          padding: 15
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sensor Values',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time (ago)',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      }
    }
  };

  return (
    <Card sx={{ maxWidth: 700, marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          📈 Live Sensor Trends
        </Typography>
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  );
}
