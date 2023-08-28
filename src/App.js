// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipe from './components/Recipe';
import About from './pages/About';
import Searched from './components/Searched';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <>
      <Header/>
      <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/searched/:id" element={<Searched/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/recipe" element={<Recipe/>} />
       <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
