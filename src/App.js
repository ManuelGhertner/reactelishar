import React from "react";
import Navbar from  "./components/navbar/Navbar";
import {Routes, Route, useNavigate, BrowserRouter} from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/categories/:name" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
