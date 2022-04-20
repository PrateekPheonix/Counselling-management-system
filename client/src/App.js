import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Button from './Components/button/button';
import Register from './pages/register/register';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Upcoming from './pages/student/upcoming';

function App() {
  return (
    <>
    <div className="app">
    <Router>
    <Upcoming/>
    </Router>
    </div>
    </>
  );
}

export default App;
