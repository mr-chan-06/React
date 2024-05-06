import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import { Contact } from './Contact';
import { Navbar } from './Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
