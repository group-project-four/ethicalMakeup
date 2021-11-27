//importing libraries
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'

//importing components
import MainPage from './components/MainPage';
import NavbarTop from './components/NavbarTop';
import ProductPage from './components/ProductPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/:productID" element={<ProductPage />} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
