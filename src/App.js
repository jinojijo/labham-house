import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './home/Header';
import HomeP from './home/HomeP';
import Product from './sub/Product';
import About from './sub/About';
import ContactUs from './sub/ContactUs';
import SignIn from './sub/SignIn';
import Cart from './sub/Cart';
import TilesCat from './sub/TilesCat';
import Track from './sub/Track';
import Footer from './home/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/homep" element={<HomeP/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/cts" element={<ContactUs/>}></Route>
          <Route path="/sign" element={<SignIn/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/ticat" element={<TilesCat/>}></Route>
          <Route path="/track" element={<Track/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
