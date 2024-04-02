import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RandomPic from "./pages/RandomPic";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";

function App() {
  let [user, setUser] = useState("John");
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="login" element = {<LoginPage />} />
          <Route path="random" element = {<RandomPic />} />
          <Route path="*" element = {<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;