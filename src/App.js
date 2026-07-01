
import './App.css';
import NavMain from './component/nav/navmain/NavMain';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import ServicePage from './pages/AllServices/ServicePage';

function App() {
  return (
    <>
      <div className="App">
        <NavMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services/:serviceKey" element={<ServicePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
