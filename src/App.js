
import './App.css';
import NavMain from './component/nav/navmain/NavMain';
import Poster from './component/poster/Poster';
import Services from './component/service/Services';
import Partner from './component/partner/partner.jsx';
import Reviews from './component/reviews/Reviews';
import Blog from './component/blog/Blog.jsx';

function App() {
  return (
    <div className="App">
      
      <NavMain />
      <Poster />
      <Services />
      <Partner />
      <Reviews />
      <Blog/>
      
    </div>
  );
}

export default App;
