import React from 'react';
import { useCameras } from '../context/CameraContext';
import { 
  Video, 
  Wifi, 
  WifiOff, 
  HardDrive, 
  Play, 
  Pause,
  Settings,
  Eye
} from 'lucide-react';

const CameraGrid = () => {
  const { cameras, loading, updateCameraStatus } = useCameras();

  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return 'text-green-500 bg-green-100 dark:bg-green-900';
      case 'offline':
        return 'text-red-500 bg-red-100 dark:bg-red-900';
      case 'recording':
        return 'text-blue-500 bg-blue-100 dark:bg-blue-900';
      default:
        return 'text-gray-500 bg-gray-100 dark:bg-gray-900';
    }
  };

  const getRecordingStatusColor = (status) => {
    switch (status) {
      case 'recording':
        return 'text-red-500 bg-red-100 dark:bg-red-900';
      case 'idle':
        return 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900';
      case 'error':
        return 'text-red-500 bg-red-100 dark:bg-red-900';
      default:
        return 'text-gray-500 bg-gray-100 dark:bg-gray-900';
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-300 dark:bg-slate-600 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-300 dark:bg-slate-600 rounded-lg h-48"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Camera Feeds
        </h3>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cameras.map((camera) => (
          <div
            key={camera.id}
            className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 border border-gray-200 dark:border-slate-600"
          >
            {/* Camera Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Video className="h-5 w-5 text-gray-500" />
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {camera.name}
                </h4>
              </div>
              <div className="flex items-center space-x-2">
                {camera.status === 'online' ? (
                  <Wifi className="h-4 w-4 text-green-500" />
                ) : (
                  <WifiOff className="h-4 w-4 text-red-500" />
                )}
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                    camera.status
                  )}`}
                >
                  {camera.status}
                </span>
              </div>
            </div>

            {/* Camera Feed Placeholder */}
            <div className="bg-gray-300 dark:bg-slate-600 rounded-lg h-32 mb-3 flex items-center justify-center">
              <div className="text-center">
                <Video className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  {camera.status === 'online' ? 'Live Feed' : 'Offline'}
                </p>
              </div>
            </div>

            {/* Camera Info */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Location:</span>
                <span className="text-gray-900 dark:text-white">{camera.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">IP Address:</span>
                <span className="text-gray-900 dark:text-white font-mono">{camera.ip}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Recording:</span>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${getRecordingStatusColor(
                    camera.recording_status
                  )}`}
                >
                  {camera.recording_status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Storage:</span>
                <span className="text-gray-900 dark:text-white">
                  {camera.storage_used} / {camera.storage_total}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Last Motion:</span>
                <span className="text-gray-900 dark:text-white">
                  {formatTimestamp(camera.last_motion)}
                </span>
              </div>
            </div>

            {/* Camera Actions */}
            <div className="flex space-x-2 mt-4">
              <button className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Eye className="h-4 w-4 mr-2" />
                View
              </button>
              <button className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CameraGrid;
