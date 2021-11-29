//importing libraries
import './App.scss'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


//importing components
// import MainNav from './components/MainNav';
import ProductPage from './components/ProductPage'
import Catalogue from './components/Catalogue'
import EyeProducts from './components/EyeProducts'
import LipProducts from './components/LipProducts'
import FaceProducts from './components/FaceProducts'
import HomePage from './components/HomePage'

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
          <Route path="/*" element={<HomePage />} />
          <Route path="/:productID" element={<ProductPage />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/catalogue/eyeproducts" element={<EyeProducts />}/>
          <Route path="/catalogue/lipproducts" element={<LipProducts />}/>
          <Route path="/catalogue/faceproducts" element={<FaceProducts />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App 
