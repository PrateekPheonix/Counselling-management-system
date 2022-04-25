import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/register/register';
import Login from './pages/login/login';
import Upcoming from './pages/student/upcoming';
import Dashboard from './pages/dashboard';

function App() {

  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
