import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const StatusBanner = ({ lastUpdated }) => {
  const [secondsAgo, setSecondsAgo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsAgo(Math.floor((Date.now() - lastUpdated) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [lastUpdated]);

  return (
    <Paper elevation={7} sx={{ p: 2, mb: 2, backgroundColor: '#e3f2fd' }}>
      <Typography variant="body1">
        🔄 Last updated {secondsAgo} seconds ago
      </Typography>
    </Paper>
  );
};

export default StatusBanner;
