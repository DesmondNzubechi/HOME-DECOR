import './App.css';
import { DesktopNav } from './components/Navlink/desktopviewNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MobileNav } from './components/Navlink/mobileviewNav';
import { Home } from './pages/Home/Home';
import { Bedroom } from './pages/Bedroom/Bedroom';
import { Livingroom } from './pages/Livingroom/Livingroom';
import { Dinningroom } from './pages/Dinningroom/Dinningroom';
import { Office } from './pages/Office/Office';
import { OutdoorFurniture } from './pages/Outdoor/OutDoor';

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
  <Dinningroom/>
  <Office/>
  <OutdoorFurniture/>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
