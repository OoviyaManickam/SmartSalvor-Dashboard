import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import alertSound from '../assets/alert.mp3';

import { Alert, Collapse, Typography, Box } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function SoundAlert({ detected }) {
  const [play] = useSound(alertSound, { volume: 0.5 });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (detected === "Yes") {
      setShowAlert(true);
      play();

      // Auto-hide after 8 seconds
      const timer = setTimeout(() => setShowAlert(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [detected, play]);

  return (
    <Collapse in={showAlert}>
      <Box sx={{ my: 2 }}>
        <Alert
          severity="error"
          iconMapping={{
            error: <WarningAmberIcon fontSize="inherit" />,
          }}
          sx={{
            fontSize: '1.1rem',
            fontWeight: 500,
            border: '2px solid red',
            animation: 'pulse 1s infinite',
          }}
        >
          🚨 <strong>Human Presence Detected!</strong> Location is being tracked & sent.
        </Alert>
      </Box>

      {/* Optional: Pulse animation */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7); }
            70% { transform: scale(1.02); box-shadow: 0 0 10px 10px rgba(255, 0, 0, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }
          }
        `}
      </style>
    </Collapse>
  );
}
