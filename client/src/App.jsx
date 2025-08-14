
import { useEffect, useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import AdminPage from './components/pages/AdminPage';
import axios, { Axios } from "axios";
import SigninPage from "./components/pages/SigninPage";
// import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorPage from './components/pages/ErrorPage';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const signinHandler = (e) => {
    e.preventDefault();
    navigate("/signin");
    const data = Object.fromEntries(new FormData(e.target));
    axios.post("/api/auth/signin", data).then((res) => {
      setUser(res.data.user);
      navigate("/admin");
    });


  };
  console.log(user)

  useEffect(()=>{
    axios.get('/api/auth/refresh').then((res)=>setUser(res.data.user))
  },[])
  const logoutHandler = () => {
    axios.delete("/api/auth/logout").then(() => setUser(null));
    navigate("/");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const { userName, phoneNumber, image, description } = data;
    axios.post("/api/application/", {
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
        <Route path="/about" />
      </Route>
    </Routes>
  );
}

export default App;
