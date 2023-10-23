import './styles/App.css';
//import NavBar from './components/navBar';
import AppBarNav from './components/AppBarNav';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import ServicesContainer from './components/villainsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import HerosContainer from './components/herosContainer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Snack from './components/Snackbar';

export const urlBackend = "http://localhost:4000"

export default function App() {
  const dispatch = useDispatch()
  const showNav = useSelector(store => store.appReducer.showNav)

  return (
    <div className="App">

      <Snack />
      <div className='nav_menuOpen' onMouseOver={() => dispatch({ type: "showNav", payload: true })} ></div>

      <CSSTransition
        in={showNav}
        timeout={500} // Duración de la animación en milisegundos
        classNames="fade" // Nombre de la clase CSS para la transición
        unmountOnExit
      >
        <AppBarNav />
      </CSSTransition>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/heros' element={<HerosContainer />} />
        <Route path='/villains' element={<ServicesContainer />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}




