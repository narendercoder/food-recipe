// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipe from './components/Recipe';
import Recipes from './pages/Recipes';
import About from './pages/About';


function App() {
  return (
    <>
      <Header/>
      <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/recipes" element={<Recipes/>} />
       <Route path="/recipe" element={<Recipe/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
