import './App.css';
import { DesktopNav } from './components/Navlink/desktopviewNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MobileNav } from './components/Navlink/mobileviewNav';
import { Home } from './pages/Home/Home';
import { Bedroom } from './pages/Bedroom/Bedroom';
import { Livingroom } from './pages/Livingroom/Livingroom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
  <DesktopNav
  className='fixed bg-red-500 bottom-0'
  />
  <MobileNav/>
  <Home/>
  <Bedroom/>
  <Livingroom/>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
