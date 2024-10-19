import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AOS from 'aos';
import About from "./components/Incidents";
import Location from "./components/Location";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="" element={<Navbar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/incidents" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cypher" element={<SignUp />} />
          <Route path="*" element={<Error />}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
