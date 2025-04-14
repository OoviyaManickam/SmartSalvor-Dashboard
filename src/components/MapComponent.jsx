import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card, CardContent, Typography } from '@mui/material';
import L from 'leaflet';  // Import Leaflet to use icons
import 'leaflet/dist/leaflet.css';

// Optional: Customize marker icon (to ensure it displays correctly)
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function MapComponent({ lat, lon }) {
  return (
    <Card sx={{ maxWidth: 700, marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>GPS Location</Typography>
        <MapContainer center={[lat, lon]} zoom={15} style={{ height: "680px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[lat, lon]}>
            <Popup>Human Detected Here</Popup>
          </Marker>
        </MapContainer>
      </CardContent>
    </Card>
  );
}
