import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
