import './styles/App.css';
//import NavBar from './components/navBar';
import AppBarMUI from './components/AppBarMUI';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import ProductsContainer from './components/productsContainer';
import ServicesContainer from './components/servicesContainer';

function App() {

  return (
    <div className="App">
    {/* <NavBar /> */}
    <AppBarMUI/>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/products' element={<ProductsContainer />} />
        <Route path='/services' element={<ServicesContainer />} />
      </Routes>
    </div>
  );
}

export default App;
