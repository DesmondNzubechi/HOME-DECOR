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
import { Decor } from './pages/Decor/Decor';
import { Kitchen } from './pages/Kitchen/Kitchen';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
  <DesktopNav/>
  <MobileNav/>
  <Routes>
    <Route path='/' element={  <Home/>} />
    <Route path='/bedroom' element={<Bedroom/>} />
    <Route path='/livingroom' element={  <Livingroom/>} />
    <Route path='/dinningroom' element={ <Dinningroom/>} />
    <Route path='/outdoor' element={  <OutdoorFurniture/>} />
    <Route path='/decor' element={  <Decor/>} />
    <Route path='/kitchen' element={   <Kitchen/>} />
    <Route path='/office' element={   <Office/>} />

  </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
