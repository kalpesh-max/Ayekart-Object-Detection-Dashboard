export default function handler(req, res) {
  const detections = [
    {
      id: 1,
      camera_id: 1,
      camera_name: 'Front Door Camera',
      timestamp: '2024-01-15T10:30:00Z',
      type: 'motion',
      confidence: 0.95,
      object_type: 'person',
      location: 'Main Entrance',
      image_url: '/api/detections/1/image',
      video_url: '/api/detections/1/video'
    },
    {
      id: 2,
      camera_id: 2,
      camera_name: 'Backyard Camera',
      timestamp: '2024-01-15T10:25:00Z',
      type: 'motion',
      confidence: 0.87,
      object_type: 'animal',
      location: 'Garden Area',
      image_url: '/api/detections/2/image',
      video_url: '/api/detections/2/video'
    },
    {
      id: 3,
      camera_id: 1,
      camera_name: 'Front Door Camera',
      timestamp: '2024-01-15T10:20:00Z',
      type: 'motion',
      confidence: 0.92,
      object_type: 'vehicle',
      location: 'Main Entrance',
      image_url: '/api/detections/3/image',
      video_url: '/api/detections/3/video'
    }
  ];
  res.status(200).json(detections);
}
