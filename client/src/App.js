import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Button from './Components/button/button';
import Register from './pages/register/register';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Upcoming from './pages/student/upcoming';
import Past from './pages/student/past';
import Book from './pages/student/book';

function App() {
  return (
    <>
    <div className="app">
    <Router>
    <Book/>
    </Router>
    </div>
    </>
  );
}

export default App;
