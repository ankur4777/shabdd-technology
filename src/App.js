
import './App.css';
import NavMain from './component/nav/navmain/NavMain';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import {Routes,Route} from 'react-router-dom';
import About from './pages/about/About';
import WebDevelopment from './pages/AllServices/webdevelopment/WebDevelopment';
import WebApplication from './pages/AllServices/webApplication/WebApplication';
import DigitalMarketing from './pages/AllServices/digitalMarketing/DigitalMarketing';
import Seo from './pages/AllServices/seo/Seo';
import MetaADS from './pages/AllServices/metaAds/MetaADS';
import Graphic from './pages/AllServices/graphic/Graphic';
import YoutubeAds from './pages/AllServices/youtubeAds/YoutubeAds';
function App() {
  return (

    <>
    <div className="App">
      
      <NavMain />
      <Routes>

      <Route path="/" element={ <Home/>}/>
      <Route path="about" element={ <About/>}/>
      <Route path="services/web-development" element={ <WebDevelopment/>}/>
      <Route path="services/web-application" element={ <WebApplication/>}/>
      <Route path="services/digital-marketing" element={ <DigitalMarketing/>}/>
      <Route path="services/seo" element={ <Seo/>}/>
      <Route path="services/meta-ads" element={ <MetaADS/>}/>
      <Route path="services/graphic-designing" element={ <Graphic/>}/>
      <Route path="services/youtube-ads" element={ <YoutubeAds/>}/>

      </Routes>
     
      
    </div>
    <Footer />
    </>
  );
}

export default App;
