import React, { createContext, useContext, useState, useEffect } from 'react';

const CameraContext = createContext();

// Mock camera data - replace with real API calls
const MOCK_CAMERAS = [
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

export const useCameras = () => {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error('useCameras must be used within a CameraProvider');
  }
  return context;
};

export const CameraProvider = ({ children }) => {
  const [cameras, setCameras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchCameras = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCameras(MOCK_CAMERAS);
        setError(null);
      } catch (err) {
        setError('Failed to fetch cameras');
        setCameras(MOCK_CAMERAS); // Fallback to mock data
      } finally {
        setLoading(false);
      }
    };

    fetchCameras();
  }, []);

  const updateCameraStatus = (cameraId, status) => {
    setCameras(prev => 
      prev.map(cam => 
        cam.id === cameraId ? { ...cam, status } : cam
      )
    );
  };

  const refreshCameras = async () => {
    setLoading(true);
    try {
      // Simulate refresh
      await new Promise(resolve => setTimeout(resolve, 500));
      setCameras([...MOCK_CAMERAS]);
    } catch (err) {
      setError('Failed to refresh cameras');
    } finally {
      setLoading(false);
    }
  };

  const value = {
    cameras,
    loading,
    error,
    updateCameraStatus,
    refreshCameras
  };

  return (
    <CameraContext.Provider value={value}>
      {children}
    </CameraContext.Provider>
  );
};
