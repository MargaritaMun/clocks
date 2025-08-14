
import { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import AdminPage from './components/pages/AdminPage';
import ErrorPage from './components/pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
         <Route path="/*" element={<ErrorPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

export default App;
