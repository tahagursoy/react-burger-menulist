import './App.css';
import {Routes, Route} from 'react-router-dom'
import Menu from './components/menu';
import Home from './pages/Home';
import Food from './pages/Food';
import Contact from './pages/Contact';
import Customers from './pages/Customers';

function App() {
  return (
    <>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/food' element={<Food />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/customers' element={<Customers />}></Route>
    </Routes>
    </>
  );
}

export default App;
