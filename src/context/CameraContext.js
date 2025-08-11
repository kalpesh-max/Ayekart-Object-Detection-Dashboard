import React, { createContext, useContext, useState, useEffect } from 'react';
import apiClient from '../api/client';

const CameraContext = createContext();

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
    const fetchCameras = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get('/api/cameras');
        setCameras(Array.isArray(response.data) ? response.data : []);
        setError(null);
      } catch (err) {
        setError('Failed to fetch cameras');
        setCameras([]);
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
      const response = await apiClient.get('/api/cameras');
      setCameras(Array.isArray(response.data) ? response.data : []);
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
