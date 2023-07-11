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
import { CartPro } from './components/CartContext/CartContext';
import { CartLog } from './components/Cart/Cart';
import { WishList } from './components/WishList/WishList';
import { SearchP } from './components/Search/Search';
import { Product } from './components/Products/product';
import { CartContext } from './components/CartContext/CartContext';
import { useContext } from 'react';
import { EmailCheckout } from './components/Checkout/CheckoutEmail';
import { PaymentCheckout } from './components/Checkout/CheckoutPayment';
import { AddressCheckout } from './components/Checkout/CheckoutAddress';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { ToastContainer, toast } from 'react-toastify';
import { Signup } from './pages/Signup/Signup';
import { Login } from './pages/login/login';
import { UserProfile } from './components/UserProfile/UserProfile';

function App() {
  return (
    <CartPro>
    <BrowserRouter>
      <div className="App">
  <DesktopNav/>
  <MobileNav/>
  <CartLog/>
  <WishList/>
  <SearchP/>
  <Routes>
    <Route path='/' element={  <Home/>} />
    <Route path='/bedroom' element={<Bedroom/>} />
    <Route path='/livingroom' element={  <Livingroom/>} />
    <Route path='/dinningroom' element={ <Dinningroom/>} />
    <Route path='/outdoor' element={  <OutdoorFurniture/>} />
    <Route path='/decor' element={  <Decor/>} />
    <Route path='/kitchen' element={   <Kitchen/>} />
    <Route path='/office' element={   <Office/>} />
    <Route path='/product' element={<Product/>} />
    <Route path='/checkoutEmail' element={<EmailCheckout/>} />
    <Route path='/checkoutAddress' element={<AddressCheckout/>} />
    <Route path='/checkoutPayment' element={<PaymentCheckout/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/profile' element={<UserProfile/>} />
  </Routes>
  <Footer/>
    </div>
    <ToastContainer
    autoClose={2000}
    />
    </BrowserRouter>
  </CartPro>
  );
}

export default App;
