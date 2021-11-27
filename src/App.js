//importing libraries
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

//importing components
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/" style={{textDecoration:'none'}}>
            <h1>Ethical makeup</h1>
          </Link>
        </header>
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/:productID" element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
