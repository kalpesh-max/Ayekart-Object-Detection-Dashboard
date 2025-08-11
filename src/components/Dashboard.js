import React from 'react';
import StatsCards from './StatsCards';
import CameraGrid from './CameraGrid';
import RecentDetections from './RecentDetections';
import AlertsPanel from './AlertsPanel';
import SystemStatus from './SystemStatus';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Dashboard Overview
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Real-time monitoring and analytics for your CCTV system
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Refresh Data
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Camera Grid - Takes 2/3 of the width */}
        <div className="lg:col-span-2">
          <CameraGrid />
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* System Status */}
          <SystemStatus />

          {/* Recent Detections */}
          <RecentDetections />

          {/* Alerts Panel */}
          <AlertsPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
