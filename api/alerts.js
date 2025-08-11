export default function handler(req, res) {
  const alerts = [
    {
      id: 1,
      type: 'motion_detected',
      camera_id: 1,
      camera_name: 'Front Door Camera',
      timestamp: '2024-01-15T10:30:00Z',
      message: 'Motion detected at Front Door Camera',
      severity: 'medium',
      acknowledged: false
    },
    {
      id: 2,
      type: 'camera_offline',
      camera_id: 3,
      camera_name: 'Parking Lot Camera',
      timestamp: '2024-01-15T09:45:00Z',
      message: 'Parking Lot Camera is offline',
      severity: 'high',
      acknowledged: true
    }
  ];
  res.status(200).json(alerts);
}
