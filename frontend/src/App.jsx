// ✅ App.jsx
// This is the entry point for your app.
// Now uses HomePage as the main component.

import React from 'react';
import HomePage from './components/pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LinkedInLinkInput from './components/pages/LinkedInLinkInput';
import NavBar from './components/atoms/NavBar/NavBar';

function App() {
   return (
     <Router>
      <NavBar /> {/* ✅ Now inside Router */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/linkedin" element={<LinkedInLinkInput />} />
      </Routes>
    </Router>
  );
}

export default App;
