

import React, { useEffect, useState } from 'react';
import { fetchSensorData } from './api';
import SensorCard from './components/SensorCard';
import ChartComponent from './components/ChartComponent';
import MapComponent from './components/MapComponent';
import SoundAlert from './components/SoundAlert';
import StatusBanner from './components/StatusBanner';
import { Container, Typography, Grid } from '@mui/material';
import '@fontsource/poppins'; // or '@fontsource/orbitron'


function App() {
  const [data, setData] = useState(null);
  const [history, setHistory] = useState([]);
  const [lastUpdatedTime, setLastUpdatedTime] = useState(null);

  useEffect(() => {
    const fetchLoop = async () => {
      const newData = await fetchSensorData();
      setData(newData);
      setHistory(h => [...h.slice(-5), newData]);
      setLastUpdatedTime(Date.now());
    };

    fetchLoop();
    const interval = setInterval(fetchLoop, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 3, mb:3 }}>
      <Typography
  variant="h3"
  gutterBottom
  align="center"
  sx={{
    mb: 1,
    fontFamily: 'Poppins, sans-serif', // or 'Orbitron, sans-serif'
    fontWeight: 600,
    letterSpacing: 1.2,
    color: '#1e88e5',
  }}
>
  🌐 Smart Salvor - Dashboard
</Typography>

      {data && (
        <>
          <SoundAlert detected={data.detected} />
          

          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid size={6} item xs={12} md={6}>
              <SensorCard data={data} />
              <StatusBanner lastUpdated={lastUpdatedTime} />
              <ChartComponent history={history} />
            </Grid>

            {/* Right Column */}
            <Grid size={6} item xs={12} md={6}>
              <MapComponent lat={data.lat} lon={data.lon} />
              {/* Add more sensor visuals below */}
              {/* For example: gas sensor, light sensor etc. */}
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
}

export default App;
