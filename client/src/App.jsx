import { BrowserRouter, Outlet, Route, Routes } from 'react-router';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import AdminPage from './components/pages/AdminPage';
import Ololopage from './components/pages/Ololopage';
import AiPage from './components/pages/AiPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/ololo" element={<Ololopage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/ai" element={<AiPage />} />
      </Route>
    </Routes>
  );
}

export default App;
