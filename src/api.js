export async function fetchSensorData() {
  return {
    co2: Math.floor(Math.random() * 1000 + 400),
    temperature: Math.floor(Math.random() * 15 + 20),
    humidity: Math.floor(Math.random() * 40 + 40),
    motion: Math.round(Math.random()),
    detected: Math.random() > 0.6 ? "Yes" : "No",
    lat: 0,  
    lon: 0  
  };
}

  