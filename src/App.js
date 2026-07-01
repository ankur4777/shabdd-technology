
import './App.css';
import NavMain from './component/nav/navmain/NavMain';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
// import {Routes,Route} from 'react-router-dom';

function App() {
  return (

    <>
    <div className="App">
      
      <NavMain />
      <Home/>
      
    </div>
    <Footer />
    </>
  );
}

export default App;
