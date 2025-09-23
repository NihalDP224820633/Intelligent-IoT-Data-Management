import React from 'react';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'chartjs-adapter-date-fns';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import FetchData from './components/FetchData';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Main content */}
        <main style={{ flex: 1 }}>
          <h1>IoT Sensors Dashboard</h1>
          <h3>Time-series Sensor Data and Correlation Analysis</h3>
          <Routes>
            <Route path="/sensorData1" element={<FetchData />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard/:id" element={<DashboardPage />} />
          </Routes>
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
