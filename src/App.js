// src/App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HowItWorks from './Components/HowItWorks';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Technologies from './Components/Technologies';
import Careers from './Components/Careers';
import Footer from './Components/Footer';


function App() {  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        
        <Routes>
          <Route path="/" element={<HowItWorks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
