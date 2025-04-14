// src/components/LoadingScreen.js
import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f8ff',
      }}
    >
      <CircularProgress size={80} color="primary" />
      <Typography variant="h5" sx={{ mt: 3, fontFamily: 'Poppins', color: '#1e88e5' }}>
        Loading Smart Salvor Dashboard...
      </Typography>
    </Box>
  );
}
