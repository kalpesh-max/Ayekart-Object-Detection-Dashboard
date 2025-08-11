import React from 'react';
import { useDetections } from '../context/DetectionContext';
import { CheckCircle, AlertTriangle, Clock, HardDrive } from 'lucide-react';

const SystemStatus = () => {
  const { stats, loading } = useDetections();

  if (loading) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
        <div className="animate-pulse">
          <div className="h-5 bg-gray-300 dark:bg-slate-600 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray-300 dark:bg-slate-600 rounded-full"></div>
                <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const statusItems = [
    {
      label: 'System Status',
      value: stats.system_status,
      icon: stats.system_status === 'Online' ? CheckCircle : AlertTriangle,
      color: stats.system_status === 'Online' ? 'text-green-500' : 'text-red-500',
      bgColor: stats.system_status === 'Online' ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
    },
    {
      label: 'Recording Time',
      value: stats.recording_time,
      icon: Clock,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900'
    },
    {
      label: 'Storage Used',
      value: stats.storage_used,
      icon: HardDrive,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900'
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
        System Status
      </h3>
      
      <div className="space-y-4">
        {statusItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${item.bgColor}`}>
                  <Icon className={`h-4 w-4 ${item.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.label}
                </span>
              </div>
              <span className={`text-sm font-semibold ${item.color}`}>
                {item.value}
              </span>
            </div>
          );
        })}
      </div>

      {/* System Health Indicator */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-600">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            System Health
          </span>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">
              Excellent
            </span>
          </div>
        </div>
        
        {/* Health Bar */}
        <div className="mt-2 w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;
