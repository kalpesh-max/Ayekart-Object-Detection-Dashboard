import React, { createContext, useContext, useState, useEffect } from 'react';
import apiClient from '../api/client';

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [detectionsRes, alertsRes, statsRes] = await Promise.all([
          apiClient.get('/api/detections'),
          apiClient.get('/api/alerts'),
          apiClient.get('/api/stats')
        ]);
        setDetections(Array.isArray(detectionsRes.data) ? detectionsRes.data : []);
        setAlerts(Array.isArray(alertsRes.data) ? alertsRes.data : []);
        setStats(statsRes.data || {});
      } catch (err) {
        console.error('Failed to fetch detection data:', err);
        setDetections([]);
        setAlerts([]);
        setStats({
          total_detections: 0,
          today_detections: 0,
          motion_events: 0,
          recording_time: '0h 0m',
          storage_used: '0 GB',
          system_status: 'Offline'
        });
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
      total_detections: (prev.total_detections || 0) + 1,
      today_detections: (prev.today_detections || 0) + 1
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
      const [detectionsRes, alertsRes, statsRes] = await Promise.all([
        apiClient.get('/api/detections'),
        apiClient.get('/api/alerts'),
        apiClient.get('/api/stats')
      ]);
      setDetections(Array.isArray(detectionsRes.data) ? detectionsRes.data : []);
      setAlerts(Array.isArray(alertsRes.data) ? alertsRes.data : []);
      setStats(statsRes.data || {});
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
