//importing libraries
import './App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

//importing components
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';
import Catalogue from './components/Catalogue';

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
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
