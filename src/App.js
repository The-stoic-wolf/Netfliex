import './input.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import {Route,Routes,BrowserRouter } from 'react-router-dom';
import SignIn from './components/pages/SignIn';

function App() {
  return (
   <>
   <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
