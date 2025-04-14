import React from 'react';
import { Card, CardContent, Typography, Stack } from '@mui/material';

export default function SensorCard({ data }) {
  return (
    <Card sx={{ maxWidth: 700, marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Sensor Data
        </Typography>

        <Stack spacing={1}>
          <Typography>CO₂: {data.co2} ppm</Typography>
          <Typography>Temperature: {data.temperature} °C</Typography>
          <Typography>Humidity: {data.humidity} %</Typography>
          <Typography>Motion: {data.motion ? "Detected" : "None"}</Typography>
          <Typography sx={{ color: data.detected === "Yes" ? 'green' : 'gray' }}>
  <b>Presence:</b> <b>{data.detected}</b>
</Typography>

          <Typography>GPS: {data.lat}, {data.lon}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

