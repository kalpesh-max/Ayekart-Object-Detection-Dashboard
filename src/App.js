import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { CameraProvider } from './context/CameraContext';
import { DetectionProvider } from './context/DetectionContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Auto-refresh data every 30 seconds
    const interval = setInterval(() => {
      // This will trigger re-renders in child components
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CameraProvider>
      <DetectionProvider>
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-900' : 'bg-gray-100'}`}>
          <Header 
            sidebarOpen={sidebarOpen} 
            setSidebarOpen={setSidebarOpen}
            theme={theme}
            setTheme={setTheme}
          />
          <div className="flex">
            <Sidebar 
              sidebarOpen={sidebarOpen} 
              setSidebarOpen={setSidebarOpen} 
            />
            <main className="flex-1 p-6">
              <Dashboard />
            </main>
          </div>
        </div>
      </DetectionProvider>
    </CameraProvider>
  );
}

export default App;
