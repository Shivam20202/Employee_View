import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import PeopleDirectoryPage from './pages/PeopleDirectory';
import PlaceholderPage from './pages/PlaceholderPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/people-directory" element={<PeopleDirectoryPage />} />
        <Route path="/home" element={<PlaceholderPage title="Home" />} />
        <Route path="/my-info" element={<PlaceholderPage title="My Info" />} />
        <Route path="/team-management" element={<PlaceholderPage title="Team Management" />} />
        <Route path="/project-setup" element={<PlaceholderPage title="Project Setup" />} />
        <Route path="/project-setup/setup-projects" element={<PlaceholderPage title="Setup Projects" />} />
        <Route path="/project-setup/templates" element={<PlaceholderPage title="Project Templates" />} />
        <Route path="/project-setup/configuration" element={<PlaceholderPage title="Configuration" />} />
        <Route path="/hiring" element={<PlaceholderPage title="Hiring" />} />
        <Route path="/report" element={<PlaceholderPage title="Report" />} />
        <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
        <Route path="/" element={<PeopleDirectoryPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;