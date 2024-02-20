import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import OutletRoute from './Components/OutletRoute';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import CreatelandscapeVideo from './Pages/CreatelandscapeVideo';
import OutletDashboard from './Components/OutletDashboard';
import CreatelandscapeText from './Pages/CreatelandscapText';
import CreateAimusic from './Pages/AiMusic';
import CreateBackground from './Pages/CreateBackground';
import CreateSticker from './Pages/CreateSticker';
import CreateTemplate from './Pages/CreateTemplate';
import VideoGenerator from './Pages/VideoGenerator';

function RoutingPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OutletRoute />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/dashboard" element={<OutletDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="landscapeVideo" element={<CreatelandscapeVideo />} />
          <Route path="landscapeText" element={<CreatelandscapeText />} />
          <Route path="aimusic" element={<CreateAimusic />} />
          <Route path="aibackground" element={<CreateBackground />} />
          <Route path="aisticker" element={<CreateSticker />} />
          <Route path="aitemplate" element={<CreateTemplate />} />
          <Route path="videogenerate" element={<VideoGenerator/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default RoutingPage;
