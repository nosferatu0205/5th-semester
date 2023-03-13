import Dashboard  from "./pages/Dashboard";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login"
import Home from "./pages/Home";

import AddUser from "./pages/AddUser";

function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddUser" element={<AddUser />} />
          

        </Routes>
        

      </BrowserRouter>
    </div>
    
  );
}

export default App;
