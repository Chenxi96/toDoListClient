import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Vacation from './pages/Vacation';
import MainPage from './pages/MainPage';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/vacation' element={<Vacation />} />
      </Routes>
    </div>
  );
}

export default App;
