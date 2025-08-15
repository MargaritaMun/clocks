import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";
import AdminPage from "./components/pages/AdminPage";
import axios from "axios";
import SigninPage from "./components/pages/SigninPage";
import Ololopage from "./components/pages/Ololopage";
import AiPage from "./components/pages/AiPage";
import ErrorPage from "./components/pages/ErrorPage";
import AboutPage from "./components/pages/AboutPage";
import axiosInstance from "./components/api/axiosInstance";
import ApplicationPage from "./components/pages/ApplicationPage";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const signinHandler = (e) => {
    e.preventDefault();
    navigate("/signin");
    const data = Object.fromEntries(new FormData(e.target));
    axiosInstance.post("/auth/signin", data).then((res) => {
      setUser(res.data.user);
      navigate("/admin");
    });
  };
 

  useEffect(() => {
    axiosInstance.get("/auth/refresh").then((res) => setUser(res.data.user));
  }, []);


  const logoutHandler = () => {
    axiosInstance.delete("/auth/logout").then(() => setUser(null));
    navigate("/");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const { userName, phoneNumber, image, description } = data;
    axiosInstance.post("/application/", {
      userName,
      phoneNumber,
      image,
      description,
    });
  };

  const navigateAbout = () => {
    navigate("/about");
  };
  return (
    <Routes>
      <Route
        element={
          <Layout
            user={user}
            logoutHandler={logoutHandler}
            navigateAbout={navigateAbout}
          />
        }
      >
        <Route path="/" element={<MainPage submitHandler={submitHandler} />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/signin"
          element={<SigninPage signinHandler={signinHandler} />}
        />
        <Route path="/ai" element={<AiPage />} />
        <Route path="/ololo" element={<Ololopage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/application" element={<ApplicationPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
