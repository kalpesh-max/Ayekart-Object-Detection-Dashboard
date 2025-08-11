import React from 'react';
import { useDetections } from '../context/DetectionContext';
import { 
  Activity, 
  Video, 
  Clock, 
  HardDrive, 
  AlertTriangle, 
  CheckCircle 
} from 'lucide-react';

const StatsCards = () => {
  const { stats, loading } = useDetections();

  const statCards = [
    {
      name: 'Total Detections',
      value: stats.total_detections,
      icon: Activity,
      color: 'bg-blue-500',
      textColor: 'text-blue-500'
    },
    {
      name: 'Today\'s Detections',
      value: stats.today_detections,
      icon: Video,
      color: 'bg-green-500',
      textColor: 'text-green-500'
    },
    {
      name: 'Motion Events',
      value: stats.motion_events,
      icon: Activity,
      color: 'bg-purple-500',
      textColor: 'text-purple-500'
    },
    {
      name: 'Recording Time',
      value: stats.recording_time,
      icon: Clock,
      color: 'bg-yellow-500',
      textColor: 'text-yellow-500'
    },
    {
      name: 'Storage Used',
      value: stats.storage_used,
      icon: HardDrive,
      color: 'bg-red-500',
      textColor: 'text-red-500'
    },
    {
      name: 'System Status',
      value: stats.system_status,
      icon: stats.system_status === 'Online' ? CheckCircle : AlertTriangle,
      color: stats.system_status === 'Online' ? 'bg-green-500' : 'bg-red-500',
      textColor: stats.system_status === 'Online' ? 'text-green-500' : 'text-red-500'
    }
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 animate-pulse">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 dark:bg-slate-600 rounded-full"></div>
              <div className="ml-4 flex-1">
                <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-3/4"></div>
                <div className="h-6 bg-gray-300 dark:bg-slate-600 rounded w-1/2 mt-2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.name}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
                <Icon className={`h-6 w-6 ${stat.textColor}`} />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.name}
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
