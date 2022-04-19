import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Button from './Components/button/button';
import Register from './pages/register/register';
import Login from './pages/login/login';

function App() {
  return (
    <>
    <div className="app">
    <Router>
    <Login/>
    </Router>
    </div>
    </>
  );
}

export default App;
