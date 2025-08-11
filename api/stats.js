export default function handler(req, res) {
  const stats = {
    total_detections: 156,
    today_detections: 12,
    motion_events: 89,
    recording_time: '24h 15m',
    storage_used: '4.6 GB',
    system_status: 'Online'
  };
  res.status(200).json(stats);
}
