import './App.css';
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Register } from './pages/Register';
import ExplorePage from './pages/ExplorePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/explore" element={<ExplorePage/>} />
        <Route path="/" element={<Profile/>} />
      </Routes>
    </>
  );
}

export default App;
