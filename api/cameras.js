export default function handler(req, res) {
  const cameras = [
    {
      id: 1,
      name: 'Front Door Camera',
      location: 'Main Entrance',
      status: 'online',
      ip: '192.168.1.100',
      rtsp_url: 'rtsp://192.168.1.100:554/stream1',
      last_motion: '2024-01-15T10:30:00Z',
      recording_status: 'recording',
      storage_used: '2.3 GB',
      storage_total: '10 GB'
    },
    {
      id: 2,
      name: 'Backyard Camera',
      location: 'Garden Area',
      status: 'online',
      ip: '192.168.1.101',
      rtsp_url: 'rtsp://192.168.1.101:554/stream1',
      last_motion: '2024-01-15T10:25:00Z',
      recording_status: 'idle',
      storage_used: '1.8 GB',
      storage_total: '10 GB'
    },
    {
      id: 3,
      name: 'Parking Lot Camera',
      location: 'Vehicle Area',
      status: 'offline',
      ip: '192.168.1.102',
      rtsp_url: 'rtsp://192.168.1.102:554/stream1',
      last_motion: '2024-01-15T09:45:00Z',
      recording_status: 'error',
      storage_used: '0.5 GB',
      storage_total: '10 GB'
    }
  ];
  res.status(200).json(cameras);
}
