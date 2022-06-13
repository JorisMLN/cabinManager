import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import './index.css';
import LoginFrame from './features/login/LoginFrame';
import HubFrame from './features/hub/HubFrame';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginFrame />} />
          <Route path="/hub" element={<HubFrame />} />
        </Routes>
      </BrowserRouter>

  </React.StrictMode>
);
