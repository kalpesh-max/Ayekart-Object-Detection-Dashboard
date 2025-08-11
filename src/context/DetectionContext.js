import React, { createContext, useContext, useState, useEffect } from 'react';

const DetectionContext = createContext();

export const useDetections = () => {
  const context = useContext(DetectionContext);
  if (!context) {
    throw new Error('useDetections must be used within a DetectionProvider');
  }
  return context;
};

export const DetectionProvider = ({ children }) => {
  const [detections, setDetections] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [stats, setStats] = useState({
    total_detections: 0,
    today_detections: 0,
    motion_events: 0,
    recording_time: '0h 0m',
    storage_used: '0 GB',
    system_status: 'Online'
  });
  const [loading, setLoading] = useState(true);

  // Mock detection data
  const mockDetections = [
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

  // Mock alerts data
  const mockAlerts = [
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

  // Mock stats data
  const mockStats = {
    total_detections: 156,
    today_detections: 12,
    motion_events: 89,
    recording_time: '24h 15m',
    storage_used: '4.6 GB',
    system_status: 'Online'
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDetections(mockDetections);
        setAlerts(mockAlerts);
        setStats(mockStats);
      } catch (err) {
        console.error('Failed to fetch detection data:', err);
        // Fallback to mock data
        setDetections(mockDetections);
        setAlerts(mockAlerts);
        setStats(mockStats);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addDetection = (detection) => {
    setDetections(prev => [detection, ...prev]);
    setStats(prev => ({
      ...prev,
      total_detections: prev.total_detections + 1,
      today_detections: prev.today_detections + 1
    }));
  };

  const addAlert = (alert) => {
    setAlerts(prev => [alert, ...prev]);
  };

  const acknowledgeAlert = (alertId) => {
    setAlerts(prev => 
      prev.map(alert => 
        alert.id === alertId ? { ...alert, acknowledged: true } : alert
      )
    );
  };

  const refreshData = async () => {
    setLoading(true);
    try {
      // Simulate refresh
      await new Promise(resolve => setTimeout(resolve, 500));
      setDetections([...mockDetections]);
      setAlerts([...mockAlerts]);
      setStats({...mockStats});
    } catch (err) {
      console.error('Failed to refresh data:', err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    detections,
    alerts,
    stats,
    loading,
    addDetection,
    addAlert,
    acknowledgeAlert,
    refreshData
  };

  return (
    <DetectionContext.Provider value={value}>
      {children}
    </DetectionContext.Provider>
  );
};
