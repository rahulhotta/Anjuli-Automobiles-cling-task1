import './App.css';

import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Services from './Components/Services/Services';
import HotDeals from './Components/HotDeals/HotDeals';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Product />
      <Services />
      <HotDeals />
      <Contact/>
    </div>
  );
}

export default App;
