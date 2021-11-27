//importing libraries
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'

//importing components
import MainPage from './components/MainPage';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
