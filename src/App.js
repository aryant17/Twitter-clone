import './App.css';
import './index.css'
import Explore from './components/Explore';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Register } from './pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Explore/>} />
        <Route path="/" element={<Profile/>} />
      </Routes>
    </>
  );
}

export default App;
